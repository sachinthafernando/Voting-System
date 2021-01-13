using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
//using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using VotingSystems.Models;

namespace VotingSystems.Models
{
    public class VotingDBContext : DbContext
    {
        public VotingDBContext(DbContextOptions<VotingDBContext> options) : base(options)
        {
                
        }

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Party> Parties { get; set; }
        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<Vote> Votes { get; set; }
        public DbSet<Person> People { get; set; }
        public DbSet<District> Districts { get; set; }
        public DbSet<Division> Divisions { get; set; }
        public DbSet<GNDivision> GNDivisions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VoteCan>()          // To stop looping with models.
                .HasOne<Vote>(p => p.Votes)
                .WithMany(v => v.VoteCandidates)
                .HasForeignKey(v => v.Vote_ID)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.Restrict);

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<VotingSystems.Models.VoteCan> VoteCan { get; set; }
    }
}
