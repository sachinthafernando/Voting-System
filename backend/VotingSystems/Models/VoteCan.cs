using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VotingSystems.Models
{
    public class VoteCan
    {
        [Key]
        public int VoteCanID { get; set; }
        public String Time { get; set; }
        public int personDist { get; set; }
        public int personDiv { get; set; }

        public int Candidate_ID { get; set; }
        [ForeignKey("Candidate_ID")]
        public virtual Candidate Candidate { get; set; }

    }
}
