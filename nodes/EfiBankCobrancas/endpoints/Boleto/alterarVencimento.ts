import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function alterarVencimento(
	baseURL: string,
  access_token: string,
  chargeId: string,
  expire_at: string
): Promise<IHttpRequestOptions> {

  return {
    method: 'PUT',
    url: `${baseURL}/v1/charge/${chargeId}/billet`,
    json: true,
     headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
    body: {
      expire_at: expire_at,
    }
  };
}
