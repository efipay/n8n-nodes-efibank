import EfiPay from 'sdk-node-apis-efi';
import { IExecuteFunctions } from 'n8n-workflow';
import getEfiCobrancasConfig from '../../../../../interfaces/credentials-cob';

export async function sendBilletEmail(
  context: IExecuteFunctions,
  index: number 
): Promise<any> {
  try {
    const options = await getEfiCobrancasConfig.call(context);
    const efipay = new EfiPay(options);

    const charge_id = context.getNodeParameter('charge_id', index) as string;
    const email = context.getNodeParameter('email', index) as string;

    if (!charge_id || typeof charge_id !== 'string') {
      throw new Error('charge_id é obrigatório e deve ser uma string para reenviar o email do boleto');
    }

    if (!email || typeof email !== 'string') {
      throw new Error('email é obrigatório e deve ser uma string válida');
    }

    const params = {
      id: parseInt(charge_id, 10),
    };

    const body = {
      email: email,
    };

    const resposta = await efipay.sendBilletEmail(params, body);

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