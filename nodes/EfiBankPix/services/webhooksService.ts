import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { pixConfigWebhook } from '../endpoints/webhooks/cob-cobv/pixConfigWebhook';
import { pixDeleteWebhook } from '../endpoints/webhooks/cob-cobv/pixDeleteWebhook';
import { pixDetailWebhook } from '../endpoints/webhooks/cob-cobv/pixDetailWebhook';
import { pixListWebhook } from '../endpoints/webhooks/cob-cobv/pixListWebhook';
import { pixConfigWebhookRecurrenceAutomatic } from '../endpoints/webhooks/automatic/pixConfigWebhookRecurrenceAutomatic';
import { pixListWebhookRecurrenceAutomatic } from '../endpoints/webhooks/automatic/pixListWebhookRecurrenceAutomatic';
import { pixDeleteWebhookRecurrenceAutomatic } from '../endpoints/webhooks/automatic/pixDeleteWebhookRecurrenceAutomatic';
import { pixConfigWebhookAutomaticCharge } from '../endpoints/webhooks/automatic/pixConfigWebhookAutomaticCharge';
import { pixListWebhookAutomaticCharge } from '../endpoints/webhooks/automatic/pixListWebhookAutomaticCharge';
import { pixDeleteWebhookAutomaticCharge } from '../endpoints/webhooks/automatic/pixDeleteWebhookAutomaticCharge';
import { pixResendWebhook } from '../endpoints/webhooks/cob-cobv/pixResendWebhook';

export async function webhooksService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;
  switch (endpoint) {
    case 'pixConfigWebhook':
      requestOptions = await pixConfigWebhook(this, i);
    break;

    case 'pixDeleteWebhook':
        requestOptions = await pixDeleteWebhook(this, i);
    break;
      
    case 'pixDetailWebhook':
      requestOptions = await pixDetailWebhook(this, i);
    break;
        
    case 'pixListWebhook':
      requestOptions = await pixListWebhook(this, i);
    break;
        
    case 'pixResendWebhook':
      requestOptions = await pixResendWebhook(this, i);
    break;

    case 'pixConfigWebhookRecurrenceAutomatic':
      requestOptions = await pixConfigWebhookRecurrenceAutomatic(this, i);
    break;

    case 'pixListWebhookRecurrenceAutomatic':
        requestOptions = await pixListWebhookRecurrenceAutomatic(this, i);
    break;
      
    case 'pixDeleteWebhookRecurrenceAutomatic':
      requestOptions = await pixDeleteWebhookRecurrenceAutomatic(this, i);
    break;
        
    case 'pixConfigWebhookAutomaticCharge':
      requestOptions = await pixConfigWebhookAutomaticCharge(this, i);
    break;
        
    case 'pixListWebhookAutomaticCharge':
      requestOptions = await pixListWebhookAutomaticCharge(this, i);
    break;

    case 'pixDeleteWebhookAutomaticCharge':
      requestOptions = await pixDeleteWebhookAutomaticCharge(this, i);
    break;

    default:
      throw new Error(`Endpoint de webhook não implementado: ${endpoint}`);
  }

  return requestOptions;
}
