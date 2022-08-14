import { StorageManagementClient } from '@azure/arm-storage';
import { ResourceManagementClient } from '@azure/arm-resources';
import { WebSiteManagementClient } from '@azure/arm-appservice';
import { AZURE_CLIENTS } from './types/azure.types';
import { Inject, Injectable } from '@nestjs/common';
import siteEnvelope from './configs/webapp.config';
import storageAccountParameters from './configs/storage-account.config';

@Injectable()
export class AzureService {
  constructor(
    @Inject(AZURE_CLIENTS.WEBSITE)
    private webClient: WebSiteManagementClient,
    @Inject(AZURE_CLIENTS.RESOURCE)
    private resourceClient: ResourceManagementClient,
    @Inject(AZURE_CLIENTS.STORAGE)
    private storageClient: StorageManagementClient,
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
        location: process.env.LOCATION,
      },
    );
  }

  async checkStorageAccountNameAvailability(name: string) {
    return this.storageClient.storageAccounts.checkNameAvailability({
      name,
      type: 'Microsoft.Storage/storageAccounts',
    });
  }

  async createStorageAccount(
    resourcegroupName: string,
    storageAccountName: string,
  ) {
    // storage account name maxlength is 24 with lowercase and numbers only
    const isNameAvailable = await this.checkStorageAccountNameAvailability(
      storageAccountName,
    );
    if (!isNameAvailable.nameAvailable) {
      return this.storageClient.storageAccounts.beginCreateAndWait(
        resourcegroupName,
        storageAccountName,
        storageAccountParameters,
      );
    }
    return isNameAvailable;
  }
}
