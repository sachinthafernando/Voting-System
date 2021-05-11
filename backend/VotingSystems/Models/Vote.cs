using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VotingSystems.Models
{
    public class Vote
    {
        [Key]
        public int VoteID { get; set; }
        public String Time { get; set; }
        public int personDist { get; set; }
        public int personDiv { get; set; }

        public int Party_ID { get; set; }
        [ForeignKey("Party_ID")]
        public virtual Party Party { get; set; }


    }
}
