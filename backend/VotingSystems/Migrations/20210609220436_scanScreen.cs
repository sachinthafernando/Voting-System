using Microsoft.EntityFrameworkCore.Migrations;

namespace VotingSystems.Migrations
{
    public partial class scanScreen : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "VoteScreen",
                table: "Rank4Admin",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "ScanScreen",
                table: "Rank4Admin",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "Rank1Admin",
                columns: new[] { "Rank1AdminID", "Name", "Password" },
                values: new object[] { 1, "Admin", "password" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Rank1Admin",
                keyColumn: "Rank1AdminID",
                keyValue: 1);

            migrationBuilder.AlterColumn<bool>(
                name: "VoteScreen",
                table: "Rank4Admin",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AlterColumn<bool>(
                name: "ScanScreen",
                table: "Rank4Admin",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");
        }
    }
}
