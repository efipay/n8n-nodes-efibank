import EfiPay from 'sdk-node-apis-efi';
import { IExecuteFunctions} from 'n8n-workflow';
import getEfiCobrancasConfig from '../../../../../interfaces/credentials-cob';

export async function cancelCarnetParcel(
  context: IExecuteFunctions,
  index: number,
): Promise<any> {
  try {
	const options = await getEfiCobrancasConfig.call(context);
	const efipay = new EfiPay(options);

	const carnet_id = context.getNodeParameter('carnet_id', index) as string;
	const parcela = context.getNodeParameter('parcela', index) as string;

	const params = {
	  id: parseInt(carnet_id),
	  parcel: parseInt(parcela),
	};

	const resposta = await efipay.cancelCarnetParcel(params);

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