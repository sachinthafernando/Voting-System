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

        public DbSet<Party> Parties { get; set; }
        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<Vote> Votes { get; set; }
        public DbSet<Person> People { get; set; }
        public DbSet<District> Districts { get; set; }
        public DbSet<Division> Divisions { get; set; }
        public DbSet<GNDivision> GNDivisions { get; set; }
        public DbSet<District_Party> District_Parties { get; set; }
        public DbSet<Rank1Admin> Rank1Admins { get; set; }
        public DbSet<Rank2Admin> Rank2Admins { get; set; }
        public DbSet<Rank3Admin> Rank3Admins { get; set; }
        public DbSet<Rank4Admin> Rank4Admins { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Candidate>()          // To stop looping with models.
                .HasOne<District>(p => p.District)
                .WithMany(v => v.Candidates)
                .HasForeignKey(v => v.District_ID)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<VoteCan>()          // To stop looping with models.
                .HasOne<Candidate>(p => p.Candidate)
                .WithMany(v => v.VoteCandidates)
                .HasForeignKey(v => v.Candidate_ID)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Vote>()          // To stop looping with models.
                .HasOne<Party>(p => p.Party)
                .WithMany(v => v.Votes)
                .HasForeignKey(v => v.Party_ID)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.Restrict);

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

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<VotingSystems.Models.VoteCan> VoteCan { get; set; }

        public DbSet<VotingSystems.Models.Rank1Admin> Rank1Admin { get; set; }

        public DbSet<VotingSystems.Models.Rank2Admin> Rank2Admin { get; set; }

        public DbSet<VotingSystems.Models.Rank3Admin> Rank3Admin { get; set; }

        public DbSet<VotingSystems.Models.Rank4Admin> Rank4Admin { get; set; }
    }
}
