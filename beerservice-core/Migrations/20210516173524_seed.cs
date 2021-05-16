using Microsoft.EntityFrameworkCore.Migrations;

namespace beerservice_core.Migrations
{
    public partial class seed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "beer",
                columns: new[] { "id", "abv", "name", "style" },
                values: new object[] { 1, 5.5, "Sam Adams", "Boston Lager" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "beer",
                keyColumn: "id",
                keyValue: 1);
        }
    }
}
