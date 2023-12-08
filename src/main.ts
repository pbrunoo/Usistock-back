import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const swaggerDocumentBuilder = (new DocumentBuilder())
    .setTitle('Usistock')
    .setVersion('1.0')
    .build();

  app.enableCors()

  app.use(bodyParser.json({ limit: '64mb' }));
  app.use(bodyParser.urlencoded({ limit: '64mb', extended: true }));

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerDocumentBuilder);
  SwaggerModule.setup('/', app, swaggerDocument);
  
  console.log(swaggerDocument);
  await app.listen(3000);
}

bootstrap();
