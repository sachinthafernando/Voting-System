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

            // Find User role
            
            var isAdmin = _db.Admins.FirstOrDefault(m => m.Name.ToLower() == user.Name.ToLower());

            var currentUserRole = new object();
            var currentUserId = new object();
/*
            if (isSeller != null)
            {
                currentUserRole = isSeller.UserRole;
                currentUserId = isSeller.SellerId;
            }
            else
            {
                currentUserRole = isCustomer.UserRole;
                currentUserId = isCustomer.CustomerId;
            }
*/
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Name),
                new Claim("id", currentUserId.ToString()),
                new Claim("role", currentUserRole.ToString()),
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
