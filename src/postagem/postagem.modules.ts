import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controller/postagem.controller"; 
import { TemaModule } from "../tema/tema.module";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule], // importa o Postagem como uma entidade
    providers: [PostagemService], // define o PostagemService como um provedor
    controllers: [PostagemController],
    exports: [TypeOrmModule]  // exporta o TypeOrmModule
})
export class PostagemModule {}