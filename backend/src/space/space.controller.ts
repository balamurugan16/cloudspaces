import { CreateSpaceDTO } from './dtos/create-space.dto';
import { SpaceService } from './space.service';
import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { Space } from './space.schema';

@Controller('space')
export class SpaceController {
  constructor(private spaceService: SpaceService) {}

  @Post('create')
  async createSpace(@Body() space: CreateSpaceDTO) {
    const response = await this.spaceService.createSpace(space);
    if (!response)
      throw new InternalServerErrorException('Name already Available');
    return response;
  }
}
