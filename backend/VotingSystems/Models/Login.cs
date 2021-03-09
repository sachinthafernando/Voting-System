using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace VotingSystems.Models
{
    public class Login
    {
        

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Cannot leave this field empty")]
        public string Password { get; set; }
    }
}
