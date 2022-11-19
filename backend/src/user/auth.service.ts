import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpService, private configService: ConfigService) {}
  async continueWithGithub(code: string) {
    const url = 'https://github.com/login/oauth/access_token'
    const { data } = await this.http.post(url, {
      client_id: this.configService.get<string>('OAUTH_CLIENT_ID');
      client_secret: this.configService.get<string>('OAUTH_CLIENT_SECRET');
      code,
    }, {
      headers: {
         'Content-Type': 'application/json',
      }
    })

  }
}
