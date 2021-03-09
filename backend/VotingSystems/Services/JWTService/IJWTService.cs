using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VotingSystems.Models;


namespace VotingSystems.Services.JWTService
{
    public interface IJWTService
    {
        public string GenerateJWTtoken(Login user);
    }
}
