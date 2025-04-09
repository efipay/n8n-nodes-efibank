import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { criarLinkOneStep } from '../endpoints/LinkDePagamento/criarLinkOneStep';
import { criarTransacaoLink } from '../endpoints/LinkDePagamento/criarTransacaoLink';
import { associarFormaPagamentoLink } from '../endpoints/LinkDePagamento/associarFormaPagamentoLink';
import { retornarLink } from '../endpoints/LinkDePagamento/retornarLink';
import { incluirMetadataLink } from '../endpoints/LinkDePagamento/incluirMetadataLink';
import { alterarLink } from '../endpoints/LinkDePagamento/alterarLink';
import { cancelarTransacaoLink } from '../endpoints/LinkDePagamento/cancelarTransacaoLink';
import { acrescentarHistoricoLink } from '../endpoints/LinkDePagamento/acrescentarHistoricoLink';
import { reenviarEmailLink } from '../endpoints/LinkDePagamento/reenviarEmailLink';

export async function linkService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
	baseURL: string,
  access_token: string
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;

  switch (endpoint) {
    case 'criarLinkOneStep':
      requestOptions = await criarLinkOneStep(this, i, baseURL, access_token);
      break;

    case 'criarTransacaoLink':
      requestOptions = await criarTransacaoLink(this, i, baseURL, access_token);
      break;

    case 'associarFormaPagamentoLink':
			const linkIdAssociar = this.getNodeParameter('charge_id', i) as string;
      requestOptions = await associarFormaPagamentoLink(this, i, baseURL, access_token, linkIdAssociar);
      break;

		case 'retornarLink':
			const linkIdRetornar = this.getNodeParameter('charge_id', i) as string;
			if (!linkIdRetornar || typeof linkIdRetornar !== 'string') {
				throw new Error('Charge ID é obrigatório e deve ser uma string para retornar o carnê');
			}
			requestOptions = await retornarLink(baseURL, access_token, linkIdRetornar);
			break;

    case 'incluirMetadataLink':
      const linkIdMetadata = this.getNodeParameter('charge_id', i) as string;
      requestOptions = await incluirMetadataLink(this, i, baseURL, access_token, linkIdMetadata);
      break;

    case 'alterarLink':
      const idAlterarLink = this.getNodeParameter('charge_id', i) as string;
      requestOptions = await alterarLink(this, i, baseURL, access_token, idAlterarLink);
      break;

    case 'cancelarTransacaoLink':
      const linkIdCancelar = this.getNodeParameter('charge_id', i) as string;
      requestOptions = await cancelarTransacaoLink(baseURL, access_token, linkIdCancelar);
      break;

    case 'reenviarEmailLink':
			const linkIdReenvio = this.getNodeParameter('charge_id', i) as string;
      requestOptions = await reenviarEmailLink(this, i, baseURL, access_token, linkIdReenvio);
      break;

    case 'acrescentarHistoricoLink':
      const linkIdHistorico = this.getNodeParameter('charge_id', i) as string;
      requestOptions = await acrescentarHistoricoLink(this, i, baseURL, access_token, linkIdHistorico);
      break;

			default:
				throw new Error(`Endpoint de Boleto não implementado`);
  }

  return requestOptions;
}
