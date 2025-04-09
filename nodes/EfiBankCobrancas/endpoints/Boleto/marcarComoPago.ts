import { IHttpRequestOptions } from 'n8n-workflow';
import { version } from '../../../../package.json';

export async function marcarComoPago(
	baseURL: string,
	access_token: string,
	chargeId: string
): Promise<IHttpRequestOptions> {

	return {
		method: 'PUT',
		url: `${baseURL}/v1/charge/${chargeId}/settle`,
		json: true,
		headers: { 
		Authorization: `Bearer ${access_token}`,
		'api-sdk': `efi-n8n-${version}`
		},
	};
}
