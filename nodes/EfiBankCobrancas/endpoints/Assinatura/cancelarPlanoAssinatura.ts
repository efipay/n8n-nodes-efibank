import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function cancelarPlanoAssinatura(
	baseURL: string,
  access_token: string,
  planId: string
): Promise<IHttpRequestOptions> {

  return {
    method: 'DELETE',
    url: `${baseURL}/v1/plan/${planId}`,
    json: true,
     headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
  };
}
