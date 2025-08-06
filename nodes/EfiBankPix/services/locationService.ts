import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { pixCreateLocation } from '../endpoints/location/loc/pixCreateLocation'; 
import { pixLocationList } from '../endpoints/location/loc/pixLocationList';
import { pixDetailLocation } from '../endpoints/location/loc/pixDetailLocation';
import { pixGenerateQRCode } from '../endpoints/location/loc/pixGenerateQRCode';
import { pixUnlinkTxidLocation } from '../endpoints/location/loc/pixUnlinkTxidLocation';
import { pixCreateLocationRecurrenceAutomatic } from '../endpoints/location/locRec/pixCreateLocationRecurrenceAutomatic';
import { pixListLocationRecurrenceAutomatic } from '../endpoints/location/locRec/pixListLocationRecurrenceAutomatic';
import { pixDetailLocationRecurrenceAutomatic } from '../endpoints/location/locRec/pixDetailLocationRecurrenceAutomatic';
import { pixUnlinkLocationRecurrenceAutomatic } from '../endpoints/location/locRec/pixUnlinkLocationRecurrenceAutomatic';

export async function locationService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;
  switch (endpoint) {
    case 'pixCreateLocation':
      requestOptions = await pixCreateLocation(this, i);
      break;
    case 'pixLocationList':
      requestOptions = await pixLocationList(this, i);
      break;
    case 'pixDetailLocation':
      requestOptions = await pixDetailLocation(this, i);
      break;
    case 'pixGenerateQRCode':
      requestOptions = await pixGenerateQRCode(this, i);
      break;
    case 'pixUnlinkTxidLocation':
      requestOptions = await pixUnlinkTxidLocation(this, i);
      break;
    case 'pixCreateLocationRecurrenceAutomatic':
      requestOptions = await pixCreateLocationRecurrenceAutomatic(this, i);
    break;
    case 'pixListLocationRecurrenceAutomatic':
      requestOptions = await pixListLocationRecurrenceAutomatic(this, i);
      break;
    case 'pixDetailLocationRecurrenceAutomatic':
      requestOptions = await pixDetailLocationRecurrenceAutomatic(this, i);
      break;
    case 'pixUnlinkLocationRecurrenceAutomatic':
      requestOptions = await pixUnlinkLocationRecurrenceAutomatic(this, i);
      break;

    default:
        throw new Error(`Endpoint de location não implementado: ${endpoint}`);
  }

  return requestOptions;
}
