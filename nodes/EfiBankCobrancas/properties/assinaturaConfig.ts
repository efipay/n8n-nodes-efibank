/* eslint-disable n8n-nodes-base/node-param-placeholder-missing-email */
import { INodeProperties } from 'n8n-workflow';

export const assinaturaConfig: INodeProperties[] = [

	// ID do Plano
  {
    displayName: 'plan_id',
    name: 'plan_id',
    type: 'string', 
    required: true,
    default: '',
    description: 'Insira o id do plano',
    displayOptions: {
      show: {
        endpoints: [
          'updatePlan',
          'deletePlan',
          'createOneStepBilletSubscription',
          'createOneStepCardSubscription',
          'createSubscription',
          'createOneStepSubscriptionLink'
        ],
      },
    },
  },

   // ID da inscrição
   {
    displayName: 'subcription_id',
    name: 'subscription_id',
    type: 'string',
    required: true,
    default: '',
    description: 'Insira o id da assinatura',
    displayOptions: {
      show: {
        endpoints: [
          'defineSubscriptionPaymentMethodBillet',
          'defineSubscriptionPaymentMethodCard',
          'detailSubscription',
          'updateSubscriptionMetadata',
          'updateSubscription',
          'cancelSubscription',
          'createSubscriptionHistory'
        ],
      },
    },
  },

	{
    displayName: 'charge_id',
    name: 'charge_id',
    type: 'string',
    required: true,
    default: '',
    description: 'Insira o id da cobrança',
    displayOptions: {
      show: {
        endpoints: ['sendSubscriptionLinkEmail', 'cardPaymentRetrySubscription'],
      },
    },
  },

  // Criar o plano de assinatura
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPlanoAssinatura',
    type: 'json',
    default: `{
  "name": "Plano de Internet - Velocidade 10 Mb",
  "interval": 1,
  "repeats": 12
}`,
    description: 'Insira o body da requisição para criar um plano de assinatura',
    displayOptions: {
      show: {
        endpoints: ['createPlan'],
      },
    },
  },

  // Retentativa de pagamento de assinatura via cartão de crédito
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
        "birth": "1990-08-29",
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
      "payment_token": "",
      "update_card": true
    }
  }
}`,
    description: 'Insira o body da requisição para realizar uma retentativa de pagamento',
    displayOptions: {
      show: {
        endpoints: ['cardPaymentRetrySubscription'],
      },
    },
  },


  // Editar o nome do plano de assinatura
  {
    displayName: 'Nome do plano',
    name: 'nome_plano',
    type: 'string',
    required: true,
    default: '',
    description: 'Insira o novo nome do plano',
    displayOptions: {
      show: {
        endpoints: ['updatePlan'], 
      },
    },
  },

  // Criar inscrições (assinaturas) para vincular ao plano em One Step Billet
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyInscricaoOneStepBoleto',
    type: 'json',
    default: `{
  "items": [{
    "name": "Meu Produto",
    "value": 5990,
    "amount": 1
  }],
  "payment": {
    "banking_billet": {
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "phone_number": "5144916523",
        "address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "neighborhood": "Bauxita",
          "zipcode": "35400000",
          "city": "Ouro Preto",
          "complement": "",
          "state": "MG"
        }
      },
      "expire_at": "2032-12-30",
      "configurations": {
        "fine": 200,
        "interest": 33
      },
      "message": "Pague pelo código de barras ou pelo QR Code"
    }
  }
}`,
    description: 'Insira o body da requisição para criar uma assinatura em One Step',
    displayOptions: {
      show: {
        endpoints: ['createOneStepBilletSubscription'],
      },
    },
  },

  // Criar inscrições (assinaturas) para vincular ao plano em One Step Card
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyInscricaoOneStepCartao',
    type: 'json',
    default: `{
  "items": [
    {
      "name": "Meu Produto",
      "value": 5990,
      "amount": 1
    }
  ],
  "payment": {
    "credit_card": {
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "birth": "1990-08-29",
        "phone_number": "5144916523"
      },
      "payment_token": "",
      "billing_address": {
        "street": "Avenida Juscelino Kubitschek",
        "number": "909",
        "neighborhood": "Bauxita",
        "zipcode": "35400000",
        "city": "Ouro Preto",
        "complement": "",
        "state": "MG"
      }
    }
  }
}`,
    description: 'Insira o body da requisição para criar uma assinatura em One Step',
    displayOptions: {
      show: {
        endpoints: ['createOneStepCardSubscription'],
      },
    },
  },

  // Criar inscrições (assinaturas) para vincular ao plano em Two Steps
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyInscricaoTwoSteps',
    type: 'json',
    default: `{
  "items": [{
    "name": "Internet - Mensalidade",
    "value": 6990,
    "amount": 1
  }]
}`,
    description: 'Insira o body da requisição para criar uma assinatura em Two Steps',
    displayOptions: {
      show: {
        endpoints: ['createSubscription'],
      },
    },
  },

  // Definir a forma de pagamento da assinatura e os dados do cliente Boleto
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyFormaPagamentoBoleto',
    type: 'json',
    default: `{
  "payment": {
    "banking_billet": {
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "phone_number": "5144916523",
        "address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "neighborhood": "Bauxita",
          "zipcode": "35400000",
          "city": "Ouro Preto",
          "complement": "",
          "state": "MG"
        }
      },
      "expire_at": "2032-12-30",
      "configurations": {
        "fine": 200,
        "interest": 33
      },
      "message": "Pague pelo código de barras ou pelo QR Code"
    }
  }
}`,
    description: 'Insira o body da requisição para definir a forma de pagamento de uma assinatura',
    displayOptions: {
      show: {
        endpoints: ['defineSubscriptionPaymentMethodBillet'],
      },
    },
  },

  // Definir a forma de pagamento da assinatura e os dados do cliente Cartão
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyFormaPagamentoCartao',
    type: 'json',
    default: `{
  "payment": {
    "credit_card": {
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "birth": "1990-08-29",
        "phone_number": "5144916523"
      },
      "payment_token": "",
      "billing_address": {
        "street": "Avenida Juscelino Kubitschek",
        "number": "909",
        "neighborhood": "Bauxita",
        "zipcode": "35400000",
        "city": "Ouro Preto",
        "complement": "",
        "state": "MG"
      }
    }
  }
}`,
    description: 'Insira o body da requisição para definir a forma de pagamento de uma assinatura',
    displayOptions: {
      show: {
        endpoints: ['defineSubscriptionPaymentMethodCard'],
      },
    },
  },

  // Associar plano ao link de pagamento
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyAssociarPlanoLink',
    type: 'json',
    default: `{
  "items": [{
    "amount": 2,
    "name": "Silicon Valley",
    "value": 564
  }],
  "metadata": {
    "custom_id": "Assinatura",
    "notification_url": "https://www.meusite.com.br/notificacoes/"
  },
  "settings": {
    "payment_method": "all",
    "expire_at": "2032-02-08",
    "request_delivery_address": true
  }
}`,
    description: 'Insira o body da requisição para associar o plano ao link de pagamento',
    displayOptions: {
      show: {
        endpoints: ['createOneStepSubscriptionLink'],
      },
    },
  },

  // Retornar Lista de planos
		{
			displayName: 'name',
			name: 'name',
			type: 'string',
			default: '',
			required: false,
			description: 'Nome do plano cadastrado previamente',
			displayOptions: {
				show: {
					endpoints: ['listPlans'],
				},
			},
		},

		{
			displayName: 'limit',
			name: 'limit',
			type: 'number',
			default: null,
			required: false,
			description: 'Limite máximo de registros de resposta',
			displayOptions: {
				show: {
					endpoints: ['listPlans'],
				},
			},
		},

    {
			displayName: 'offset',
			name: 'offset',
			type: 'number',
			default: null,
			required: false,
			description: 'Determina a partir de qual registro a busca será realizada',
			displayOptions: {
				show: {
					endpoints: ['listPlans'],
				},
			},
		},



   // Retornar Lista de Cobranças
		{
			displayName: '* begin_date ',
			name: 'begin_date',
			type: 'string',
			default: '2025-01-01',
			required: true,
			description: 'Data início para o filtro da consulta. Campo obrigatório',
			displayOptions: {
				show: {
					endpoints: ['listSubscriptions'],
				},
			},
		},

		{
			displayName: '* end_date',
			name: 'end_date',
			type: 'string',
			default: '2025-12-31',
			required: true,
			description: 'Data fim para o filtro da consulta. Campo obrigatório',
			displayOptions: {
				show: {
					endpoints: ['listSubscriptions'],
				},
			},
		},

    {
			displayName: 'date_of',
			name: 'date_of',
			type: 'string',
			default: '',
			required: false,
			description: 'Define por qual valor o filtro de data será aplicado',
			displayOptions: {
				show: {
					endpoints: ['listSubscriptions'],
				},
			},
		},

    {
			displayName: 'status',
			name: 'status',
			type: 'string',
			default: '',
			required: false,
			description: 'Status das cobranças',
			displayOptions: {
				show: {
					endpoints: ['listSubscriptions'],
				},
			},
		},

    {
			displayName: 'customer_document',
			name: 'customer_document',
			type: 'string',
			default: '',
			required: false,
			description: 'Documento do pagador',
			displayOptions: {
				show: {
					endpoints: ['listSubscriptions'],
				},
			},
		},

    {
			displayName: 'custom_id',
			name: 'custom_id',
			type: 'string',
			default: '',
			required: false,
			description: 'ID específico de seu sistema ou aplicação',
			displayOptions: {
				show: {
					endpoints: ['listSubscriptions'],
				},
			},
		},

    {
			displayName: 'value',
			name: 'value',
			type: 'number',
			default: null,
			required: false,
			description: 'valor da cobrança',
			displayOptions: {
				show: {
					endpoints: ['listSubscriptions'],
				},
			},
		},

    {
			displayName: 'limit',
			name: 'limit',
			type: 'number',
      default: null,
			required: false,
			description: 'Quantidade de registros retornados pela consulta',
			displayOptions: {
				show: {
					endpoints: ['listSubscriptions'],
				},
			},
		},

    {
			displayName: 'page',
			name: 'page',
			type: 'number',
			default: null,
			required: false,
			description: 'Página a ser retornada pela consulta',
			displayOptions: {
				show: {
					endpoints: ['listSubscriptions'],
				},
			},
		},

    {
			displayName: 'offset',
			name: 'offset',
			type: 'number',
			default: null,
			required: false,
			description: 'Quantidade máxima de registros retornados em cada página',
			displayOptions: {
				show: {
					endpoints: ['listSubscriptions'],
				},
			},
		},

  // Incluir "notification_url" e "custom_id" em uma assinatura existente
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyIncluirMetadata',
    type: 'json',
    default: `{
  "notification_url": "https://www.meusite.com.br/notificacoes/",
  "custom_id": "REF0001"
}`,
    description: 'Insira o body da requisição para incluir metadata em uma assinatura existente',
    displayOptions: {
      show: {
        endpoints: ['updateSubscriptionMetadata'],
      },
    },
  },

  // Alterar dados de uma assinatura
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyupdateSubscription',
    type: 'json',
    default: `{
  "plan_id": 3,
  "customer": {
    "email": "gorbadoc.oldbuck@gmail.com",
    "phone_number": "31123456789"
  },
  "items": [{
    "name": "Product 1",
    "value": 1000,
    "amount": 1
  }],
  "shippings": [{
    "name": "frete",
    "value": 1800
  }],
  "payment_token": ""
}`,
    description: 'Insira o body da requisição para alterar dados de uma assinatura do tipo cartão de crédito',
    displayOptions: {
      show: {
        endpoints: ['updateSubscription'],
      },
    },
  },

  // Acrescentar descrição ao histórico de uma assinatura
  {
    displayName: 'Descrição',
    name: 'requestBodyHistorico',
    type: 'string',
    required: true,
    default: '',
    description: 'Insira a descrição para adicionar ao histórico',
    displayOptions: {
      show: {
        endpoints: ['createSubscriptionHistory'],
      },
    },
  },

  // Reenvio do link associado ao plano para o email desejado

  {
    displayName: 'email',
    name: 'email',
    type: 'string',
    placeholder: 'name@email.com',
    default: '',
    required: true,
    description: 'Insira o email para reenviar o link',
    displayOptions: {
      show: {
        endpoints: ['sendSubscriptionLinkEmail'],
      },
    },
  },
];
