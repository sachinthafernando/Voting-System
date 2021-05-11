using Microsoft.EntityFrameworkCore.Migrations;

namespace VotingSystems.Migrations
{
    public partial class delete_Admin1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PollingCenters");

            migrationBuilder.DropTable(
                name: "Admins");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
                name: "PollingCenters",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Admin_ID = table.Column<int>(type: "int", nullable: false),
                    PersonDist = table.Column<int>(type: "int", nullable: false),
                    PersonDiv = table.Column<int>(type: "int", nullable: false),
                    ScanScreen = table.Column<bool>(type: "bit", nullable: false),
                    VoteScreen = table.Column<bool>(type: "bit", nullable: false)
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

            migrationBuilder.CreateIndex(
                name: "IX_PollingCenters_Admin_ID",
                table: "PollingCenters",
                column: "Admin_ID",
                unique: true);
        }
    }
}
