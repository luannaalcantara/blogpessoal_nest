import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";



@Injectable()
export class PostagemService {

    constructor(
        @InjectRepository(Postagem)
        private readonly postagemRepository: Repository<Postagem>) { } // injeção de dependencia 

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find() // selet* from tb_postagem;

    }

    async findById(id: number): Promise<Postagem> {

        const postagem = await this.postagemRepository.findOne({
            where: {
                id
            }

        });

        if (!postagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return postagem;

    }
    async findAllByTitulo(titulo: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            }
        })

    }

    async create(postagem: Postagem): Promise<Postagem> {
        return await this.postagemRepository.save(postagem);

    }

    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id);
        return await this.postagemRepository.delete(id);

    }

    async update(postagem: Postagem): Promise<Postagem> {
        await this.findById(postagem.id)
        return await this.postagemRepository.save(postagem);

    }
}