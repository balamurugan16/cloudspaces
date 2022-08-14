import { Site } from '@azure/arm-appservice';

const siteEnvelope: Site = {
  location: process.env.LOCATION,
  siteConfig: {
    linuxFxVersion: 'DOCkER|codercom/code-server',
    acrUseManagedIdentityCreds: false,
    alwaysOn: false,
    appSettings: [
      {
        name: 'PASSWORD',
        value: '123',
      },
      {
        name: 'WEBSITES_ENABLE_APP_SERVICE_STORAGE',
        value: 'false',
      },
      {
        name: 'DOCKER_REGISTRY_SERVER_USERNAME',
        value: '',
      },
      {
        name: 'DOCKER_REGISTRY_SERVER_PASSWORD',
        value: '',
      },
      {
        name: 'DOCKER_REGISTRY_SERVER_URL',
        value: 'https://index.docker.io',
      },
      {
        name: 'WEBSITES_PORT',
        value: '8080',
      },
    ],
    azureStorageAccounts: {
      userworkspace: {
        type: 'AzureFiles',
        accessKey: '',
        accountName: '',
        mountPath: '',
        shareName: '',
      },
    },
  },
};

export default siteEnvelope;
