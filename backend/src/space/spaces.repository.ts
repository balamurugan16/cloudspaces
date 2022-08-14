import { Space, SpaceDocument } from './space.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SpaceRepository {
  constructor(
    @InjectModel(Space.name)
    private readonly spaceModel: Model<SpaceDocument>,
  ) {}

  async create(space: Space): Promise<Space> {
    const createdSpace = new this.spaceModel(space);
    return createdSpace.save();
  }

  async findAll(): Promise<Space[]> {
    return this.spaceModel.find();
  }
}
