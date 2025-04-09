import { IHttpRequestOptions} from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function retornarCobrancaBoleto(
	baseURL: string,
  access_token: string,
  chargeId: string,
): Promise<IHttpRequestOptions> {

  return {
    method: 'GET',
    url: `${baseURL}/v1/charge/${chargeId}`,
    json: true,
     headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
  };
}
