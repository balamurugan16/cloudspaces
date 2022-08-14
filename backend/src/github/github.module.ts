import { Octokit } from 'octokit';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { Module } from '@nestjs/common';

const OCTOKIT = 'OCTOKIT';

@Module({
  controllers: [GithubController],
  providers: [
    GithubService,
    {
      provide: OCTOKIT,
      useFactory: () => new Octokit({ auth: process.env.PAT }),
    },
  ],
})
export class GithubModule {}
