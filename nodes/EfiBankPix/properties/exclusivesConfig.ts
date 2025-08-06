/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
import { INodeProperties } from 'n8n-workflow';

export const exclusivesConfig: INodeProperties[] = [
  //Criar/modificar configurações da conta
    {
        displayName: 'Body da Requisição',
        name: 'bodyRequestUpdateAccountConfig',
        type: 'json',
        default: `{
  "pix": {
      "receberSemChave": true,
      "chaves": {
          "355e4568-e89b-1243-a456-006655440001": {
              "recebimento": {
                  "txidObrigatorio": false,
                  "recusarTipoPessoa": "PF",
                  "qrCodeEstatico": {
                      "recusarTodos": false
                  },
                  "documentoPagadorIgualDevedor": true,
                  "webhook": {
                      "notificacao": {
                          "tarifa": true,
                          "pagador": true
                      },
                      "notificar": {
                          "pixSemTxid": true
                      }
                  }
              },
              "envio": {
                  "webhook": {
                      "notificacao": {
                          "tarifa": true,
                          "favorecido": true
                      }
                  }
              }
          }
      }
  }
}`,
        description: 'Insira o body da requisição para Criar/modificar configurações da conta',
        displayOptions: {
          show: {
            endpoints: ['updateAccountConfig'],
          },
        },
      },

      // Deletar chave pix
      {
        displayName: 'chave',
        name: 'chavePix',
        type: 'string',
        default: '',
        required: true,
        description: 'Chave Pix vinculada a conta',
        displayOptions: {
          show: {
            endpoints: ['pixDeleteEvp'],
          },
        },
      },
      {
        displayName: 'id',
        name: 'id',
        type: 'string',
        default: '',
        required: true,
        description: 'Identificador para buscar relatório solicitado',
        displayOptions: {
          show: {
            endpoints: ['detailReport'],
          },
        },
      },

      //Listar infrações
      {
        displayName: '* inicio',
        name: 'begin',
        type: 'string',
        default: '2025-01-01T00:00:00Z',
        required: true,
        description: 'Data início para o filtro da consulta',
        displayOptions: {
          show: {
            endpoints: ['medList'],
          },
        },
      },
      {
        displayName: '* fim',
        name: 'end',
        type: 'string',
        default: '2025-12-31T23:59:59Z',
        required: true,
        description: 'Data fim para o filtro da consulta',
        displayOptions: {
          show: {
            endpoints: ['medList'],
          },
        },
      },

      {
        displayName: 'paginacao.paginaAtual',
        name: 'paginaAtual',
        type: 'number',
        default: null,
        required: false,
        description: 'Página a ser retornada pela consulta',
        displayOptions: {
          show: {
            endpoints: ['medList'],
          },
        },
      },

      {
        displayName: 'paginacao.itensPorPagina',
        name: 'itensPorPagina',
        type: 'number',
        default: null,
        required: false,
        description: 'Quantidade máxima de registros retornados em cada página',
        displayOptions: {
          show: {
            endpoints: ['medList'],
          },
        },
      },

  //Obter comprovante
   {
        displayName: 'e2eid',
        name: 'e2eid',
        type: 'string',
        default: '',
        required: false,
        description: 'Insira o e2eid da cobrança',
        displayOptions: {
            show: {
                endpoints: [
                    'pixGetReceipt'
                ],
            },
        },
    },

     {
        displayName: 'idEnvio',
        name: 'idEnvio',
        type: 'string',
        default: '',
        required: false,
        description: 'Insira o idEnvio da cobrança',
        displayOptions: {
            show: {
                endpoints: [
                    'pixGetReceipt'
                ],
            },
        },
    },

     {
        displayName: 'rtrId',
        name: 'rtrId',
        type: 'string',
        default: '',
        required: false,
        description: 'Insira o rtrId da cobrança',
        displayOptions: {
            show: {
                endpoints: [
                    'pixGetReceipt'
                ],
            },
        },
    },

     {
        displayName: 'txid',
        name: 'txid',
        type: 'string',
        default: '',
        required: false,
        description: 'Insira o txid da cobrança',
        displayOptions: {
            show: {
                endpoints: [
                    'pixGetReceipt'
                ],
            },
        },
    },


//requisitar extrato conciliação      
      {
        displayName: 'Body da Requisição',
        name: 'bodyRequestReport',
        type: 'json',
        default: `{
  "dataMovimento": "2023-12-15",
  "tipoRegistros": {
    "pixRecebido": true,
    "pixEnviadoChave": true,
    "pixEnviadoDadosBancarios": true,
    "estornoPixEnviado": true,
    "pixDevolucaoEnviada": true,
    "pixDevolucaoRecebida": true,
    "tarifaPixEnviado": true,
    "tarifaPixRecebido": true,
    "estornoTarifaPixEnviado": true,
    "saldoDiaAnterior": true,
    "saldoDia": true,
    "transferenciaEnviada": true,
    "transferenciaRecebida": true,
    "estornoTransferenciaEnviada": true,
    "tarifaTransferenciaEnviada": true,
    "estornoTarifaTransferenciaEnviada": true,
    "estornoTarifaPixRecebido": true
  }
}`,
        description: 'Insira o body da requisição para requisitar Extrato Conciliação',
        displayOptions: {
          show: {
            endpoints: ['createReport'],
          },
        },
      },
];

