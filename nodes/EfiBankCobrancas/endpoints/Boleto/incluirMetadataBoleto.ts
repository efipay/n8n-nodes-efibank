import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function incluirMetadataBoleto(
  context: IExecuteFunctions,
	index: number,
	baseURL: string,
  access_token: string,
  chargeId: string,
): Promise<IHttpRequestOptions> {
	const requestBody = context.getNodeParameter('requestBodyIncluirMetadataBoleto', index) as string;

  return {
    method: 'PUT',
    url: `${baseURL}/v1/charge/${chargeId}/metadata`,
    json: true,
     headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`,
      'partner-token': `764bb2d04524255844c24b0f46c381e87e2a7800`
    },
    body: JSON.parse(requestBody),
  };
}
