import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { TokenDetails } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly http: HttpService,
    private configService: ConfigService,
  ) {}

  async continueWithGithub(code: string) {
    const url = 'https://github.com/login/oauth/access_token';
    const body = {
      client_id: this.configService.get<string>('GITHUB_CLIENT_ID'),
      client_secret: this.configService.get<string>('GITHUB_CLIENT_SECRET'),
      code,
    };
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const response = await firstValueFrom(
      this.http.post<TokenDetails>(url, body, config),
    );
    console.log(response.data);
  }

  async continueWithGitlab(code: string) {
    const url = 'https://gitlab.com/login/oauth/token';
    const body = {
      client_id: this.configService.get<string>('GITLAB_CLIENT_ID'),
      client_secret: this.configService.get<string>('GITLAB_CLIENT_SECRET'),
      grant_type: 'authorization_code',
      code,
    };
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const response = await firstValueFrom(
      this.http.post<TokenDetails>(url, body, config),
    );
    console.log(response.data);
  }
}
