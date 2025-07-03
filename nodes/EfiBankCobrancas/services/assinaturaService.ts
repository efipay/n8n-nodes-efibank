import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { cancelSubscription } from '../endpoints/charge/subscription/cancelSubscription';
import { createSubscription } from '../endpoints/charge/subscription/createSubscription';
import { createOneStepBilletSubscription } from '../endpoints/charge/subscription/createOneStepBilletSubscription';
import { createOneStepCardSubscription } from '../endpoints/charge/subscription/createOneStepCardSubscription';
import { createOneStepSubscriptionLink } from '../endpoints/charge/subscription/createOneStepSubscriptionLink';
import { createPlan } from '../endpoints/charge/subscription/createPlan';
import { createSubscriptionHistory } from '../endpoints/charge/subscription/createSubscriptionHistory';
import { defineSubscriptionPaymentMethodBillet } from '../endpoints/charge/subscription/defineSubscriptionBillet';
import { deletePlan } from '../endpoints/charge/subscription/deletePlan';
import { detailSubscription } from '../endpoints/charge/subscription/detailSubscription';
import { listSubscriptions } from '../endpoints/charge/subscription/listSubscriptions';
import { listPlans } from '../endpoints/charge/subscription/listPlans';
import { sendSubscriptionLinkEmail } from '../endpoints/charge/subscription/sendSubscriptionLinkEmail';
import { updatePlan } from '../endpoints/charge/subscription/updatePlan';
import { updateSubscription } from '../endpoints/charge/subscription/updateSubscription';
import { updateSubscriptionMetadata } from '../endpoints/charge/subscription/updateSubscriptionMetadata';
import { cardPaymentRetrySubscription } from '../endpoints/charge/subscription/cardPaymentRetrySubscription';
import { defineSubscriptionPaymentMethodCard } from '../endpoints/charge/subscription/defineSubscriptionCard';

export async function assinaturaService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;

  switch (endpoint) { 

    case 'cancelSubscription':
      requestOptions = await cancelSubscription(this, i);
    break;

    case 'createSubscription':
      requestOptions = await createSubscription(this, i);
    break;

    case 'createOneStepBilletSubscription':
      requestOptions = await createOneStepBilletSubscription(this, i);
    break;

    case 'createOneStepCardSubscription':
      requestOptions = await createOneStepCardSubscription(this, i);
    break;

    case 'createOneStepSubscriptionLink':
      requestOptions = await createOneStepSubscriptionLink(this, i);
    break;

    case 'createPlan':
      requestOptions = await createPlan(this, i);
    break;

    case 'createSubscriptionHistory':
      requestOptions = await createSubscriptionHistory(this, i);
    break;

    case 'defineSubscriptionPaymentMethodBillet':
      requestOptions = await defineSubscriptionPaymentMethodBillet(this, i);
    break;

    case 'defineSubscriptionPaymentMethodCard':
      requestOptions = await defineSubscriptionPaymentMethodCard(this, i);
    break;

    case 'deletePlan':
      requestOptions = await deletePlan(this, i);
    break;

    case 'detailSubscription':
      requestOptions = await detailSubscription(this, i);
    break;

    case 'cardPaymentRetrySubscription':
      requestOptions = await  cardPaymentRetrySubscription(this, i);
    break;

    case 'listSubscriptions':
      requestOptions = await listSubscriptions(this, i);
    break;

    case 'listPlans':
      requestOptions = await listPlans(this, i);
    break;

    case 'sendSubscriptionLinkEmail':
      requestOptions = await sendSubscriptionLinkEmail(this, i);
    break;

    case 'updatePlan':
      requestOptions = await updatePlan(this, i);
    break;

    case 'updateSubscription':
      requestOptions = await updateSubscription(this, i);
    break;

    case 'updateSubscriptionMetadata':
      requestOptions = await updateSubscriptionMetadata(this, i);
    break;

    default:
       throw new Error(`Endpoint de Assinatura não implementado`);
  }

  return requestOptions;
}