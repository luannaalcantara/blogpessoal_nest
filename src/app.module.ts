import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemController } from './postagem/controller/postagem.controller';
import { PostagemService } from './postagem/services/postagem.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',  // type of database
      host: 'localhost', // host of database
      port: 3306, // port of databse
      username: 'root', // username of database
      password: 'root', // password of database
      database: 'db_blogpessoal',  // name of database
      entities: [Postagem],
      synchronize: true
    }),

  TypeOrmModule.forFeature([Postagem]),
  ],
  controllers: [AppController, PostagemController],
  providers: [AppService, PostagemService],
})
export class AppModule {}
