import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // configuração da aplicação nest, cria a aplicação

process.env.TZ = '-03:00';    //mudar a variavel que seria o fusio horario dos eua

app.useGlobalPipes(new ValidationPipe); // config de alidaçao de dados de entrada

app.enableCors(); // config de cors para permitir requisições de outras origens

  await app.listen(process.env.PORT ?? 4000);  // execução da aplicação nest, configuração da porta
}
bootstrap();
