import { ResourceManagementClient } from '@azure/arm-resources';
import { WebSiteManagementClient } from '@azure/arm-appservice';
import {
  AZURE_WEBSITE_CLIENT,
  AZURE_RESOURCE_CLIENT,
} from './types/azure.types';
import { Inject, Injectable } from '@nestjs/common';
import siteEnvelope from './configs/webapp.config';

@Injectable()
export class AzureService {
  constructor(
    @Inject(AZURE_WEBSITE_CLIENT) private webClient: WebSiteManagementClient,
    @Inject(AZURE_RESOURCE_CLIENT)
    private resourceClient: ResourceManagementClient,
  ) {}

  async createAppService(appServiceName: string, resourceGroupName: string) {
    const response = await this.webClient.webApps.beginCreateOrUpdate(
      resourceGroupName,
      appServiceName,
      siteEnvelope,
    );
    return response.getResult();
  }

  async createResourceGroup(resourceGroupName: string) {
    return this.resourceClient.resourceGroups.createOrUpdate(
      resourceGroupName,
      {
        location: 'centralindia',
      },
    );
  }

  async createFileShare() {}
}
