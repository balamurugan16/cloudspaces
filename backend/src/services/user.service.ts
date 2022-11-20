import { GithubGateway } from './../gateways/github.gateway';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly githubGateway: GithubGateway) {}
}
