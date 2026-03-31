import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";



@Injectable()
export class PostagemService {

    constructor(
        @InjectRepository(Postagem)
        private readonly postagemRepository: Repository<Postagem>){} // injeção de dependencia 

    async findAll(): Promise<Postagem[]>{
    return await this.postagemRepository.find() // selet* from tb_postagem;

    }

}