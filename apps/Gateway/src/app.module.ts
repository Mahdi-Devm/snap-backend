import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { confingurations } from './config/confingurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: confingurations,
      isGlobal: true,
      envFilePath: ['.env'],
    }),
  ],
})
export class AppModule {}
