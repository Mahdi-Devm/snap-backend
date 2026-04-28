import { Module } from '@nestjs/common';
import { DriversService } from 'porviders/drivers.service';
import { SelfActionService } from './action.service';
import { ServiceController } from './service.controller';

@Module({
  imports: [],
  controllers: [ServiceController],
  providers: [SelfActionService, DriversService],
})
export class ServiceModule {}
