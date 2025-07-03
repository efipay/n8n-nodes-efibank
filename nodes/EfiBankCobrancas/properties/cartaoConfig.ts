import { INodeProperties } from 'n8n-workflow';

export const cartaoConfig: INodeProperties[] = [

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
					'defineCardPayMethod',
					'cardPaymentRetry',
					'refundCard',
					'detailCard',
					'updateCardMetadata',
					'cancelCard',
					'createCardHistory'
				],
      },
    },
  },

  // Cartão One Step
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyCartaoOneStep',
    type: 'json',
    default: `{
  "items": [
    {
      "name": "Meu Produto",
      "value": 1000,
      "amount": 1
    }
  ],
  "payment": {
    "credit_card": {
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "phone_number": "5144916523"
      },
      "installments": 1,
      "payment_token": ""
    }
  }
}`,
    description: 'Insira o body da requisição para criar um transação do tipo cartão com a API One Step',
    displayOptions: {
      show: {
        endpoints: ['createOneStepCard'],
      },
    },
  },

	// Criar Transação
	{
		displayName: 'Body da Requisição',
		name: 'requestBodyCriarCartao',
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
				endpoints: ['createCardCharge'],
			},
		},
	},

	 // Associar Forma de Pagamento
	{
		displayName: 'Body da Requisição',
		name: 'requestBodyAssociarFormaPagamentoCartao',
		type: 'json',
		default: `{
	"payment": {
		"credit_card": {
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "phone_number": "5144916523"
      },
      "installments": 1,
      "payment_token": ""
    }
	}
}`,
		description: 'Insira o body da requisição para associar a forma de pagamento',
		displayOptions: {
			show: {
				endpoints: ['defineCardPayMethod'],
			},
		},
	},

	 // Retentativa Pagamento
	 {
		displayName: 'Body da Requisição',
		name: 'requestBodyRetentativaPagamento',
		type: 'json',
		default: `{
	"payment": {
		"credit_card": {
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "phone_number": "5144916523"
      },
       "billing_address": {
        "street": "Avenida Juscelino Kubitschek",
        "number": "909",
        "neighborhood": "Bauxita",
        "zipcode": "35400000",
        "city": "Ouro Preto",
        "complement": "",
        "state": "MG"
      },
      "payment_token": ""
    }
	}
}`,
		description: 'Insira o body da requisição para a retentativade pagamento',
		displayOptions: {
			show: {
				endpoints: ['cardPaymentRetry'], 
			},
		},
	},

	 // Estorno Pagamento
	 {
    displayName: 'Valor do estorno',
    name: 'amount',
	type: 'number',
    placeholder: '1000',
	required: true,
    default: null,
    description: 'Insira o valor da cobrança a ser estornado',
    displayOptions: {
      show: {
        endpoints: ['refundCard'],
      },
    },
  },

	  // Retornar Lista de Cobranças
		{
			displayName: 'begin_date',
			name: 'begin_date',
			type: 'string',
			default: '2025-01-01',
			required: true,
			description: 'Data início para o filtro da consulta',
			displayOptions: {
				show: {
					endpoints: ['listCards'],
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
					endpoints: ['listCards'],
				},
			},
		},

  // Incluir Metadata
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyIncluirMetadataCartao',
    type: 'json',
    default: `{
	"notification_url": "https://www.meusite.com.br/notificacoes/",
	"custom_id": "REF001"
}`,
    description: 'Insira o body da requisição para incluir o metadata',
    displayOptions: {
      show: {
        endpoints: ['updateCardMetadata'],
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
        endpoints: ['createCardHistory'],
      },
    },
  },

	// Listar parcelas
	// {
	// 	displayName: 'Identificador de conta (payee_code)',
	// 	name: 'identificador',
	// 	type: 'string',
	// 	default: "",
	// 	required: true,
	// 	description: 'Insira o identificador da conta',
	// 	displayOptions: {
	// 		show: {
	// 			endpoints: ['getInstallments'],
	// 		},
	// 	},
	// },
	{
		displayName: 'Valor total da cobrança',
		name: 'total',
		type: 'number',
		default: "",
		required: true,
		description: 'Insira o valor total da cobrança',
		displayOptions: {
			show: {
				endpoints: ['getInstallments'],
			},
		},
	},

	{
		displayName: 'Bandeira do cartão',
		name: 'brand',
		type: 'options',
		options: [
			{ name: 'Visa', value: 'visa' },
			{ name: 'Mastercard', value: 'mastercard' },
			{ name: 'Amex', value: 'amex' },
			{ name: 'Elo', value: 'elo' },
			{ name: 'Hipercard', value: 'hipercard' },
		],
		default: 'mastercard',
		required: true,
		description: 'Insira a Bandeira do cartão',
		displayOptions: {
			show: {
				endpoints: ['getInstallments'],
			},
		},
	},

];
