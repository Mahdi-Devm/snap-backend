import { Injectable } from '@nestjs/common';
import { DriverSignupInputDto } from 'src/dtos/driver.dto';

@Injectable()
export class DriverAuthService {
  async signUp(body: DriverSignupInputDto) {
    return 'welcome';
  }
}
