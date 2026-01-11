import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signupDTO, LoginDto } from './dto/auth.dto';
import { PublicRoute } from './decorators/public.decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @PublicRoute()
  @Post('/signup')
  signup(@Body() dto: signupDTO) {
    return this.authService.signup(dto);
  }

  @PublicRoute()
  @Post('/login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
