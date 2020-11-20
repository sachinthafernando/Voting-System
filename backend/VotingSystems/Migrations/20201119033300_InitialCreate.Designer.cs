﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VotingSystems.Models;

namespace VotingSystems.Migrations
{
    [DbContext(typeof(VotingDBContext))]
    [Migration("20201119033300_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("VotingSystems.Models.Admin", b =>
                {
                    b.Property<int>("AdminID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(22)");

                    b.Property<int>("Rank")
                        .HasColumnType("int");

                    b.HasKey("AdminID");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("VotingSystems.Models.Candidate", b =>
                {
                    b.Property<int>("CandidateID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CandidateName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("CandidateNo")
                        .HasColumnType("nvarchar(5)");

                    b.Property<int>("CandidateVoteCount")
                        .HasColumnType("int");

                    b.Property<int>("Party_ID")
                        .HasColumnType("int");

                    b.HasKey("CandidateID");

                    b.HasIndex("Party_ID");

                    b.ToTable("Candidates");
                });

            modelBuilder.Entity("VotingSystems.Models.District", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("ID");

                    b.ToTable("Districts");
                });

            modelBuilder.Entity("VotingSystems.Models.Division", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ED_ID")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("ID");

                    b.HasIndex("ED_ID");

                    b.ToTable("Divisions");
                });

            modelBuilder.Entity("VotingSystems.Models.GNDivision", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("PD_ID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("PD_ID");

                    b.ToTable("GNDivisions");
                });

            modelBuilder.Entity("VotingSystems.Models.Party", b =>
                {
                    b.Property<int>("PartyID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<byte[]>("Color")
                        .HasColumnType("varbinary(200)");

                    b.Property<byte[]>("Logo")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("PartyName")
                        .HasColumnType("nvarchar(200)");

                    b.Property<int>("PartyVotecount")
                        .HasColumnType("int");

                    b.HasKey("PartyID");

                    b.ToTable("Parties");
                });

            modelBuilder.Entity("VotingSystems.Models.Person", b =>
                {
                    b.Property<int>("NIC")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("GND")
                        .HasColumnType("int");

                    b.Property<int>("SerialNo")
                        .HasColumnType("int");

                    b.Property<bool>("Voted")
                        .HasColumnType("bit");

                    b.HasKey("NIC");

                    b.HasIndex("GND");

                    b.ToTable("People");
                });

            modelBuilder.Entity("VotingSystems.Models.Vote", b =>
                {
                    b.Property<int>("VoteID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Party_ID")
                        .HasColumnType("int");

                    b.Property<DateTime>("Time")
                        .HasColumnType("datetime2");

                    b.HasKey("VoteID");

                    b.HasIndex("Party_ID");

                    b.ToTable("Votes");
                });

            modelBuilder.Entity("VotingSystems.Models.VoteCan", b =>
                {
                    b.Property<int>("VoteCanID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Candidate_ID")
                        .HasColumnType("int");

                    b.Property<DateTime>("Time")
                        .HasColumnType("datetime2");

                    b.Property<int>("Vote_ID")
                        .HasColumnType("int");

                    b.HasKey("VoteCanID");

                    b.HasIndex("Candidate_ID");

                    b.HasIndex("Vote_ID");

                    b.ToTable("VoteCan");
                });

            modelBuilder.Entity("VotingSystems.Models.Candidate", b =>
                {
                    b.HasOne("VotingSystems.Models.Party", "Party")
                        .WithMany("Candidates")
                        .HasForeignKey("Party_ID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("VotingSystems.Models.Division", b =>
                {
                    b.HasOne("VotingSystems.Models.District", "District")
                        .WithMany("Divisions")
                        .HasForeignKey("ED_ID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("VotingSystems.Models.GNDivision", b =>
                {
                    b.HasOne("VotingSystems.Models.Division", "Division")
                        .WithMany("GNDivisions")
                        .HasForeignKey("PD_ID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("VotingSystems.Models.Person", b =>
                {
                    b.HasOne("VotingSystems.Models.GNDivision", "GNDivision")
                        .WithMany("People")
                        .HasForeignKey("GND")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("VotingSystems.Models.Vote", b =>
                {
                    b.HasOne("VotingSystems.Models.Party", "Party")
                        .WithMany("Votes")
                        .HasForeignKey("Party_ID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("VotingSystems.Models.VoteCan", b =>
                {
                    b.HasOne("VotingSystems.Models.Candidate", "Candidate")
                        .WithMany("VoteCandidates")
                        .HasForeignKey("Candidate_ID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("VotingSystems.Models.Vote", "Votes")
                        .WithMany("VoteCandidates")
                        .HasForeignKey("Vote_ID")
                        .OnDelete(DeleteBehavior.Restrict);
                });
#pragma warning restore 612, 618
        }
    }
}
