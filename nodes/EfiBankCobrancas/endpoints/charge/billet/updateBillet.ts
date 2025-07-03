import EfiPay from 'sdk-node-apis-efi';
import getEfiCobrancasConfig from '../../../../../interfaces/credentials-cob';
import { IExecuteFunctions } from 'n8n-workflow';

export async function updateBillet(
  context: IExecuteFunctions,
  index: number,
): Promise<any> {
  try {
    const options = await getEfiCobrancasConfig.call(context);
    const efipay = new EfiPay(options);

    const charge_id = context.getNodeParameter('charge_id', index) as string;
    const requestBody = context.getNodeParameter('requestBodyAlterarVencimento', index) as string;

    const params = {
      id: parseInt(charge_id)
    };

    const body = {
      expire_at: requestBody,
    };


    const resposta = await efipay.updateBillet(params, body);
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