import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { getNotification } from '../endpoints/charge/notification/getNotification';

export async function notificacaoService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;

  switch (endpoint) {
    case 'getNotification':
      requestOptions = await getNotification(this, i);
      break;

    default:
      throw new Error(`Endpoint de Cartão não implementado`);
  }


  return requestOptions;
}
