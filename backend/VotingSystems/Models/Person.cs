using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VotingSystems.Models
{
    public class Person
    {
        [Key,Required,DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int NIC { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SerialNo { get; set; }
        public bool Voted { get; set; }

        public int GND { get; set; }
        [ForeignKey("GND")]
        public virtual GNDivision GNDivision { get; set; }
    }
}
