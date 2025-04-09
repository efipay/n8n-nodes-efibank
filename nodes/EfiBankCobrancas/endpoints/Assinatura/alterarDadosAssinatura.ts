import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function alterarDadosAssinatura(
  context: IExecuteFunctions,
  index: number,
	baseURL: string,
  access_token: string,
  subscriptionId: string
): Promise<IHttpRequestOptions> {
  const requestBody = context.getNodeParameter('requestBodyAlterarDadosAssinatura', index) as string;

  return {
    method: 'PUT',
    url: `${baseURL}/v1/subscription/${subscriptionId}`,
    json: true,
     headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
    body: JSON.parse(requestBody),
  };
}
