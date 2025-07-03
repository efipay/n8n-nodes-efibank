import { INodeProperties } from 'n8n-workflow';

export const linkConfig: INodeProperties[] = [

  {
    displayName: 'charge_id',
    name: 'charge_id',
    type: 'string',
    required: true,
    default: '',
    description: 'Insira o id da cobrança',
    displayOptions: {
      show: {
        endpoints: [
					'defineLinkPayMethod',
					'detailLink',
					'updateLinkMetadata',
					'updateLink',
					'cancelLink',
					'createChargeLinkHistory',
					'sendLinkEmail'
				],
      },
    },
  },

  // Link One Step
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyLinkOneStep',
    type: 'json',
    default: `{
  "items": [
    {
      "amount": 5,
      "name": "Game of Thrones",
      "value": 827
    },
    {
      "amount": 2,
      "name": "Dexter",
      "value": 620
    }
  ],
  "metadata": {
      "custom_id": "produto 1",
      "notification_url": "https://www.meusite.com.br/notificacoes/n"
  },
  "customer": {
          "email": "email_do_cliente@servidor.com.br"
      },
  "shippings": [
    {
      "name": "Ouro Preto",
      "value": 500
    }
  ],
  "settings": {
    "billet_discount": 500,
    "card_discount": 300,
    "message": "Escreva aqui, se quiser, uma mensagem ao seu cliente, limite de 80 caracteres",
    "conditional_discount":{
      "type": "percentage",
      "value": 100,
      "until_date": "2032-11-30"
    },
    "payment_method": "all",
    "expire_at": "2032-12-30",
    "request_delivery_address": true
  }
}`,
    description: 'Insira o body da requisição para criar um link de pagamento em One Step',
    displayOptions: {
      show: {
        endpoints: ['createOneStepLink'],
      },
    },
  },

	// Criar Transação Link
	{
		displayName: 'Body da Requisição',
		name: 'requestBodyCriarTransacaoLink',
		type: 'json',
		default: `{
	"items": [{
		"name": "Produto de Exemplo",
		"value": 5000,
		"amount": 1
	}]
}`,
		description: 'Insira o body da requisição para criar uma transação',
		displayOptions: {
			show: {
				endpoints: ['createLinkCharge'],
			},
		},
	},

	 // Associar Forma de Pagamento
	{
		displayName: 'Body da Requisição',
		name: 'requestBodyAssociarFormaPagamentoLink',
		type: 'json',
		default: `{
	"message": "Escreva aqui, se quiser, uma mensagem ao seu cliente, limite de 80 caracteres",
  "payment_method": "all",
  "expire_at": "2032-12-30",
  "request_delivery_address": false,
  "billet_discount": 500,
  "card_discount": 300
}`,
		description: 'Insira o body da requisição para criar um link de pagamento em Two Stpes',
		displayOptions: {
			show: {
				endpoints: ['defineLinkPayMethod'],
			},
		},
	},

 // Retornar Lista de Links
		{
			displayName: 'begin_date',
			name: 'begin_date',
			type: 'string',
			default: '2025-01-01',
			required: true,
			description: 'Data início para o filtro da consulta',
			displayOptions: {
				show: {
					endpoints: ['listLinksBillet', 'listLinksCard'],
				},
			},
		},

		{
			displayName: 'end_date',
			name: 'end_date',
			type: 'string',
			default: '2025-12-31',
			required: true,
			description: 'Data fim para o filtro da consulta',
			displayOptions: {
				show: {
					endpoints: ['listLinksBillet', 'listLinksCard'],
				},
			},
		},

  // Incluir Metadata
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyIncluirMetadataLink',
    type: 'json',
    default: `{
	"notification_url": "https://www.meusite.com.br/notificacoes/",
	"custom_id": "REF001"
}`,
    description: 'Insira o body da requisição para incluir o metadata',
    displayOptions: {
      show: {
        endpoints: ['updateLinkMetadata'],
      },
    },
  },

  // Alterar Vencimento
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyAlterarLink',
    type: 'json',
    default: `{
    "billet_discount": 500,
    "card_discount" : 200,
    "expire_at": "2024-12-15"
}`,
    description: 'Insira o body da requisição para alterar o vencimento do link',
    displayOptions: {
      show: {
        endpoints: ['updateLink'],
      },
    },
  },

// Reenvio de Email
	{
		displayName: 'email',
		name: 'email',
		type: 'string',
    placeholder: 'name@email.com',
    required: true,
    default: '',
		description: 'Insira o email para o reenvio do link',
		displayOptions: {
			show: {
				endpoints: ['sendLinkEmail'],
			},
		},
	},


  // Acrescentar Histórico
  {
    displayName: 'Descrição',
    name: 'requestBodyHistorico',
    type: 'string',
    required: true,
    default: '',
    description: 'Insira a descrição para adicionar ao histórico',
    displayOptions: {
      show: {
        endpoints: ['createChargeLinkHistory'],
      },
    },
  },

];
 