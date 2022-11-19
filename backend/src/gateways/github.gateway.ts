import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

@Injectable()
export class GithubGateway {
  createOctoInstance(token: string) {
    return new Octokit({
      auth: token,
    });
  }

  async authenticateUser(token: string) {
    let octo: Octokit;
    try {
      octo = this.createOctoInstance(token);
    } catch (e) {
      console.log(e);
      return;
    }
    const response = await octo.rest.users.getAuthenticated();
    console.log(response);
  }
}
