import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function incluirMetadataCarne(
	context: IExecuteFunctions,
  index: number,
	baseURL: string,
  access_token: string,
  carneId: string,
): Promise<IHttpRequestOptions> {
	const requestBody = context.getNodeParameter('metadata', index) as string;

  return {
    method: 'PUT',
    url: `${baseURL}/v1/carnet/${carneId}/metadata`,
    json: true,
    headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
    body: JSON.parse(requestBody),
  };
}
