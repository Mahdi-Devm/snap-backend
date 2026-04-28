import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabasesModule } from 'databases/database.module';
import { confingurations } from './config/confingurations';
import { ServiceModule } from './services/service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: confingurations,
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    DatabasesModule,
    ServiceModule,
  ],
})
export class AppModule {}
