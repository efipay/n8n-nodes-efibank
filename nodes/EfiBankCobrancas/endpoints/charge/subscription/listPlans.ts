import EfiPay from 'sdk-node-apis-efi';
import { IExecuteFunctions } from 'n8n-workflow';
import getEfiCobrancasConfig from '../../../../../interfaces/credentials-cob';

export async function listPlans(
  context: IExecuteFunctions,
  index: number
): Promise<any> {
  try {
    const options = await getEfiCobrancasConfig.call(context);
    const efipay = new EfiPay(options);

    const name = context.getNodeParameter('plan_name', index, '') as string;
    const limit = context.getNodeParameter('limit', index, 20) as number;
    const offset = context.getNodeParameter('offset', index, 0) as number;

    const params: any = {};
    
    if (name) params.name = name;
    if (limit) params.limit = limit;
    if (offset) params.offset = offset;

    const resposta = await efipay.listPlans(params);

    return resposta;
  } catch (error: any) {
    if (error?.error) {
      if (typeof error.error_description === 'object') {
        throw new Error(JSON.stringify({
          nome: error.error,
          propriedade: error.error_description.property,
          mensagem: error.error_description.message
        }));
      }

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