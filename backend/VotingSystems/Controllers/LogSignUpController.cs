using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using VotingSystems.Models;
using VotingSystems.Services.JWTService;

namespace VotingSystems.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogSignUpController : ControllerBase
    {
        public readonly VotingDBContext _db;

        private readonly IConfiguration _config; // To read from the config file
        private IJWTService _jwtService;




        public LogSignUpController(IConfiguration config, IJWTService jwtservice, VotingDBContext db)
        {
            _config = config;
            _jwtService = jwtservice;
            _db = db;


        }




        // POST api/<LogSignUpController>
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult>Login(Login login)
        {
            try
            {            // VotingDB.Add(newadmin);
                var CheckNameRank1Admin = _db.Rank1Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower());
                var CheckPasswerdRank1Admin = _db.Rank1Admins.FirstOrDefault(m => m.Password == login.Password);

                var CheckNameRank2Admin = _db.Rank2Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower());
                var CheckPasswerdRank2Admin = _db.Rank2Admins.FirstOrDefault(m => m.Password == login.Password);

                var CheckNameRank3Admin = _db.Rank3Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower());
                var CheckPasswerdRank3Admin = _db.Rank3Admins.FirstOrDefault(m => m.Password == login.Password);

                var CheckNameRank4Admin = _db.Rank4Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower());
                var CheckPasswerdRank4Admin = _db.Rank4Admins.FirstOrDefault(m => m.Password == login.Password);





                if ((CheckNameRank1Admin == null || CheckPasswerdRank1Admin == null) && (CheckNameRank2Admin == null || CheckPasswerdRank2Admin == null) && (CheckNameRank3Admin == null || CheckPasswerdRank3Admin == null) && (CheckNameRank4Admin == null || CheckPasswerdRank4Admin == null))
                {
                    return BadRequest(); //New page
                }



                else
                {

                    // Return token
                    var tokenString = _jwtService.GenerateJWTtoken(login);
                    return Ok(new
                    {
                        token = tokenString
                    });
                    /// return Ok();
                }



            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


    }



}