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
                var CheckNameAdmin = _db.Admins.FirstOrDefault(m => m.Name.ToLower() == login.Name.ToLower()); //check N already exit or not
                var CheckPasswerdAdmin = _db.Admins.FirstOrDefault(m => m.Password == login.Password);

                



                if (CheckNameAdmin == null || CheckPasswerdAdmin == null)
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