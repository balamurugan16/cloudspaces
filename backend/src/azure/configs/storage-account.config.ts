import {
  KnownSkuName,
  StorageAccountCreateParameters,
} from '@azure/arm-storage';

const storageAccountParameters: StorageAccountCreateParameters = {
  location: 'southindia',
  kind: 'StorageV2',
  sku: {
    name: KnownSkuName.StandardLRS,
  },
  encryption: {
    services: {
      file: {
        keyType: 'Account',
        enabled: true,
      },
    },
    keySource: 'Microsoft.Storage',
  },
};

export default storageAccountParameters;
