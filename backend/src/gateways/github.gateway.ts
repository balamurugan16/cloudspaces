import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Octokit } from 'octokit';

@Injectable()
export class GithubGateway {
  createOctoInstance(token: string) {
    return new Octokit({
      auth: token,
    });
  }

  async getAuthenticatedUser(token: string) {
    let octo: Octokit;
    try {
      octo = this.createOctoInstance(token);
    } catch (e) {
      throw new UnauthorizedException('Token expired');
    }
    const response = await octo.rest.users.getAuthenticated();
    return response.data;
  }
}
