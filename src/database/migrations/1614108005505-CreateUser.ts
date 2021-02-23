import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1614108005505 implements MigrationInterface {

    /**
     * Quando eu quero dar um create na migration que estou executando
     * @param queryRunner 
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "email",
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

    /**
     * Quando eu quero dar um drop na migration que estou executando
     * @param queryRunner 
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
