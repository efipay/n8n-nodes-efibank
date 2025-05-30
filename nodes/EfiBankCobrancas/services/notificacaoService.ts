import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { consultarNotificacao } from '../endpoints/Notificacoes/consultarNotificacao';

export async function notificacaoService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
	baseURL: string,
  access_token: string
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;

  switch (endpoint) {
    case 'consultarNotificacao':
					 const token = this.getNodeParameter('token', i) as string;
					 if (!token || typeof token !== 'string') {
						 throw new Error('O parâmetro "token" deve ser uma string');
					 }
					 requestOptions = await consultarNotificacao(baseURL, access_token, token);
					 break;

			default:
				throw new Error(`Endpoint de notificação não implementado`);
  }

  return requestOptions;
}
