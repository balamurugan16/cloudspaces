import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
  getUserPAT() {
    return process.env.PAT;
  }
}
