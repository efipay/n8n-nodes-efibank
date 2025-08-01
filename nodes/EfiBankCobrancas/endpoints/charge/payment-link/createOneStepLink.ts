import EfiPay from 'sdk-node-apis-efi';
import { IExecuteFunctions } from 'n8n-workflow';
import getEfiBankConfig from '../../../../../interfaces/credentials-cob';

export async function createOneStepLink(
  context: IExecuteFunctions,
  index: number
): Promise<any> {
  try {
    const options = await getEfiBankConfig .call(context);
    const efipay = new EfiPay(options);

    const requestBody = context.getNodeParameter('requestBodyLinkOneStep', index) as string;
    const body = JSON.parse(requestBody);

    const resposta = await efipay.createOneStepLink([], body);

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
