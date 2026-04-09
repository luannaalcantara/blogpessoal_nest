// utilizado pelo endpoint de autenticação para receber a credencial do usuario(usuario e senha)

import {Injectable} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){}