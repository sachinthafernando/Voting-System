using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VotingSystems.Models
{
    public class Rank4Admin
    {
        [Key]
        public int Rank4AdminID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(22)")]
        public string Password { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string PollingCenter { get; set; }

        public int? PersonDist { get; set; }
        public int? PersonDiv { get; set; }
        public bool? ScanScreen { get; set; }
        public bool? VoteScreen { get; set; }

        //public int Role { get; set; }
        public string Role = "Rank4Admin";

    }
}
