import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';
async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  // config
  const configService = app.get(ConfigService);
  const port = configService.get('App.port') as number;

  setupSwagger(app, configService);

  await app.listen(port);
  console.log(`server running in port ${port}`);
}
bootstrap();
