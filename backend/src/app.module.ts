import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // MongooseModule.forRoot(process.env.MONGODB_URI, {
    //   autoCreate: true,
    // }),
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
