import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GithubModule } from './github/github.module';
import { SpaceModule } from './space/space.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      autoCreate: true,
    }),
    GithubModule,
    SpaceModule,
  ],
  providers: [],
})
export class AppModule {}
