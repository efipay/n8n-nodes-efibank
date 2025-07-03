import { IExecuteFunctions, IHttpRequestOptions } from "n8n-workflow";
import { cancelCarnet } from "../endpoints/charge/carnet/cancelCarnet";
import { cancelCarnetParcel } from "../endpoints/charge/carnet/cancelCarnetParcel";
import { createCarnet } from "../endpoints/charge/carnet/createCarnet";
import { createCarnetHistory } from "../endpoints/charge/carnet/createCarnetHistory";
import { detailCarnet } from "../endpoints/charge/carnet/detailCarnet";
import { listCarnets } from "../endpoints/charge/carnet/detailCarnetList";
import { sendCarnetEmail } from "../endpoints/charge/carnet/sendCarnetEmail";
import { sendCarnetParcelEmail } from "../endpoints/charge/carnet/sendCarnetParcelEmail";
import { settleCarnet } from "../endpoints/charge/carnet/settleCarnet";
import { settleCarnetParcel } from "../endpoints/charge/carnet/settleCarnetParcel";
import { updateCarnetMetadata } from "../endpoints/charge/carnet/updateCarnetMetadata";
import { updateCarnetParcel } from "../endpoints/charge/carnet/updateCarnetParcel";
import { updateCarnetParcels } from "../endpoints/charge/carnet/updateCarnetParcels";

export async function carneService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;

  switch (endpoint) {
    case 'cancelCarnet':
      requestOptions = await cancelCarnet(this, i);
      break;

    case 'cancelCarnetParcel':
      requestOptions = await cancelCarnetParcel(this, i);
      break;

    case 'createCarnet':
      requestOptions = await createCarnet(this, i);
      break;

    case 'createCarnetHistory':
      requestOptions = await createCarnetHistory(this, i);
      break;

    case 'detailCarnet':
      requestOptions = await detailCarnet(this, i);
      break;

    case 'listCarnets':
      requestOptions = await listCarnets(this, i);
      break;

    case 'sendCarnetEmail':
      requestOptions = await sendCarnetEmail(this, i);
      break;

    case 'sendCarnetParcelEmail':
      requestOptions = await sendCarnetParcelEmail(this, i);
      break;

    case 'settleCarnet':
      requestOptions = await settleCarnet(this, i);
      break;

    case 'settleCarnetParcel':
      requestOptions = await settleCarnetParcel(this, i);
      break;

    case 'updateCarnetMetadata':
      requestOptions = await updateCarnetMetadata(this, i);
      break;

    case 'updateCarnetParcel':
      requestOptions = await updateCarnetParcel(this, i);
      break;

    case 'updateCarnetParcels':
      requestOptions = await updateCarnetParcels(this, i);
      break;

    default:
      throw new Error(`Endpoint de Carnê não implementado`);
  }

  return requestOptions;
}
