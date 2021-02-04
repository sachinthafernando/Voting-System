﻿using Microsoft.AspNetCore.Http;
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
        public int PartyVotecount { get; set; }
        public byte[] Logo { get; set; }

        [Column(TypeName = "varbinary(200)")]
        public string Color { get; set; }

        public virtual ICollection<Candidate> Candidates { get; set; }

        public virtual ICollection<Vote> Votes { get; set; }
    }
}