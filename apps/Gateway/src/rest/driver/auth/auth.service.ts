import { Injectable } from '@nestjs/common';
import {
  DriverRequesOtpIputDto,
  DriverVerifyOtpInputDto,
} from 'src/dtos/driver.dto';
import { handleSrvCliResponse } from 'src/response/httpException.filter';
import { MainServiceClient } from 'src/services/main.service';

@Injectable()
export class DriverAuthService {
  constructor(private readonly mainServiceClient: MainServiceClient) {}
  async requestOtp(body: DriverRequesOtpIputDto) {
    const data = await this.mainServiceClient.callAction({
      provider: 'DRIVERS',
      action: 'requestOtp',
      query: body,
    });
    return handleSrvCliResponse(data);
  }

  async verifyOtp(body: DriverVerifyOtpInputDto) {
    const data = await this.mainServiceClient.callAction({
      provider: 'DRIVERS',
      action: 'verifyOtp',
      query: body,
    });

    return handleSrvCliResponse(data);
  }
}
