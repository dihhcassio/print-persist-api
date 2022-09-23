import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
var pjson = require('../package.json');

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule, { cors: true })
  const configService = app.get(ConfigService);

  const showSwagger = configService.get('SWAGGER_SHOW', 'true');
  if (showSwagger === 'true') {
    const config = new DocumentBuilder()
      .setTitle('Microserviço Tech Talk')
      .setDescription('')
      .setVersion(pjson.version)
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
        'JWT-auth',
      )
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);
    logger.log('Swagger Inicialized');
  }
  await app.listen(3000);
}
bootstrap();
