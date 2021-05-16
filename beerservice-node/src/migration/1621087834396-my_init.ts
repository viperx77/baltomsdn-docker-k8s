import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1621087834396 implements MigrationInterface {
    name = 'myInit1621087834396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "beer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "style" character varying NOT NULL, "abv" integer NOT NULL, CONSTRAINT "PK_68ce81153952014a6e8b20df5c1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "beer"`);
    }

}
