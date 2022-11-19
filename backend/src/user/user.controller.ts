import { UserService } from './user.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async authenticate(@Body('code') code: string) {
    return this.userService.authenticate(code);
  }
}
