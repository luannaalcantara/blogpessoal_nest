import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controller/postagem.controller"; 

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], // importa o Postagem como uma entidade
    providers: [PostagemService], // define o PostagemService como um provedor
    controllers: [PostagemController],
    exports: [TypeOrmModule]  // exporta o TypeOrmModule
})
export class PostagemModule {}