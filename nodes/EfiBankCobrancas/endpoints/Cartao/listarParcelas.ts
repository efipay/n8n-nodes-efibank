import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function listarParcelas(
	baseURL: string,
  access_token: string,
	identificador: string,
  total: number,
  bandeira: string
): Promise<IHttpRequestOptions> {
  const url = `${baseURL}/v1/installments?total=${total}&brand=${bandeira}`;

  return {
    method: 'GET',
    url,
    json: true,
    headers: { Authorization: `Bearer ${access_token}`,
    'api-sdk': `efi-n8n-${version}`,
		'Account-Code': identificador,}
  };
}


