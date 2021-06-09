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

        [HttpGet]
        public List<Admin> getall()
        {
            return _db.Admins.ToList();
        }




        // POST api/<LogSignUpController>
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(Login login)
        {
            try
            {            // VotingDB.Add(newadmin);
<<<<<<< HEAD
                var CheckNameAdmin = _db.Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower()); //check N already exit or not
                var CheckPasswerdAdmin = _db.Admins.FirstOrDefault(m => m.Password == login.Password);

                



                if (CheckNameAdmin == null || CheckPasswerdAdmin == null)
=======
                if ((_db.Rank1Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower()) != null))
>>>>>>> host
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
                else if ((_db.Rank4Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower())) != null)
                {
                    var rank4Admin = _db.Rank4Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower());
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
<<<<<<< HEAD

                    // Return token
                    var tokenString = _jwtService.GenerateJWTtoken(login);
                    return Ok(new
                    {
                        token = tokenString
                    });
                   /// return Ok();
=======
                    return BadRequest();
>>>>>>> host
                }
            }


            catch (Exception ex)
            {
                throw ex;
            }

        }
    }

}