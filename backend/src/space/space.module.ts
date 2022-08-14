import { AzureModule } from './../azure/azure.module';
import { Space, SpaceSchema } from './space.schema';
import { SpaceRepository } from './spaces.repository';
import { Module } from '@nestjs/common';
import { SpaceController } from './space.controller';
import { SpaceService } from './space.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Space.name, schema: SpaceSchema }]),
    AzureModule,
  ],
  controllers: [SpaceController],
  providers: [SpaceService, SpaceRepository],
})
export class SpaceModule {}
