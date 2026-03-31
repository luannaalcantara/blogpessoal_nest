import { isNotEmpty, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"})  // cria uma tabela chamada tb_postagem
export class Postagem {

    @PrimaryGeneratedColumn() // cria uma chave primaria e auto increment 
    id: number;

     @IsNotEmpty() //verifica se o campo esta vazio
     @Column({length: 100, nullable: false}) // criar uma coluna chamada titulo, com 100 caracteres e nao pode ser nulo
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

     @UpdateDateColumn() // criar uma coluna chamada data atualização da postagem
     data: Date;

}