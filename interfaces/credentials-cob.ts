import { IExecuteFunctions } from 'n8n-workflow';
import { EfiCredentials } from './efi-credentials';

async function getEfiBankConfig(this: IExecuteFunctions): Promise<EfiCredentials> {
  const credentials = await this.getCredentials('EfiBankCobApi');

  const isProd = credentials.environment === "prod";

  const sandbox = !isProd;

  const efiCredentials: EfiCredentials = {
    sandbox: sandbox,
    client_id: String(isProd ? credentials.clientIdProd : credentials.clientIdHomolog),
    client_secret: String(isProd ? credentials.clientSecretProd : credentials.clientSecretHomolog),
    partner_token: "764bb2d04524255844c24b0f46c381e87e2a7800"
  };

  return efiCredentials;
}

export default getEfiBankConfig;
