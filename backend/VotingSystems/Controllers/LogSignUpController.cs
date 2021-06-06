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
        public async Task<IActionResult> Login(Login login)
        {
            try
            {            // VotingDB.Add(newadmin);
                if ((_db.Rank1Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower()) != null))
                {
                    var rank1Admin = _db.Rank1Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower());
                    if (rank1Admin.Password == login.Password)
                    {
                        var tokenString = _jwtService.GenerateJWTtoken(login);
                        return Ok(new
                        {
                            token = tokenString
                        });
                    }
                    return BadRequest();
                }
                else if ((_db.Rank2Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower())) != null)
                {
                    var rank2Admin = _db.Rank2Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower());
                    if (rank2Admin.Password == login.Password)
                    {
                        var tokenString = _jwtService.GenerateJWTtoken(login);
                        return Ok(new
                        {
                            token = tokenString
                        });
                    }
                    return BadRequest(); //New page

                }
                else if ((_db.Rank3Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower())) != null)
                {
                    var rank3Admin = _db.Rank3Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower());
                    if (rank3Admin.Password == login.Password)
                    {
                        var tokenString = _jwtService.GenerateJWTtoken(login);
                        return Ok(new
                        {
                            token = tokenString
                        });
                    }
                    return BadRequest(); //New page

                }
                else if ((_db.Rank3Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower())) != null)
                {
                    var rank4Admin = _db.Rank3Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower());
                    if (rank4Admin.Password == login.Password)
                    {
                        var tokenString = _jwtService.GenerateJWTtoken(login);
                        return Ok(new
                        {
                            token = tokenString
                        });
                    }
                    return BadRequest();

                }
                else
                {
                    return BadRequest();
                }
            }


            catch (Exception ex)
            {
                throw ex;
            }

        }
    }

}