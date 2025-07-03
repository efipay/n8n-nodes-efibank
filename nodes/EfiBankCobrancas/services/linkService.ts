import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { createOneStepLink } from '../endpoints/charge/payment-link/createOneStepLink';
import { createLinkCharge } from '../endpoints/charge/payment-link/createLinkCharge';
import { defineLinkPayMethod } from '../endpoints/charge/payment-link/defineLinkPayMethod';
import { detailLink } from '../endpoints/charge/payment-link/detailLink';
import { listLinksBillet } from '../endpoints/charge/payment-link/listLinksBillet';
import { listLinksCard} from '../endpoints/charge/payment-link/listLinksCard';
import { updateLinkMetadata } from '../endpoints/charge/payment-link/updateLinkMetadata';
import { updateLink } from '../endpoints/charge/payment-link/updateLink';
import { cancelLink } from '../endpoints/charge/payment-link/cancelLink';
import { createChargeLinkHistory } from '../endpoints/charge/payment-link/createChargeLinkHistory';
import { sendLinkEmail } from '../endpoints/charge/payment-link/sendLinkEmail';

export async function linkService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;
 
  switch (endpoint) {
    case 'createOneStepLink':
      requestOptions = await createOneStepLink(this, i);
      break;

    case 'createLinkCharge':
      requestOptions = await createLinkCharge(this, i);
      break;

    case 'defineLinkPayMethod':
      requestOptions = await defineLinkPayMethod(this, i);
      break;

		case 'detailLink':
			requestOptions = await detailLink(this, i);
			break;

    case 'listLinksBillet':
      requestOptions = await listLinksBillet(this, i);
      break;

    case 'listLinksCard':
      requestOptions = await listLinksCard(this, i);
      break;

    case 'updateLinkMetadata':
      requestOptions = await updateLinkMetadata(this, i);
      break;

    case 'updateLink':
      requestOptions = await updateLink(this, i);
      break;

    case 'cancelLink':
      requestOptions = await cancelLink(this, i);
      break;

    case 'sendLinkEmail':
      requestOptions = await sendLinkEmail(this, i);
      break;

    case 'createChargeLinkHistory':
      requestOptions = await createChargeLinkHistory(this, i);
      break;

			default:
				throw new Error(`Endpoint de Link de Pagamento não implementado`);
  }

  return requestOptions;
}
