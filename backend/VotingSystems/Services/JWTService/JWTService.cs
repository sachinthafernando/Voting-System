using VotingSystems.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace VotingSystems.Services.JWTService
{
    public class JWTService : IJWTService
    {

        private readonly IConfiguration _config;
        private readonly VotingDBContext _db;
        public JWTService(IConfiguration config, VotingDBContext db)
        {
            _config = config;
            _db = db;
        }

        public string GenerateJWTtoken(Login user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:SecretKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            // Find User rank

            var isRank1Admin = _db.Rank1Admins.FirstOrDefault(m => m.Name.ToLower() == user.Name.ToLower());
            var isRank2Admin = _db.Rank2Admins.FirstOrDefault(m => m.Name.ToLower() == user.Name.ToLower());
            var isRank3Admin = _db.Rank3Admins.FirstOrDefault(m => m.Name.ToLower() == user.Name.ToLower());
            var isRank4Admin = _db.Rank4Admins.FirstOrDefault(m => m.Name.ToLower() == user.Name.ToLower());

            var currentRole = new object();
            var currentId = new object();

            if (isRank1Admin != null)
            {
                currentRole = isRank1Admin.Role;
                currentId = isRank1Admin.Rank1AdminID;
            }
            else if (isRank2Admin != null)
            {
                currentRole = isRank2Admin.Role;
                currentId = isRank2Admin.Rank2AdminID;
            }
            else if (isRank3Admin != null)
            {
                currentRole = isRank3Admin.Role;
                currentId = isRank3Admin.Rank3AdminID;
            }
            else
            {
                currentRole = isRank4Admin.Role;
                currentId = isRank4Admin.Rank4AdminID;
            }

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Name),
                new Claim("id", currentId.ToString()),
                new Claim("role", currentRole.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),


            };

            var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddMinutes(30),
            signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
