using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace WebRozetka.Migrations
{
    /// <inheritdoc />
    public partial class AddNovaPoshta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "WarehousesId",
                table: "tblOrderContactInfos",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "tblAreas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Ref = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false),
                    Description = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblAreas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tblSettlements",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Ref = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Description = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    AreaId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblSettlements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblSettlements_tblAreas_AreaId",
                        column: x => x.AreaId,
                        principalTable: "tblAreas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tblWarehouses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Ref = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Description = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Number = table.Column<int>(type: "integer", nullable: false),
                    SettlementId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblWarehouses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblWarehouses_tblSettlements_SettlementId",
                        column: x => x.SettlementId,
                        principalTable: "tblSettlements",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblOrderContactInfos_WarehousesId",
                table: "tblOrderContactInfos",
                column: "WarehousesId");

            migrationBuilder.CreateIndex(
                name: "IX_tblSettlements_AreaId",
                table: "tblSettlements",
                column: "AreaId");

            migrationBuilder.CreateIndex(
                name: "IX_tblWarehouses_SettlementId",
                table: "tblWarehouses",
                column: "SettlementId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblOrderContactInfos_tblWarehouses_WarehousesId",
                table: "tblOrderContactInfos",
                column: "WarehousesId",
                principalTable: "tblWarehouses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrderContactInfos_tblWarehouses_WarehousesId",
                table: "tblOrderContactInfos");

            migrationBuilder.DropTable(
                name: "tblWarehouses");

            migrationBuilder.DropTable(
                name: "tblSettlements");

            migrationBuilder.DropTable(
                name: "tblAreas");

            migrationBuilder.DropIndex(
                name: "IX_tblOrderContactInfos_WarehousesId",
                table: "tblOrderContactInfos");

            migrationBuilder.DropColumn(
                name: "WarehousesId",
                table: "tblOrderContactInfos");
        }
    }
}
