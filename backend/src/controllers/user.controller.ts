import { AuthService } from '../services/auth.service';
import { Body, Controller, Post, Query } from '@nestjs/common';

type Provider = 'github' | 'gitlab';
@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post('authenticate')
  async authenticate(
    @Body('code') code: string,
    @Query('provider') provider: Provider,
  ) {
    if (provider === 'github') return this.authService.continueWithGithub(code);
    return this.authService.continueWithGitlab(code);
  }
}
