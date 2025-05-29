import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function retornarInformacoesPlano(
	baseURL: string,
  access_token: string
): Promise<IHttpRequestOptions> {

  return {
    method: 'GET',
    url: `${baseURL}/v1/plans`,
    json: true,
     headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`,
      'partner-token': `764bb2d04524255844c24b0f46c381e87e2a7800`
    },
  };
}
