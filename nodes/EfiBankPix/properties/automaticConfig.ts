import { INodeProperties } from 'n8n-workflow';

export const automaticConfig: INodeProperties[] = [

     // txid
  {
    displayName: 'txid',
    name: 'txid',
    type: 'string',
    default: '',
    required: true,
    description: 'Insira o txid da cobrança de Pix Automático',
    displayOptions: {
      show: {
        endpoints: [
          'pixCreateAutomaticChargeTxid',
          'pixUpdateAutomaticCharge',
          'pixDetailAutomaticCharge',
        ],
      },
    },
  },

  // Criar recorrência automática
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixCreateRecurrenceAutomatic',
    type: 'json',
    default: `{
  "vinculo": {
    "contrato": "63100862",
    "devedor": {
      "cpf": "45164632481",
      "nome": "Fulano de Tal"
    },
    "objeto": "Serviço de Streamming de Música."
  },
  "calendario": {
    "dataFinal": "2025-04-01",
    "dataInicial": "2024-04-01",
    "periodicidade": "MENSAL"
  },
  "valor": {
    "valorRec": "35.00"
  },
  "politicaRetentativa": "NAO_PERMITE",
  "loc": 108,
  "ativacao": {
    "dadosJornada": {
      "txid": "33beb661beda44a8928fef47dbeb2dc5"
    }
  }
}`,
    description: 'Insira o body da requisição para criar uma recorrência automática',
    displayOptions: {
      show: {
        endpoints: ['pixCreateRecurrenceAutomatic'],
      },
    },
  },

  // idRec
  {
    displayName: 'idRec',
    name: 'idRec',
    type: 'string',
    default: '',
    required: true,
    description: 'Insira o id da recorrência',
    displayOptions: {
      show: {
        endpoints: [
          'pixDetailRecurrenceAutomatic',
          'pixUpdateRecurrenceAutomatic'
        ],
      },
    },
  },

// Revisar recorrência automática
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixUpdateRecurrenceAutomatic',
    type: 'json',
    default: `{
  "loc": 108,
  "vinculo": {
    "devedor": {
      "nome": "Fulano de Tal"
    }
  },
  "calendario": {
    "dataInicial": "2024-04-01"
  },
  "ativacao": {
    "dadosJornada": {
      "txid": "33beb661beda44a8928fef47dbeb2dc5"
    }
  }
}`,
    description: 'Insira o body da requisição para revisar recorrência de Pix Automático',
    displayOptions: {
      show: {
        endpoints: ['pixUpdateRecurrenceAutomatic'],
      },
    },
  },

  // listar recorrências
  {
    displayName: '* inicio',
    name: 'inicio',
    type: 'string',
    default: '2024-04-01T00:00:00Z',
    required: true,
    description: 'Data início para o filtro da consulta',
    displayOptions: {
      show: {
        endpoints: ['pixListRecurrenceAutomatic'],
      },
    },
  },

  {
    displayName: '* fim',
    name: 'fim',
    type: 'string',
    default: '2024-04-01T23:59:59Z',
    required: true,
    description: 'Data fim para o filtro da consulta',
    displayOptions: {
      show: {
        endpoints: ['pixListRecurrenceAutomatic'],
      },
    },
  },

   {
    displayName: 'idRec',
    name: 'idRec',
    type: 'string',
    default: '',
    required: false,
    description: 'Insira o idRec da recorrência',
    displayOptions: {
      show: {
        endpoints: [
          'pixListAutomaticCharges'
        ],
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
        endpoints: ['pixListRecurrenceAutomatic', 'pixListAutomaticCharges'],
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
        endpoints: ['pixListRecurrenceAutomatic', 'pixListAutomaticCharges'],
      },
    },
  },

  {
    displayName: 'locationPresente',
    name: 'locationPresente',
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
    description: 'Indica se a recorrência tem ou não location associadas',
    displayOptions: {
      show: {
        endpoints: ['pixListRecurrenceAutomatic'],
      },
    },
  },

  {
    displayName: 'status',
    name: 'status',
    type: 'string',
		default: '',
    required: false,
    description: 'Status da recorrencia',
    displayOptions: {
      show: {
        endpoints: ['pixListRecurrenceAutomatic', 'pixListAutomaticCharges'],
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
          endpoints: ['pixListRecurrenceAutomatic', 'pixListAutomaticCharges'],
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
        endpoints: ['pixListRecurrenceAutomatic', 'pixListAutomaticCharges'],
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
        endpoints: ['pixListRecurrenceAutomatic', 'pixListAutomaticCharges'],
      },
    },
  },

  // Criar solicitação de recorrência automática
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixCreateRequestRecurrenceAutomatic',
    type: 'json',
    default: `{
  "idRec": "RN123456782024011577825445612",
  "calendario": {
    "dataExpiracaoSolicitacao": "2023-12-20T12:17:11.926Z"
  },
  "destinatario": {
    "agencia": "2569",
    "conta": "550689",
    "cpf": "15231470190",
    "ispbParticipante": "91193552"
  }
}`,
    description: 'Insira o body da requisição para criar uma solicitação de recorrência automática',
    displayOptions: {
      show: {
        endpoints: ['pixCreateRequestRecurrenceAutomatic'],
      },
    },
  },

   // idSolicRec
  {
    displayName: 'idSolicRec',
    name: 'idSolicRec',
    type: 'string',
    default: '',
    required: true,
    description: 'Insira o id da solicitação de recorrência',
    displayOptions: {
      show: {
        endpoints: [
          'pixDetailRequestRecurrenceAutomatic',
          'pixUpdateRequestRecurrenceAutomatic'
        ],
      },
    },
  },

  // Revisar solicitação de recorrência automática
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixUpdateRequestRecurrenceAutomatic',
    type: 'json',
    default: `{
  "status": "CANCELADA"
}`,
    description: 'Insira o body da requisição para revisar uma solicitação de recorrência de Pix automático',
    displayOptions: {
      show: {
        endpoints: ['pixUpdateRequestRecurrenceAutomatic', 'pixUpdateAutomaticCharge'],
      },
    },
  },



  // Criar cobrança automática com txid
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixCreateAutomaticCharge',
    type: 'json',
    default: `{
  "idRec": "RR1234567820240115abcdefghijk",
  "infoAdicional": "Serviços de Streamming de Música e Filmes.",
  "calendario": {
    "dataDeVencimento": "2024-04-15"
  },
  "valor": {
    "original": "106.07"
  },
  "ajusteDiaUtil": true,
  "devedor": {
    "cep": "89256140",
    "cidade": "Uberlândia",
    "email": "sebastiao.tavares@mail.com",
    "logradouro": "Alameda Franco 1056",
    "uf": "MG"
  },
  "recebedor": {
    "agencia": "9708",
    "conta": "12682",
    "tipoConta": "CORRENTE"
  }
}`,
    description: 'Insira o body da requisição para criar uma cobrança de Pix Automático',
    displayOptions: {
      show: {
        endpoints: ['pixCreateAutomaticChargeTxid', 'pixCreateAutomaticCharge'],
      },
    },
  },




];