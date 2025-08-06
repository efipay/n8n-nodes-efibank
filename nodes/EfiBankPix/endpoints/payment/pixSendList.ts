import EfiPay from 'sdk-node-apis-efi'
import getEfiBankConfig from '../../../../interfaces/credentials';
import { IExecuteFunctions } from 'n8n-workflow';

export async function pixSendList(
  context: IExecuteFunctions,
  index: number,
): Promise<any> {
  try {
    const options = await getEfiBankConfig.call(context);
    const efipay = new EfiPay(options);
 
    const inicio = context.getNodeParameter('inicio', index) as string;
    const fim = context.getNodeParameter('fim', index) as string;

    const params: any = {
      inicio,
      fim,
    };

    const status = context.getNodeParameter('status', index) as string;
    const devolucaoPresente = context.getNodeParameter('devolucaoPresente', index) as string;
    const cpf = context.getNodeParameter('cpf', index) as string;
    const cnpj = context.getNodeParameter('cnpj', index) as string;
    const paginaAtual = context.getNodeParameter('paginaAtual', index) as number;
    const itensPorPagina = context.getNodeParameter('itensPorPagina', index) as number;

    if (status?.trim()) params.status = status;
    if (devolucaoPresente && devolucaoPresente !== 'none') params.devolucaoPresente = devolucaoPresente; 
    if (cpf?.trim()) params.cpf = cpf;
    if (cnpj?.trim()) params.cnpj = cnpj;
    if (typeof paginaAtual === 'number' && !isNaN(paginaAtual)) params['paginacao.paginaAtual'] = paginaAtual;
    if (typeof itensPorPagina === 'number' && !isNaN(itensPorPagina)) params['paginacao.itensPorPagina'] = itensPorPagina;

    const resposta = await efipay.pixSendList(params);
    return resposta;

  } catch (error: any) {

    let mensagemErro = error.message || error.mensagem || error.detail || "Ocorreu um erro desconhecido";
    
    if (typeof error === 'string') {
      mensagemErro = error;
    } 
    else if (error.error && error.error_description) {
      mensagemErro = `${error.error}: ${error.error_description}`;
    }
    else if (error.response && error.response.data) {
      if (typeof error.response.data === 'string') {
        try {
          const parsedData = JSON.parse(error.response.data);
          mensagemErro = parsedData.message || parsedData.mensagem || mensagemErro;
          error = parsedData;
        } catch {
          mensagemErro = error.response.data;
        }
      } else {
        mensagemErro = error.response.data.message || error.response.data.mensagem || mensagemErro;
        error = error.response.data;
      }
    }

    if (mensagemErro.includes("sandbox") || mensagemErro.includes("certificate")) {
      throw new Error("Verifique o atributo sandbox e certificate, e garanta que eles estejam corretamente atribuídos para o ambiente desejado.");
    }

    if (error.violacoes && Array.isArray(error.violacoes) && error.violacoes.length > 0) {
      const primeiraViolacao = error.violacoes[0];
      throw new Error(JSON.stringify({
        nome: error.nome || 'violacao',
        mensagem: mensagemErro,
        violacao: {
          razao: primeiraViolacao.razao,
          propriedade: primeiraViolacao.propriedade
        }
      }));
    }

    if (error.erros && Array.isArray(error.erros) && error.erros.length > 0) {
      throw new Error(JSON.stringify({
        nome: error.nome || 'json_invalido',
        mensagem: mensagemErro,
        errosDetalhados: error.erros
      }));
    }

    throw new Error(JSON.stringify({
      nome: error.nome || error.code || 'erro_desconhecido',
      mensagem: mensagemErro
    }));
  }
}