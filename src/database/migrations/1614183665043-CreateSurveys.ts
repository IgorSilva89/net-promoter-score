/**
 * Responsável por criar a entidade no banco
 * criar a tabela: yarn typeorm migration:run
 * dropar a tabela: yarn typeorm migration:revert
 */
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSurveys1614183665043 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "surveys",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveys");
    }


}
