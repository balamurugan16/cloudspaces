import { DefaultAzureCredential } from '@azure/identity';
import { WebSiteManagementClient } from '@azure/arm-appservice';
import { AzureService } from './azure.service';
import { ResourceManagementClient } from '@azure/arm-resources';
import { Module } from '@nestjs/common';
import {
  AZURE_WEBSITE_CLIENT,
  AZURE_RESOURCE_CLIENT,
} from './types/azure.types';

const AzureWebClientProvider = {
  provide: AZURE_WEBSITE_CLIENT,
  useFactory: () => {
    return new WebSiteManagementClient(
      new DefaultAzureCredential(),
      process.env.AZURE_SUBSCRIPTION_ID,
    );
  },
};

const AzureResourceClientProvider = {
  provide: AZURE_RESOURCE_CLIENT,
  useFactory: () => {
    return new ResourceManagementClient(
      new DefaultAzureCredential(),
      process.env.AZURE_SUBSCRIPTION_ID,
    );
  },
};

@Module({
  providers: [
    AzureService,
    AzureWebClientProvider,
    AzureResourceClientProvider,
  ],
  exports: [AzureService],
})
export class AzureModule {}
