import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function retornarListaCartao(
	baseURL: string,
  access_token: string,
  begin_date: string,
  end_date: string
): Promise<IHttpRequestOptions> {
  const url = `${baseURL}/v1/charges?charge_type=card&begin_date=${begin_date}&end_date=${end_date}`;

  return {
    method: 'GET',
    url,
    json: true,
    headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
  };
}

