import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/services/service.module';
import { DriverAuthController } from './auth/auth.controller';
import { DriverAuthService } from './auth/auth.service';

@Module({
  imports: [ServiceModule],
  controllers: [DriverAuthController],
  providers: [DriverAuthService],
})
export class DriverModule {}
