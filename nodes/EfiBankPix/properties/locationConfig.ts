/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
import { INodeProperties } from 'n8n-workflow';

export const locationConfig: INodeProperties[] = [
	// txid
  {
    displayName: 'id',
    name: 'id',
    type: 'number',
    placeholder:'57',
    default: null,
    required: true,
    description: 'Insira o id do location',
    displayOptions: {
      show: {
        endpoints: [
          'pixDetailLocation',
          'pixGenerateQRCode',
          'pixUnlinkTxidLocation',
          'pixUnlinkLocationRecurrenceAutomatic',
          'pixDetailLocationRecurrenceAutomatic'
        ],
      },
    },
  },

  //Listar Locations
  {
    displayName: '* inicio',
    name: 'inicio',
    type: 'string',
    default: '2025-01-01T00:00:00Z',
    required: true,
    description: 'Data início para o filtro da consulta',
    displayOptions: {
      show: {
        endpoints: ['pixLocationList', 'pixListLocationRecurrenceAutomatic'],
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
        endpoints: ['pixLocationList', 'pixListLocationRecurrenceAutomatic'],
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
    description: 'Indica se o Location têm ou não txid associado',
    displayOptions: {
      show: {
        endpoints: ['pixLocationList'],
      },
    },
  },


  {
    displayName: 'tipoCob',
    name: 'tipoCob',
    type: 'string',
		default: '',
    required: false,
    description: 'Tipo da cobrança',
    displayOptions: {
      show: {
        endpoints: ['pixLocationList'],
      },
    },
  },

  //listar locations recorrência
  {
      displayName: 'idRecPresente',
      name: 'idRecPresente',
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
      description: 'Indica se o Location têm ou não identificador de recorrência',
      displayOptions: {
        show: {
          endpoints: ['pixListLocationRecurrenceAutomatic'],
        },
      },
    },


    {
      displayName: 'convenio',
      name: 'convenio',
      type: 'string',
      default: '',
      required: false,
      description: 'Convênio associado.',
      displayOptions: {
        show: {
          endpoints: ['pixListLocationRecurrenceAutomatic'],
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
        endpoints: ['pixLocationList', 'pixListLocationRecurrenceAutomatic'],
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
        endpoints: ['pixLocationList', 'pixListLocationRecurrenceAutomatic'],
      },
    },
  },

 
  {
    displayName: 'tipoCob',
    name: 'tipoCob',
    type: 'string',
    placeholder: 'cob | cobv',
    default: '',
    description: 'Tipo da cobrança que pode ser COB ou COBV',
    displayOptions: {
      show: {
        endpoints: [
          'pixCreateLocation'
        ],
      },
    },
  },


];

