import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function reenvioEmailAssinatura(
	baseURL: string,
  access_token: string,
  chargeId: string,
  email: string
): Promise<IHttpRequestOptions> {

  return {
    method: 'POST',
    url: `${baseURL}/v1/charge/${chargeId}/subscription/resend`,
    json: true,
     headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
    body: {
      email,
    },
  };
}
