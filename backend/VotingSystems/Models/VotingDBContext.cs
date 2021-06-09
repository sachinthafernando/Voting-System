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

<<<<<<< HEAD
=======
            modelBuilder.Entity<District_Party>()          // To stop looping with models.
               .HasKey(dp => new { dp.District_ID, dp.Party_ID });

            modelBuilder.Entity<District_Party>()          // To stop looping with models.
                .HasOne<District>(dp => dp.District)
                .WithMany(v => v.District_Parties)
                .HasForeignKey(dp => dp.District_ID);

            modelBuilder.Entity<District_Party>()          // To stop looping with models.
                .HasOne<Party>(dp => dp.Party)
                .WithMany(v => v.District_Parties)
                .HasForeignKey(dp => dp.Party_ID);

            modelBuilder.Entity<Rank1Admin>()
                .HasData(
                    new { Rank1AdminID = 1, Name = "Admin", Password = "password" }
                );

>>>>>>> host
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<VotingSystems.Models.VoteCan> VoteCan { get; set; }
    }
}
