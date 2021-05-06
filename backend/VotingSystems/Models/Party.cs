using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;

namespace VotingSystems.Models
{
    public class Party
    {
        [Key]
        public int PartyID { get; set; }

        [Column(TypeName ="nvarchar(200)")]
        public string PartyName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Logo { get; set; }
        [NotMapped]
        public IFormFile LogoFile { get; set; }
        [NotMapped]
        public string LogoSrc { get; set; }

        [Column(TypeName = "varbinary(200)")]
        public string Color { get; set; }

        public virtual ICollection<Candidate> Candidates { get; set; }

        public virtual ICollection<Vote> Votes { get; set; }
        public virtual ICollection<District_Party> District_Parties { get; set; }
    }
}
