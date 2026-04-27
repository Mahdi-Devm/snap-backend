import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { confingurations } from './config/confingurations';
import { RestModule } from './rest/rest.module';
import { ServiceModule } from './services/service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: confingurations,
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    RestModule,
    ServiceModule,
  ],
})
export class AppModule {}
