import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  const confinguration = app.get(ConfigService);
  const port = confinguration.get('APP.port') as number;
  await app.listen(port);
  console.log(`server running in port ${port}`);
}
bootstrap();
