import { Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { DriverSignupInputDto } from 'src/dtos/driver.dto';
import { DriverAuthService } from './auth.service';

@Controller('Auth')
export class DriverAuthController {
  constructor(private readonly driverAuthService: DriverAuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'SignUp in app by phone number' })
  async signup(body: DriverSignupInputDto) {
    const signupData = await this.driverAuthService.signUp(body);
    return signupData;
  }
}
