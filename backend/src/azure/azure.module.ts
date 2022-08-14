import { DefaultAzureCredential } from '@azure/identity';
import { Module } from '@nestjs/common';
import {
  AzureResourceClientProvider,
  AzureStorageClientProvider,
  AzureWebClientProvider,
} from './azure.provider';
import { AzureService } from './azure.service';

@Module({
  providers: [
    AzureService,
    DefaultAzureCredential,
    AzureWebClientProvider,
    AzureResourceClientProvider,
    AzureStorageClientProvider,
  ],
  exports: [AzureService],
})
export class AzureModule {}
