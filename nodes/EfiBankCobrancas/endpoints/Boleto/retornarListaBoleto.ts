import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function retornarListaBoleto(
	baseURL: string,
  access_token: string,
  begin_date: string,
  end_date: string
): Promise<IHttpRequestOptions> {

  const url = `${baseURL}/v1/charges?charge_type=billet&begin_date=${begin_date}&end_date=${end_date}`;

  return {
    method: 'GET',
    url,
    json: true,
    headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`,
      'partner-token': `764bb2d04524255844c24b0f46c381e87e2a7800`
    },
  };
}

