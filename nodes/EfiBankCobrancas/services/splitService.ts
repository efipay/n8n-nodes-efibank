import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { createOneStepSplitBillet } from '../endpoints/charge/marketplace/createOneStepSplitBillet';
import { createOneStepSplitCard } from '../endpoints/charge/marketplace/createOneStepSplitCard';
import { createSplitCharge } from '../endpoints/charge/marketplace/createSplitCharge';
import { defineSplitBilletPayMethod } from '../endpoints/charge/marketplace/defineSplitBilletPayMethod';
import { defineSplitCardPayMethod } from '../endpoints/charge/marketplace/defineSplitCardPayMethod';

export async function splitService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;

  switch (endpoint) {
    case 'createOneStepSplitBillet':
      requestOptions = await createOneStepSplitBillet(this, i);
      break;

    case 'createOneStepSplitCard':
      requestOptions = await createOneStepSplitCard(this, i);
      break;

		case 'createSplitCharge':
			requestOptions = await createSplitCharge(this, i);
      break;

		case 'defineSplitBilletPayMethod':
			requestOptions = await defineSplitBilletPayMethod(this, i);
			break;

		case 'defineSplitCardPayMethod':
			  requestOptions = await defineSplitCardPayMethod(this, i);
			break;

			default:
				throw new Error(`Endpoint de Split de Pagamento não implementado`);
  }

  return requestOptions;
}
