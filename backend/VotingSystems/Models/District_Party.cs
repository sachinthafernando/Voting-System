using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VotingSystems.Models
{
    public class District_Party
    {
        public int District_ID { get; set; }
        [ForeignKey("District_ID")]
        public virtual District District { get; set; }
        public int Party_ID { get; set; }
        [ForeignKey("Party_ID")]
        public virtual Party Party { get; set; }
    }
}
