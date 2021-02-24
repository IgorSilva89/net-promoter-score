/**
 * Classe responsável por criar a entidade
 */

import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid } from "uuid";

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

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

export { User }

//posso passar assim também. Passando entre string o nome correto da coluna
    // @Column("name")
    // nameBatata: string;