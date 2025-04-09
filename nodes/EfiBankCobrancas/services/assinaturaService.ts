import { IExecuteFunctions, IHttpRequestOptions } from "n8n-workflow";
import { alterarDadosAssinatura } from "../endpoints/Assinatura/alterarDadosAssinatura";
import { associarPlanoLink } from "../endpoints/Assinatura/associarPlanoLink";
import { cancelarAssinatura } from "../endpoints/Assinatura/cancelarAssinatura";
import { criarInscricoesOneStep } from "../endpoints/Assinatura/criarInscricoesOneStep";
import { criarInscricoesTwoSteps } from "../endpoints/Assinatura/criarInscricoesTwoSteps";
import { definirFormaPagamento } from "../endpoints/Assinatura/definirFormaPagamento";
import { retentativaCartao } from "../endpoints/Assinatura/retentativaCartao";
import { historicoAssinatura } from "../endpoints/Assinatura/historicoAssinatura";
import { incluirMetadataAssinatura } from "../endpoints/Assinatura/incluirMetadataAssinatura";
import { reenvioEmailAssinatura } from "../endpoints/Assinatura/reenvioEmailAssinatura";
import { retornarAssinaturaVinculada } from "../endpoints/Assinatura/retornarAssinaturaVinculada";
import { criarPlanoAssinatura } from "../endpoints/Assinatura/criarPlanoAssinatura";
import { retornarInformacoesPlano } from "../endpoints/Assinatura/retornarInformacoesPlano";
import { editarNomePlano } from "../endpoints/Assinatura/editarNomePlano";
import { cancelarPlanoAssinatura } from "../endpoints/Assinatura/cancelarPlanoAssinatura";
import { retornarListaCobrancas } from "../endpoints/Assinatura/retornarListaCobrancas";

export async function assinaturaService(
    this: IExecuteFunctions,
    endpoint: string,
    i: number,
		baseURL: string,
    access_token: string
): Promise<IHttpRequestOptions> {
    let requestOptions: IHttpRequestOptions;

    try {
        switch (endpoint) {
            case 'criarPlanoAssinatura':
                requestOptions = await criarPlanoAssinatura(this, i, baseURL, access_token);
                break;

            case 'retornarInformacoesPlano':
                requestOptions = await retornarInformacoesPlano(baseURL, access_token);
                break;

            case 'editarNomePlano':
                const permitirEdicaoId = this.getNodeParameter('planId', i) as string;
                const nome_plano = this.getNodeParameter('nome_plano', i) as string;
                requestOptions = await editarNomePlano(baseURL, access_token, permitirEdicaoId, nome_plano);
                break;

            case 'cancelarPlanoAssinatura':
                const cancelarPlanoId = this.getNodeParameter('planId', i) as string;
                requestOptions = await cancelarPlanoAssinatura(baseURL, access_token, cancelarPlanoId);
                break;

            case 'criarInscricoesOneStep':
                const criarInscricoesOneStepId = this.getNodeParameter('planId', i) as string;
                requestOptions = await criarInscricoesOneStep(this, i, baseURL, access_token, criarInscricoesOneStepId);
                break;

            case 'criarInscricoesTwoSteps':
                const criarInscricoesTwoStepsId = this.getNodeParameter('planId', i) as string;
                requestOptions = await criarInscricoesTwoSteps(this, i, baseURL, access_token, criarInscricoesTwoStepsId);
                break;

            case 'definirFormaPagamento':
                const definirFormaPagamentoId = this.getNodeParameter('subscriptionId', i) as string;
                requestOptions = await definirFormaPagamento(this, i, baseURL, access_token, definirFormaPagamentoId);
                break;

            case 'retentativaCartao':
                const retentativaId = this.getNodeParameter('chargeId', i) as string;
                requestOptions = await retentativaCartao(baseURL, access_token, retentativaId);
                break;

            case 'retornarAssinaturaVinculada':
                const retornarAssinaturaVinculadaId = this.getNodeParameter('subscriptionId', i) as string;
                requestOptions = await retornarAssinaturaVinculada(baseURL, access_token, retornarAssinaturaVinculadaId);
                break;

            case 'retornarListaCobrancas':
                const begin_date = this.getNodeParameter('begin_date', i) as string;
                const end_date = this.getNodeParameter('end_date', i) as string;
                requestOptions = await retornarListaCobrancas(baseURL, access_token, begin_date, end_date);
                break;

            case 'associarPlanoLink':
                const associarLinkId = this.getNodeParameter('planId', i) as string;
                requestOptions = await associarPlanoLink(this, i, baseURL, access_token, associarLinkId);
                break;

            case 'incluirMetadataAssinatura':
                const incluirMetadataAssinaturaId = this.getNodeParameter('subscriptionId', i) as string;
                requestOptions = await incluirMetadataAssinatura(this, i, baseURL, access_token, incluirMetadataAssinaturaId);
                break;

            case 'alterarDadosAssinatura':
                const alterarDadosAssinaturaId = this.getNodeParameter('subscriptionId', i) as string;
                requestOptions = await alterarDadosAssinatura(this, i, baseURL, access_token, alterarDadosAssinaturaId);
                break;

            case 'cancelarAssinatura':
                const cancelarAssinaturaId = this.getNodeParameter('subscriptionId', i) as string;
                requestOptions = await cancelarAssinatura(baseURL, access_token, cancelarAssinaturaId);
                break;

            case 'historicoAssinatura':
                const historicoAssinaturaId = this.getNodeParameter('subscriptionId', i) as string;
                requestOptions = await historicoAssinatura(this, i, baseURL, access_token, historicoAssinaturaId);
                break;

            case 'reenvioEmailAssinatura':
                const emailClienteReenvio = this.getNodeParameter('chargeId', i) as string;
                const email = this.getNodeParameter('email', i) as string;
                requestOptions = await reenvioEmailAssinatura(baseURL, access_token, emailClienteReenvio, email);
                break;

            default:
                throw new Error('Endpoint de Assinatura não implementado');
        }
    } catch (error) {
        if (error.response && error.response.data) {
            const errorMessage = `Erro: ${error.response.data.error_description || error.response.data.error || 'Erro desconhecido'}`;
            const errorCode = `Código: ${error.response.data.code || 'Não fornecido'}`;
            throw new Error(`${errorMessage}\n${errorCode}`);
        } else {
            throw new Error(`Erro desconhecido: ${error.message}`);
        }
    }

    return requestOptions;
}
