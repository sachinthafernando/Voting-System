using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VotingSystems.Models
{
    public class Rank2Admin
    {
        [Key]
        public int Rank2AdminID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(22)")]
        public string Password { get; set; }

        public string Role = "Rank2Admin";


    }
}
