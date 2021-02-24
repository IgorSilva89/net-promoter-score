/**
 * Model com os atributos da entidade surveys
 */

import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("surveys")
class Surveys {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    create_at: Date;

    constructor() {
        /**
         * condição para verificar se o ID já existe. Se não existir, crio um novo, senão, uso o que já existe
         */
        if (!this.id) {
            this.id = uuid();
        }
    }
}
export { Surveys }