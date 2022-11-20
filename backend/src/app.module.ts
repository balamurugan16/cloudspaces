import { HttpModule } from '@nestjs/axios';
import { AuthService } from './services/auth.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { GithubGateway } from './gateways/github.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [UserController],
  providers: [UserService, AuthService, GithubGateway],
})
export class AppModule {}
