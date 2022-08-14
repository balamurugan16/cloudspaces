import { CreateSpaceDTO } from './dtos/create-space.dto';
import { AzureService } from './../azure/azure.service';
import { SpaceRepository } from './spaces.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SpaceService {
  constructor(
    private readonly spaceRepo: SpaceRepository,
    private readonly azureService: AzureService,
  ) {}

  async findAllSpaces() {
    return this.spaceRepo.findAll();
  }

  async createSpace(space: CreateSpaceDTO) {
    // create azure app service
    // creates resource group if user is not having one already
    // creates a fileshare if user is not having it already
    const storageAccountResponse = await this.azureService.createStorageAccount(
      'balamurugan-resourceGroup',
      'balastorageaccount',
    );
    console.log(storageAccountResponse);
    const createdSpace = await this.spaceRepo.create({
      ...space,
      createdAt: new Date(Date.now()),
      resourceGroupName: 'balamurugan-resourceGroup',
    });
    return createdSpace;
  }
}
