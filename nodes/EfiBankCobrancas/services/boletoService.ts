import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { cancelBillet } from '../endpoints/charge/billet/cancelBillet';
import { createOneStepCharge } from '../endpoints/charge/billet/createOneStepBillet';
import { createBilletHistory } from '../endpoints/charge/billet/createBilletHistory';
import { createCharge } from '../endpoints/charge/billet/createCharge';
import { defineBalanceSheetBillet } from '../endpoints/charge/billet/defineBalanceSheetBillet';
import { defineBilletPayMethod } from '../endpoints/charge/billet/defineBilletPayMethod';
import { detailBillet } from '../endpoints/charge/billet/detailBillet';
import { sendBilletEmail } from '../endpoints/charge/billet/sendBilletEmail';
import { settleBillet } from '../endpoints/charge/billet/settleBillet';
import { updateBillet } from '../endpoints/charge/billet/updateBillet';
import { updateBilletMetadata } from '../endpoints/charge/billet/updateBilletMetadata';
import { listBillets } from '../endpoints/charge/billet/detailBilletList';


export async function boletoService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;

  switch (endpoint) {

    case 'cancelBillet':
      requestOptions = await cancelBillet(this, i);
    break;

    case 'createBilletHistory':
      requestOptions = await createBilletHistory(this, i);
    break;

    case 'createCharge':
      requestOptions = await createCharge(this, i);
    break;

    case 'createOneStepCharge':
      requestOptions = await createOneStepCharge(this, i);
    break;

    case 'defineBalanceSheetBillet':
      requestOptions = await defineBalanceSheetBillet(this, i);
    break;

    case 'defineBilletPayMethod':
      requestOptions = await defineBilletPayMethod(this, i);
    break;

    case 'detailBillet':
      requestOptions = await detailBillet(this, i);
    break;

    case 'listBillets':
      requestOptions = await listBillets(this, i);
    break;

    case 'sendBilletEmail':
      requestOptions = await sendBilletEmail(this, i);
    break;

    case 'settleBillet':
      requestOptions = await settleBillet(this, i);
    break;

    case 'updateBillet':
      requestOptions = await updateBillet(this, i);
    break;

    case 'updateBilletMetadata':
      requestOptions = await updateBilletMetadata(this, i);
    break;

			default:
				throw new Error(`Endpoint de Boleto não implementado`);
  }

  return requestOptions;
}
