import { INodeProperties } from 'n8n-workflow';

export const carneConfig: INodeProperties[] = [

	{
    displayName: 'carnet_id',
    name: 'carnet_id',
    type: 'string',
    default: '',
    required: true,
    description: 'Insira o id do carnê',
    displayOptions: {
      show: {
        endpoints: [
					'detailCarnet',
					'updateCarnetMetadata',
					'updateCarnetParcel',
					'updateCarnetParcels',
					'cancelCarnet',
					'cancelCarnetParcel',
					'sendCarnetEmail',
					'sendCarnetParcelEmail',
					'createCarnetHistory',
					'settleCarnet',
					'settleCarnetParcel'
				],
      },
    },
  },

  // Criar Carnê
  {
    displayName: 'Body da Requisição',
    name: 'requestCriarCarne',
    type: 'json',
    default: `{
  "items": [
    {
      "name": "Meu Produto",
      "value": 7500,
      "amount": 1
    }
  ],
  "customer": {
    "name": "Gorbadoc Oldbuck",
    "cpf": "94271564656",
    "phone_number": "5144916523"
  },
  "expire_at": "2031-12-20",
  "configurations": {
        "fine": 200,
        "interest": 33
      },
  "message": "Este é um espaço de até 80 caracteres para informar algo a seu cliente",
  "repeats": 5,
  "split_items": false
}`,
    description: 'Insira o body da requisição para criar um carnê',
    displayOptions: {
      show: {
        endpoints: ['createCarnet'],
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
					endpoints: ['listCarnets'],
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
					endpoints: ['listCarnets'],
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
					endpoints: ['listCarnets'],
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
					endpoints: ['listCarnets'],
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
					endpoints: ['listCarnets'],
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
					endpoints: ['listCarnets'],
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
					endpoints: ['listCarnets'],
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
					endpoints: ['listCarnets'],
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
					endpoints: ['listCarnets'],
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
					endpoints: ['listCarnets'],
				},
			},
		},

  // Incluir Metadata do Carnê
  {
    displayName: 'Body da Requisição',
    name: 'metadata',
    type: 'json',
    default: `{
  "notification_url": "https://www.meusite.com.br/notificacoes/",
  "custom_id": "258789877"
}`,
    description: 'Insira o body da requisição para incluir o metadata',
    displayOptions: {
      show: {
        endpoints: ['updateCarnetMetadata'],
      },
    },
  },

  // Alterar Vencimento de Parcela
	{
    displayName: 'parcel',
    name: 'parcela',
    type: 'string',
    default: '',
    required: true,
    description: 'Número da parcela que deseja alterar',
    displayOptions: {
      show: {
        endpoints: ['updateCarnetParcel', 'sendCarnetParcelEmail', 'cancelCarnetParcel', 'settleCarnetParcel'],
      },
    },
  },
  {
    displayName: 'Data de vencimento',
    name: 'parcel_data',
    type: 'string',
    placeholder: '2025-12-31',
    default: '',
    required: true,
    description: 'Novo vencimento para a parcela do carnê',
    displayOptions: {
      show: {
        endpoints: ['updateCarnetParcel'],
      },
    },
  },



  // Alterar Vencimento de Várias Parcelas
  {
    displayName: 'Body da Requisição',
    name: 'parcelas',
    type: 'json',
    default: `{
  "parcels": [
      {
        "parcel": 1,
        "expire_at": "2028-01-10"
      },
      {
        "parcel": 2,
        "expire_at": "2028-02-11"
      }
    ]
}`,
    description: 'Insira o body da requisição com as parcelas e as novas datas de vencimento',
    displayOptions: {
      show: {
        endpoints: ['updateCarnetParcels'],
      },
    },
  },


  // Reenvio do Carnê
  {
    displayName: 'email',
    name: 'email',
    type: 'string',
		placeholder: 'name@email.com',
    default: '',
    required: true,
    description: 'E-mail para o qual o carnê será reenviado',
    displayOptions: {
      show: {
        endpoints: ['sendCarnetEmail', 'sendCarnetParcelEmail'],
      },
    },
  },

	{
    displayName: 'Descrição',
    name: 'requestBodyHistorico',
    type: 'string',
    required: true,
    default: '',
    description: 'Insira a descrição para adicionar ao histórico',
    displayOptions: {
      show: {
        endpoints: ['createCarnetHistory'],
      },
    },
  },

];

