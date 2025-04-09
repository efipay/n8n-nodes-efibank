import { IHttpRequestOptions} from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function consultarNotificacao(
	baseURL: string,
  access_token: string,
  token: string,
): Promise<IHttpRequestOptions> {

  return {
    method: 'GET',
    url: `${baseURL}/v1/notification/${token}`,
    json: true,
     headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
  };
}
