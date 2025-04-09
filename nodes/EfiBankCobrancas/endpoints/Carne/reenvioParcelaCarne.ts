import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function reenvioParcelaCarne(
	baseURL: string,
  access_token: string,
  carneId: string,
  parcela: string,
  email: string
): Promise<IHttpRequestOptions> {

  return {
    method: 'POST',
    url: `${baseURL}/v1/carnet/${carneId}/parcel/${parcela}/resend`,
    json: true,
    headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
    body: {
      email: email,
    },
  };
}
