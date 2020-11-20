using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VotingSystems.Models
{
    public class Division
    {
        [Key]
        public int ID { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }

        public int ED_ID { get; set; }
        [ForeignKey("ED_ID")]
        public virtual District District { get; set; }

        public virtual ICollection<GNDivision> GNDivisions { get; set; }
    }
}
