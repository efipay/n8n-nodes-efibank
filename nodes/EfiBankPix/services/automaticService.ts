import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { pixCreateRecurrenceAutomatic } from '../endpoints/automatic/rec/pixCreateRecurrenceAutomatic';
import { pixDetailRecurrenceAutomatic } from '../endpoints/automatic/rec/pixDetailRecurrenceAutomatic';
import { pixListRecurrenceAutomatic } from '../endpoints/automatic/rec/pixListRecurrenceAutomatic';
import { pixUpdateRecurrenceAutomatic } from '../endpoints/automatic/rec/pixUpdateRecurrenceAutomatic';
import { pixCreateRequestRecurrenceAutomatic } from '../endpoints/automatic/solicRec/pixCreateRequestRecurrenceAutomatic';
import { pixDetailRequestRecurrenceAutomatic } from '../endpoints/automatic/solicRec/pixDetailRequestRecurrenceAutomatic';
import { pixUpdateRequestRecurrenceAutomatic } from '../endpoints/automatic/solicRec/pixUpdateRequestRecurrenceAutomatic';
import { pixCreateAutomaticChargeTxid } from '../endpoints/automatic/cobr/pixCreateAutomaticChargeTxid';
import { pixUpdateAutomaticCharge } from '../endpoints/automatic/cobr/pixUpdateAutomaticCharge';
import { pixDetailAutomaticCharge } from '../endpoints/automatic/cobr/pixDetailAutomaticCharge';
import { pixCreateAutomaticCharge } from '../endpoints/automatic/cobr/pixCreateAutomaticCharge';
import { pixListAutomaticCharge } from '../endpoints/automatic/cobr/pixListAutomaticCharge';
import { pixRetryRequestAutomatic } from '../endpoints/automatic/cobr/pixRetryRequestAutomatic';

export async function automaticService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;
  switch (endpoint) {
    case 'pixCreateRecurrenceAutomatic':
      requestOptions = await pixCreateRecurrenceAutomatic(this, i);
      break;
    case 'pixDetailRecurrenceAutomatic':
      requestOptions = await pixDetailRecurrenceAutomatic(this, i);
      break;
    case 'pixListRecurrenceAutomatic':
      requestOptions = await pixListRecurrenceAutomatic(this, i);
      break;
    case 'pixUpdateRecurrenceAutomatic':
      requestOptions = await pixUpdateRecurrenceAutomatic(this, i);
      break;
    case 'pixCreateRequestRecurrenceAutomatic':
      requestOptions = await pixCreateRequestRecurrenceAutomatic(this, i);
      break;
    case 'pixDetailRequestRecurrenceAutomatic':
      requestOptions = await pixDetailRequestRecurrenceAutomatic(this, i);
      break;
    case 'pixUpdateRequestRecurrenceAutomatic':
      requestOptions = await pixUpdateRequestRecurrenceAutomatic(this, i);
      break;
    case 'pixCreateAutomaticCharge':
      requestOptions = await pixCreateAutomaticCharge(this, i);
      break;
    case 'pixCreateAutomaticChargeTxid':
      requestOptions = await pixCreateAutomaticChargeTxid(this, i);
      break;
    case 'pixUpdateAutomaticCharge':
      requestOptions = await pixUpdateAutomaticCharge(this, i);
      break;
    case 'pixDetailAutomaticCharge':
      requestOptions = await pixDetailAutomaticCharge(this, i);
      break;
    case 'pixListAutomaticCharges':
      requestOptions = await pixListAutomaticCharge(this, i);
      break;
    case 'pixCRetryRequestAutomatic':
      requestOptions = await pixRetryRequestAutomatic(this, i);
      break;
    default:
      throw new Error(`Endpoint de Pix Automático não implementado: ${endpoint}`);
  }

  return requestOptions;
}