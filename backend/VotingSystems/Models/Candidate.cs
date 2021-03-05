using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VotingSystems.Models
{
    public class Candidate
    {
        [Key]
        public int CandidateID { get; set; }

        [Column(TypeName ="nvarchar(5)")]
        public string CandidateNo { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CandidateName { get; set; }

        public int CandidateVoteCount { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Image { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }
        [NotMapped]
        public string ImageSrc { get; set; }

        public int Party_ID { get; set; }
        [ForeignKey("Party_ID")]
        public virtual Party Party { get; set; }

        public virtual ICollection<VoteCan> VoteCandidates { get; set; }
    }
}
