using Microsoft.EntityFrameworkCore.Migrations;

namespace VotingSystems.Migrations
{
    public partial class voteCount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "personDist",
                table: "Votes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "personDiv",
                table: "Votes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "personDist",
                table: "VoteCan",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "personDiv",
                table: "VoteCan",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "personDist",
                table: "Votes");

            migrationBuilder.DropColumn(
                name: "personDiv",
                table: "Votes");

            migrationBuilder.DropColumn(
                name: "personDist",
                table: "VoteCan");

            migrationBuilder.DropColumn(
                name: "personDiv",
                table: "VoteCan");
        }
    }
}
