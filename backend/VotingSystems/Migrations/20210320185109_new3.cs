﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace VotingSystems.Migrations
{
    public partial class new3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    AdminID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(22)", nullable: true),
                    Rank = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.AdminID);
                });

            migrationBuilder.CreateTable(
                name: "Districts",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Districts", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Parties",
                columns: table => new
                {
                    PartyID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PartyName = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    Logo = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Color = table.Column<byte[]>(type: "varbinary(200)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parties", x => x.PartyID);
                });

            migrationBuilder.CreateTable(
                name: "PollingCenters",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PersonDist = table.Column<int>(type: "int", nullable: false),
                    PersonDiv = table.Column<int>(type: "int", nullable: false),
                    ScanScreen = table.Column<bool>(type: "bit", nullable: false),
                    VoteScreen = table.Column<bool>(type: "bit", nullable: false),
                    Admin_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PollingCenters", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PollingCenters_Admins_Admin_ID",
                        column: x => x.Admin_ID,
                        principalTable: "Admins",
                        principalColumn: "AdminID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Divisions",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    ED_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Divisions", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Divisions_Districts_ED_ID",
                        column: x => x.ED_ID,
                        principalTable: "Districts",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Candidates",
                columns: table => new
                {
                    CandidateID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CandidateNo = table.Column<string>(type: "nvarchar(5)", nullable: true),
                    CandidateName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Image = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Party_ID = table.Column<int>(type: "int", nullable: false),
                    District_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidates", x => x.CandidateID);
                    table.ForeignKey(
                        name: "FK_Candidates_Districts_District_ID",
                        column: x => x.District_ID,
                        principalTable: "Districts",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Candidates_Parties_Party_ID",
                        column: x => x.Party_ID,
                        principalTable: "Parties",
                        principalColumn: "PartyID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "District_Parties",
                columns: table => new
                {
                    District_ID = table.Column<int>(type: "int", nullable: false),
                    Party_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_District_Parties", x => new { x.District_ID, x.Party_ID });
                    table.ForeignKey(
                        name: "FK_District_Parties_Districts_District_ID",
                        column: x => x.District_ID,
                        principalTable: "Districts",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_District_Parties_Parties_Party_ID",
                        column: x => x.Party_ID,
                        principalTable: "Parties",
                        principalColumn: "PartyID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Votes",
                columns: table => new
                {
                    VoteID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Time = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Party_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Votes", x => x.VoteID);
                    table.ForeignKey(
                        name: "FK_Votes_Parties_Party_ID",
                        column: x => x.Party_ID,
                        principalTable: "Parties",
                        principalColumn: "PartyID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "GNDivisions",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    PD_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GNDivisions", x => x.ID);
                    table.ForeignKey(
                        name: "FK_GNDivisions_Divisions_PD_ID",
                        column: x => x.PD_ID,
                        principalTable: "Divisions",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VoteCan",
                columns: table => new
                {
                    VoteCanID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Time = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Candidate_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VoteCan", x => x.VoteCanID);
                    table.ForeignKey(
                        name: "FK_VoteCan_Candidates_Candidate_ID",
                        column: x => x.Candidate_ID,
                        principalTable: "Candidates",
                        principalColumn: "CandidateID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "People",
                columns: table => new
                {
                    NIC = table.Column<int>(type: "int", nullable: false),
                    SerialNo = table.Column<int>(type: "int", nullable: false),
                    Voted = table.Column<bool>(type: "bit", nullable: false),
                    GND = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_People", x => x.NIC);
                    table.ForeignKey(
                        name: "FK_People_GNDivisions_GND",
                        column: x => x.GND,
                        principalTable: "GNDivisions",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Candidates_District_ID",
                table: "Candidates",
                column: "District_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Candidates_Party_ID",
                table: "Candidates",
                column: "Party_ID");

            migrationBuilder.CreateIndex(
                name: "IX_District_Parties_Party_ID",
                table: "District_Parties",
                column: "Party_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Divisions_ED_ID",
                table: "Divisions",
                column: "ED_ID");

            migrationBuilder.CreateIndex(
                name: "IX_GNDivisions_PD_ID",
                table: "GNDivisions",
                column: "PD_ID");

            migrationBuilder.CreateIndex(
                name: "IX_People_GND",
                table: "People",
                column: "GND");

            migrationBuilder.CreateIndex(
                name: "IX_PollingCenters_Admin_ID",
                table: "PollingCenters",
                column: "Admin_ID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_VoteCan_Candidate_ID",
                table: "VoteCan",
                column: "Candidate_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Votes_Party_ID",
                table: "Votes",
                column: "Party_ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "District_Parties");

            migrationBuilder.DropTable(
                name: "People");

            migrationBuilder.DropTable(
                name: "PollingCenters");

            migrationBuilder.DropTable(
                name: "VoteCan");

            migrationBuilder.DropTable(
                name: "Votes");

            migrationBuilder.DropTable(
                name: "GNDivisions");

            migrationBuilder.DropTable(
                name: "Admins");

            migrationBuilder.DropTable(
                name: "Candidates");

            migrationBuilder.DropTable(
                name: "Divisions");

            migrationBuilder.DropTable(
                name: "Parties");

            migrationBuilder.DropTable(
                name: "Districts");
        }
    }
}
