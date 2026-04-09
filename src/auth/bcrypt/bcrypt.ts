import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt{

    async criptografarSenha(senha: string): Promise<string> {

        let saltos: number = 10;
        return await bcrypt.hash(senha, saltos) // Saltos - É um valor aleatório gerado para garantir
        //  que até senhas iguais resultem em hashes diferentes. 
        // O salt é concatenado à senha antes de ser passado para a função de hash

    }

    async compararSenhas(senhaDigitada: string, senhaBanco: string): Promise<boolean> {
        return await bcrypt.compare(senhaDigitada, senhaBanco); // compara as senhas que o usuario enviou
    }

}