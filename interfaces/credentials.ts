import { IExecuteFunctions } from 'n8n-workflow';
import { EfiCredentials } from './efi-credentials';
import { EfiBankPixApi } from '../credentials/EfiBankPixApi.credentials'; // Ajuste o caminho conforme necessário

async function getEfiBankConfig(this: IExecuteFunctions): Promise<EfiCredentials> {
  const credentials = await this.getCredentials('EfiBankPixApi');

  // Determinar se estamos em ambiente de produção ou homologação
  const isProd = credentials.environment === "prod";

    const sandbox = !isProd;

  // Criar uma instância da classe EfiBankPixApi para acessar o método de conversão
  const efiApi = new EfiBankPixApi();

  // Obter o certificado em formato base64 usando o método convertPemToP12Base64
  // Precisamos fazer um cast para acessar o método privado
  const certificate_base64 = (efiApi as any).convertPemToP12Base64(credentials);

  const efiCredentials: EfiCredentials = {
    sandbox: sandbox,
    client_id: String(isProd ? credentials.clientIdProd : credentials.clientIdHomolog),
    client_secret: String(isProd ? credentials.clientSecretProd : credentials.clientSecretHomolog),
    certificate: certificate_base64,
    cert_base64: true,
  };

  return efiCredentials;
}

export default getEfiBankConfig;
