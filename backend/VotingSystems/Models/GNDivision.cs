using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VotingSystems.Models
{
    public class GNDivision
    {
        [Key]
        public int ID { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }

        public int PD_ID { get; set; }
        [ForeignKey("PD_ID")]
        public virtual Division Division { get; set; }

        public virtual ICollection<Person> People { get; set; }
    }
}
