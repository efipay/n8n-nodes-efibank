import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function alterarVencimentoParcelas(
	baseURL: string,
  access_token: string,
  carneId: string,
  parcelas: any
): Promise<IHttpRequestOptions> {

  return {
    method: 'PUT',
    url: `${baseURL}/v1/carnet/${carneId}/parcels`,
    json: true,
    headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
    body: JSON.parse(parcelas)
  };
}
