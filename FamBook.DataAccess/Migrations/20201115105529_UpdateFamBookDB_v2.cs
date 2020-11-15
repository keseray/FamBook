using Microsoft.EntityFrameworkCore.Migrations;

namespace FamBook.DataAccess.Migrations
{
    public partial class UpdateFamBookDB_v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LoginInfoId",
                table: "Accounts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_LoginInfoId",
                table: "Accounts",
                column: "LoginInfoId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Accounts_LoginInfos_LoginInfoId",
                table: "Accounts",
                column: "LoginInfoId",
                principalTable: "LoginInfos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Accounts_LoginInfos_LoginInfoId",
                table: "Accounts");

            migrationBuilder.DropIndex(
                name: "IX_Accounts_LoginInfoId",
                table: "Accounts");

            migrationBuilder.DropColumn(
                name: "LoginInfoId",
                table: "Accounts");
        }
    }
}
