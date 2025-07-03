import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { createOneStepCard } from '../endpoints/charge/card/createOneStepCard';
import { createCardCharge } from '../endpoints/charge/card/createCardCharge';
import { defineCardPayMethod } from '../endpoints/charge/card/defineCardPayMethod';
import { refundCard } from '../endpoints/charge/card/refundCard';
import { cardPaymentRetry } from '../endpoints/charge/card/cardPaymentRetry';
import { detailCard } from '../endpoints/charge/card/detailCard';
import { listCards } from '../endpoints/charge/card/listCards';
import { updateCardMetadata } from '../endpoints/charge/card/updateCardMetadata';
import { cancelCard } from '../endpoints/charge/card/cancelCard';
import { createCardHistory } from '../endpoints/charge/card/createCardHistory';
import { getInstallments } from '../endpoints/charge/card/getInstallments';

export async function cartaoService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;

  switch (endpoint) {
    case 'cancelCard':
      requestOptions = await cancelCard(this, i);
    break;

    case 'createCardHistory':
      requestOptions = await createCardHistory(this, i);
    break;

    case 'createCardCharge':
      requestOptions = await createCardCharge(this, i);
    break;

    case 'createOneStepCard':
      requestOptions = await createOneStepCard(this, i);
    break;

    case 'defineCardPayMethod':
      requestOptions = await defineCardPayMethod(this, i);
    break;

    case 'refundCard':
      requestOptions = await refundCard(this, i);
    break;

    case 'detailCard':
      requestOptions = await detailCard(this, i);
    break;

    case 'cardPaymentRetry':
      requestOptions = await cardPaymentRetry(this, i);
    break;

    case 'listCards':
      requestOptions = await listCards(this, i);
    break;

    case 'getInstallments':
      requestOptions = await getInstallments(this, i);
    break;

    case 'updateCardMetadata':
      requestOptions = await updateCardMetadata(this, i);
    break;

      default:
        throw new Error(`Endpoint de Cartão não implementado`);
  }

  return requestOptions;
}
