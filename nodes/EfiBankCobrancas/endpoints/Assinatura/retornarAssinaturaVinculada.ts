import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function retornarAssinaturaVinculada(
	baseURL: string,
  access_token: string,
  subscriptionId: string
): Promise<IHttpRequestOptions> {

  return {
    method: 'GET',
    url: `${baseURL}/v1/subscription/${subscriptionId}`,
    json: true,
     headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
  };
}
