import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MainServiceClient {
  constructor(@Inject('Main') private readonly cli: ClientProxy) {}

  async callEvent(data) {
    console.log(data, 'data in Gateyay callEvent');
    try {
      const res: any = await lastValueFrom(this.cli.emit('callEvent', data));
      return res;
    } catch (e) {
      return {
        context: data,
        status: 'FAILED',
        code: HttpStatus.SERVICE_UNAVAILABLE,
        message: null,
        error: null,
        data: `${e}`,
      };
    }
  }
  async callAction(data) {
    console.log(data, 'data in Gateyay');
    try {
      const res: any = await lastValueFrom(this.cli.send('callAction', data));
      return res;
    } catch (e) {
      return {
        context: data,
        status: 'FAILED',
        code: HttpStatus.SERVICE_UNAVAILABLE,
        message: null,
        error: 'err_srvices_failedToResolve',
        data: `${e}`,
      };
    }
  }
}
