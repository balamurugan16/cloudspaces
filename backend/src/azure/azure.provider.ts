import { StorageManagementClient } from '@azure/arm-storage';
import { ResourceManagementClient } from '@azure/arm-resources';
import { WebSiteManagementClient } from '@azure/arm-appservice';
import { DefaultAzureCredential } from '@azure/identity';
import { AZURE_CLIENTS } from './types/azure.types';

export const AzureWebClientProvider = {
  provide: AZURE_CLIENTS.WEBSITE,
  useFactory: (cred: DefaultAzureCredential) =>
    new WebSiteManagementClient(cred, process.env.AZURE_SUBSCRIPTION_ID),
  inject: [DefaultAzureCredential],
};

export const AzureResourceClientProvider = {
  provide: AZURE_CLIENTS.RESOURCE,
  useFactory: (cred: DefaultAzureCredential) =>
    new ResourceManagementClient(cred, process.env.AZURE_SUBSCRIPTION_ID),
  inject: [DefaultAzureCredential],
};

export const AzureStorageClientProvider = {
  provide: AZURE_CLIENTS.STORAGE,
  useFactory: (cred: DefaultAzureCredential) =>
    new StorageManagementClient(cred, process.env.AZURE_SUBSCRIPTION_ID),
  inject: [DefaultAzureCredential],
};
