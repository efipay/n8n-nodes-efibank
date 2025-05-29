import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function editarNomePlano(
	baseURL: string,
  access_token: string,
  planId: string,
  nome_plano: string
): Promise<IHttpRequestOptions> {

  return {
    method: 'PUT',
    url: `${baseURL}/v1/plan/${planId}`,
    json: true,
     headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`,
      'partner-token': `764bb2d04524255844c24b0f46c381e87e2a7800`
    },
    body: {
      name: nome_plano,
    }
  };
}
