import { IExecuteFunctions } from 'n8n-workflow';
import { boletoService } from './services/boletoService';
import { cartaoService } from './services/cartaoService';
import { carneService } from './services/carneService';
import { assinaturaService } from './services/assinaturaService';
import { linkService } from './services/linkService';
import { splitService } from './services/splitService';
import { notificacaoService } from './services/notificacaoService';

export async function execute(
  this: IExecuteFunctions,
  endpoint: string,
  i: number
) {
  const returnData: any[] = [];
  const transactionType = this.getNodeParameter('transactionType', i) as string;
  
  try {
    let response;
    
    switch (transactionType) {
      case 'boleto':
        response = await boletoService.call(this, endpoint, i);
        break;
      case 'cartao':
        response = await cartaoService.call(this, endpoint, i);
        break;
      case 'carne':
        response = await carneService.call(this, endpoint, i);
        break;
      case 'assinatura':
        response = await assinaturaService.call(this, endpoint, i);
        break;
      case 'link':
        response = await linkService.call(this, endpoint, i);
        break;
      case 'split':
        response = await splitService.call(this, endpoint, i);
        break;
      case 'notificacao':
        response = await notificacaoService.call(this, endpoint, i);
        break;
      default:
        throw new Error(`Erro: '${transactionType}' não é um tipo de transação válida.`);
    }
    
    returnData.push({ json: response });
    
  } catch (error: any) {
    this.logger.error('Erro ao executar a requisição:', error);
    
    if (error.isAxiosError) {
      if (error.response) {
        const responseData = error.response.data;
        let errorMessage = 'Erro na API';
        let errorDetails = {};
        
        if (typeof responseData === 'object') {
          errorMessage = responseData.message || 
                         responseData.error_description || 
                         responseData.error || 
                         `Error ${error.response.status}: ${error.response.statusText}`;
          errorDetails = responseData;
        } else if (typeof responseData === 'string') {
          errorMessage = responseData;
          try {
            errorDetails = JSON.parse(responseData);
          } catch (e) {
            errorDetails = { rawResponse: responseData };
          }
        }
        
        this.logger.error('Erro detalhado da API:', { 
          statusCode: error.response.status,
          message: errorMessage, 
          details: JSON.stringify(errorDetails, null, 2) 
        });
        
        returnData.push({
          json: {
            success: false,
            status: error.response.status,
            statusText: error.response.statusText,
            message: errorMessage,
            details: errorDetails
          },
        });
      } else {
        this.logger.error('Erro na requisição:', error.message);
        returnData.push({ json: { error: error.message } });
      }
    } else {
      this.logger.error('Erro desconhecido:', error.message);
      returnData.push({ json: { error: error.message } });
    }
    
    if (this.continueOnFail()) {
      return returnData;
    } else {
      throw error;
    }
  }
  
  return returnData;
}