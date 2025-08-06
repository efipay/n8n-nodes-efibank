import EfiPay from 'sdk-node-apis-efi';
import { IExecuteFunctions } from 'n8n-workflow';
import getEfiBankConfig from '../../../../../interfaces/credentials-cob';

export async function listSubscriptions(
  context: IExecuteFunctions,
  index: number
): Promise<any> {
  try {
    const options = await getEfiBankConfig.call(context);
    const efipay = new EfiPay(options);

    const begin_date = context.getNodeParameter('begin_date', index) as string;
    const end_date = context.getNodeParameter('end_date', index) as string;

    const params: any = {
      begin_date, 
      end_date,
      charge_type: 'subscription' as const,
    };

    const date_of = context.getNodeParameter('date_of', index) as string;
    const status = context.getNodeParameter('status', index) as string;
    const customer_document = context.getNodeParameter('customer_document', index) as string;
    const custom_id = context.getNodeParameter('custom_id', index) as string;
    const value = context.getNodeParameter('value', index) as number;
    const limit = context.getNodeParameter('limit', index) as number;
    const page = context.getNodeParameter('page', index) as number;
    const offset = context.getNodeParameter('offset', index) as number;

    if (date_of?.trim()) params.date_of = date_of;
    if (status?.trim()) params.status = status;
    if (customer_document?.trim()) params.customer_document = customer_document;
    if (custom_id?.trim()) params.custom_id = custom_id;
    if (typeof value === 'number' && !isNaN(value)) params.value = value;
    if (typeof limit === 'number' && !isNaN(limit)) params.limit = limit;
    if (typeof page === 'number' && !isNaN(page)) params.page = page;
    if (typeof offset === 'number' && !isNaN(offset)) params.offset = offset;


    const resposta = await efipay.listCharges(params);

    return resposta;
  } catch (error: any) {
    if (error?.error) {
      // Trata quando error_description é objeto
      if (typeof error.error_description === 'object') {
        throw new Error(JSON.stringify({
          nome: error.error,
          propriedade: error.error_description.property,
          mensagem: error.error_description.message
        }));
      }

      // Trata quando error_description é string
      if (typeof error.error_description === 'string') {
        throw new Error(JSON.stringify({
          nome: error.error,
          mensagem: error.error_description
        }));
      }
    }

    throw new Error(JSON.stringify({
      nome: error.nome || error.code || 'erro_desconhecido',
      mensagem: error.message || error.mensagem || error.detail || 'Ocorreu um erro desconhecido'
    }));
  }
}