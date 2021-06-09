using Microsoft.EntityFrameworkCore.Migrations;

namespace VotingSystems.Migrations
{
    public partial class Add_Rolles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Rank1Admin",
                columns: table => new
                {
                    Rank1AdminID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(22)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rank1Admin", x => x.Rank1AdminID);
                });

            migrationBuilder.CreateTable(
                name: "Rank2Admin",
                columns: table => new
                {
                    Rank2AdminID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(22)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rank2Admin", x => x.Rank2AdminID);
                });

            migrationBuilder.CreateTable(
                name: "Rank3Admin",
                columns: table => new
                {
                    Rank3AdminID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(22)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rank3Admin", x => x.Rank3AdminID);
                });

            migrationBuilder.CreateTable(
                name: "Rank4Admin",
                columns: table => new
                {
                    Rank4AdminID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(22)", nullable: true),
                    PollingCenter = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    PersonDist = table.Column<int>(type: "int", nullable: false),
                    PersonDiv = table.Column<int>(type: "int", nullable: false),
                    ScanScreen = table.Column<bool>(type: "bit", nullable: false),
                    VoteScreen = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rank4Admin", x => x.Rank4AdminID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Rank1Admin");

            migrationBuilder.DropTable(
                name: "Rank2Admin");

            migrationBuilder.DropTable(
                name: "Rank3Admin");

            migrationBuilder.DropTable(
                name: "Rank4Admin");
        }
    }
}
