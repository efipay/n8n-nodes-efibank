import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function reenviarEmailLink(
	context: IExecuteFunctions,
	index: number,
	baseURL: string,
  access_token: string,
  chargeId: string,
): Promise<IHttpRequestOptions> {
	const requestBody = context.getNodeParameter('requestBodyReenviarEmailLink', index) as string;

  return {
    method: 'POST',
    url: `${baseURL}/v1/charge/${chargeId}/billet/resend`,
    json: true,
     headers: { 
      Authorization: `Bearer ${access_token}`,
      'api-sdk': `efi-n8n-${version}`
    },
    body: {
      email: requestBody,
    },
  };
}
