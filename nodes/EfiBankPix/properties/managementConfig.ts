/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
import { INodeProperties } from 'n8n-workflow';

export const managementConfig: INodeProperties[] = [
	// txid
  {
    displayName: 'id',
    name: 'id',
    type: 'string',
    default: '',
    description: 'Insira o id da devolução',
    displayOptions: {
      show: {
        endpoints: [
          'pixDevolution',
          'pixDetailDevolution'
        ],
      },
    },
  },

  {
    displayName: 'e2eid',
    name: 'e2eId',
    type: 'string',
    default: '',
    description: 'Insira o e2eid da cobrança',
    displayOptions: {
      show: {
        endpoints: [
          'pixDetailReceived',
          'pixDevolution',
          'pixDetailDevolution'
        ],
      },
    },
  },

  {
    displayName: 'valor',
    name: 'valor',
    type: 'string',
    placeholder: '',
    default: '0.01',
    description: 'Insira o valor da devolução',
    displayOptions: {
      show: {
        endpoints: [
          'pixDevolution',
        ],
      },
    },
  },

  //Listar Pix recebidos
  {
    displayName: '* inicio',
    name: 'inicio',
    type: 'string',
    default: '2025-01-01T00:00:00Z',
    required: true,
    description: 'Data início para o filtro da consulta',
    displayOptions: {
      show: {
        endpoints: ['pixReceivedList'],
      },
    },
  },

  {
    displayName: '* fim',
    name: 'fim',
    type: 'string',
    default: '2025-12-31T23:59:59Z',
    required: true,
    description: 'Data fim para o filtro da consulta',
    displayOptions: {
      show: {
        endpoints: ['pixReceivedList'],
      },
    },
  },

  {
    displayName: 'txid',
    name: 'txid',
    type: 'string',
		default: '',
    required: false,
    description: 'Identificador da transação',
    displayOptions: {
      show: {
        endpoints: ['pixReceivedList'],
      },
    },
  },

  {
    displayName: 'txIdPresente',
    name: 'txIdPresente',
    type: 'options',
    options: [
      {
        name: 'Não enviar',
        value: 'none',
        description: 'Não enviar este parâmetro na requisição',
      },
      {
        name: 'true',
        value: 'true',
      },
      {
        name: 'false',
        value: 'false',
      },
    ],
    default: 'none',
    required: false,
    description: 'Indica se os Pix recebidos têm ou não txid associadas',
    displayOptions: {
      show: {
        endpoints: ['pixReceivedList'],
      },
    },
  },

   {
    displayName: 'devolucaoPresente',
    name: 'devolucaoPresente',
    type: 'options',
    options: [
      {
        name: 'Não enviar',
        value: 'none',
        description: 'Não enviar este parâmetro na requisição',
      },
      {
        name: 'true',
        value: 'true',
      },
      {
        name: 'false',
        value: 'false',
      },
    ],
    default: 'none',
    required: false,
    description: 'Indica se os Pix enviados têm ou não devoluções associadas',
    displayOptions: {
      show: {
        endpoints: ['pixReceivedList'],
      },
    },
  },

  {
    displayName: 'cpf',
    name: 'cpf',
    type: 'string',
		default: '',
    required: false,
    description: 'CPF do pagador',
    displayOptions: {
      show: {
        endpoints: ['pixReceivedList'],
      },
    },
  },

  {
    displayName: 'cnpj',
    name: 'cnpj',
    type: 'string',
		default: '',
    required: false,
    description: 'CNPJ do pagador',
    displayOptions: {
      show: {
        endpoints: ['pixReceivedList'],
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
        endpoints: ['pixReceivedList'],
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
        endpoints: ['pixReceivedList'],
      },
    },
  },

  //Consultar Pix recebido
  {
    displayName: 'exibirCodigoBanco',
    name: 'exibirCodigoBanco',
    type: 'options',
    options: [
      {
        name: 'Não enviar',
        value: 'none',
        description: 'Não enviar este parâmetro na requisição',
      },
      {
        name: 'true',
        value: 'true',
      },
      {
        name: 'false',
        value: 'false',
      },
    ],
    default: 'none',
    required: false,
    description: 'Exibe ou não o código do banco',
    displayOptions: {
      show: {
        endpoints: ['pixDetailReceived'],
      },
    },
  },
  


];

