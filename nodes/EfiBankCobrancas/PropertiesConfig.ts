/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import { INodeProperties } from 'n8n-workflow';
import { boletoConfig } from './properties/boletoConfig';
import { cartaoConfig } from './properties/cartaoConfig';
import { carneConfig } from './properties/carneConfig';
import { assinaturaConfig } from './properties/assinaturaConfig';
import { linkConfig } from './properties/linkConfig';
import { splitConfig } from './properties/splitConfig';
import { notificacaoConfig } from './properties/notificacaoConfig';

export const propertiesConfig: INodeProperties[] = [
  {
    displayName: 'Tipo de transação',
    name: 'transactionType',
    type: 'options',
    noDataExpression: true,
    options: [
      { name: 'Boleto', value: 'boleto' },
      { name: 'Cartão', value: 'cartao' },
      { name: 'Carnê', value: 'carne' },
			{ name: 'Assinatura', value: 'assinatura' },
			{ name: 'Link de Pagamento', value: 'link' },
			{ name: 'Split de Pagamento', value: 'split' },
			{ name: 'Notificações', value: 'notificacao' },
    ],
    default: 'boleto',
    description: 'Selecione o tipo da transação',
  },
  {
    displayName: 'Endpoints para Boleto',
    name: 'endpoints',
    type: 'options',
    options: [
				{	name: 'Criar Boleto One Step', value: 'createOneStepCharge'},
				{	name: 'Criar Transação', value: 'createCharge'},
				{	name: 'Associar Forma de Pagamento', value: 'defineBilletPayMethod'},
				{	name: 'Retornar informações de cobrança existente',	value: 'detailBillet'},
				{	name: 'Retornar lista de Cobranças do tipo boleto', value: 'listBillets'},
				{	name: 'Incluir "notification_url" e "custom_id"',	value: 'updateBilletMetadata'},
				{ name: 'Alterar data de vencimento',	value: 'updateBillet'},
				{	name: 'Cancelar uma transação',	value: 'cancelBillet'},
				{	name: 'Reenvio do boleto bancário para o email desejado',	value: 'sendBilletEmail'},
				{	name: 'Acrescentar descrição ao histórico de uma transação', value: 'createBilletHistory'},
				{	name: 'Definir que a transação será do tipo boleto balancete', value: 'defineBalanceSheetBillet'},
				{ name: 'Marcar como pago uma transação',	value: 'settleBillet'},
    ],
    default: 'createOneStepCharge',
    description: 'Selecione o endpoint que você deseja utilizar',
    displayOptions: {
      show: {
        transactionType: ['boleto'],
      },
    },
  },
  {
    displayName: 'Endpoints para Cartão',
    name: 'endpoints',
    type: 'options',
    options: [
      { name: 'Criar Cobrança via cartão One Step', value: 'createOneStepCard'},
      { name: 'Criar Transação', value: 'createCardCharge'},
      { name: 'Associar Forma de Pagamento', value: 'defineCardPayMethod' },
			{ name: 'Retentativa de pagamento via cartão de crédito', value: 'cardPaymentRetry'},
			{ name: 'Estorno de pagamento via cartão de crédito', value: 'refundCard'},
			{ name: 'Retornar informações de cobrança existente', value: 'detailCard'},
			{ name: 'Retornar lista de Cobranças do tipo cartão', value: 'listCards'},
      { name: 'Incluir "notification_url" e "custom_id"', value: 'updateCardMetadata'},
      { name: 'Cancelar uma transação', value: 'cancelCard'},
      { name: 'Acrescentar descrição ao histórico de uma transação', value: 'createCardHistory'},
			{ name: 'Listar parcelas de acordo com a bandeira do cartão', value: 'getInstallments'},
		],
    default: 'createOneStepCard',
    description: 'Selecione o endpoint para Cartão',
    displayOptions: {
      show: {
        transactionType: ['cartao'],
      },
    },
  },
  {
    displayName: 'Endpoints para Carnê',
    name: 'endpoints',
    type: 'options',
    options: [
       { name: 'Criar Carnê', value: 'createCarnet' },
      { name: 'Retornar Carnê', value: 'detailCarnet' },
      { name: 'Retornar lista de Carnês', value: 'listCarnets' },
      { name: 'Incluir Metadata no Carnê', value: 'updateCarnetMetadata' },
      { name: 'Alterar Vencimento de Parcela', value: 'updateCarnetParcel' },
      { name: 'Alterar Vencimento de Parcelas', value: 'updateCarnetParcels' },
      { name: 'Cancelar Carnê', value: 'cancelCarnet' },
      { name: 'Cancelar Parcela de Carnê', value: 'cancelCarnetParcel' },
      { name: 'Reenvio de Carnê para o E-mail', value: 'sendCarnetEmail' },
      { name: 'Reenvio de Parcela de Carnê para o E-mail', value: 'sendCarnetParcelEmail' },
      { name: 'Acrescentar Histórico ao Carnê', value: 'createCarnetHistory' },
      { name: 'Marcar Carnê Como Pago', value: 'settleCarnet' },
      { name: 'Marcar Parcela de Carnê Como Pago', value: 'settleCarnetParcel' },
    ],
    default: 'createCarnet',
    description: 'Selecione o endpoint para Carnê',
    displayOptions: {
      show: {
        transactionType: ['carne'],
      },
    },
  },

	{
    displayName: 'Endpoints para Assinatura',
    name: 'endpoints',
    type: 'options',
    options: [
			{	name: 'Criar o plano de assinatura', value: 'createPlan'},
				{ name: 'Retornar informações de um plano',	value: 'listPlans'},
				{ name: 'Permitir a edição do nome do plano de assinatura',	value: 'updatePlan'},
				{ name: 'Cancelar um plano de assinatura',	value: 'deletePlan'},
				{	name: 'Criar inscrições (assinaturas) para vincular ao plano em One Step - Boleto',	value: 'createOneStepBilletSubscription'},
        {	name: 'Criar inscrições (assinaturas) para vincular ao plano em One Step - Cartão',	value: 'createOneStepCardSubscription'},
				{	name: 'Criar inscrições (assinaturas) para vincular ao plano em Two Steps', value: 'createSubscription'},
				{	name: 'Defina a forma de pagamento da assinatura e os dados do cliente - Boleto',	value: 'defineSubscriptionPaymentMethodBillet'},
        {	name: 'Defina a forma de pagamento da assinatura e os dados do cliente - Cartão',	value: 'defineSubscriptionPaymentMethodCard'},
				{	name: 'Retentativa de pagamento de assinatura via cartão de crédito', value: 'cardPaymentRetrySubscription'},
				{	name: 'Retornar informações de uma assinatura vinculada a um plano', value: 'detailSubscription'},
				{ name: 'Retornar lista de cobranças vinculadas às assinaturas',	value: 'listSubscriptions'},
				{	name: 'Associar plano ao link de pagamento', value: 'createOneStepSubscriptionLink'},
				{	name: 'Incluir "notification_url" e "custom_id" em uma assinatura existente',	value: 'updateSubscriptionMetadata'},
				{	name: 'Alterar dados de uma assinatura', value: 'updateSubscription'},
				{	name: 'Cancelar uma assinatura', value: 'cancelSubscription'},
				{ name: 'Acrescentar descrição ao histórico de uma assinatura',	value: 'createSubscriptionHistory'},
				{	name: 'Reenvio do link associado ao plano para o email desejado',	value: 'sendSubscriptionLinkEmail'},
    ],
    default: 'createPlan',
    description: 'Selecione o endpoint que você deseja utilizar',
    displayOptions: {
      show: {
        transactionType: ['assinatura'],
      },
    },
  },

	{
    displayName: 'Endpoints para Link de pagamento',
    name: 'endpoints',
    type: 'options',
    options: [
				{	name: 'Criar link de pagamento em One Step', value: 'createOneStepLink'},
				{	name: 'Criar Transação', value: 'createLinkCharge'},
				{	name: 'Criar um link de pagamento', value: 'defineLinkPayMethod'},
				{	name: 'Retornar informações de um link de pagamento',	value: 'detailLink'},
			  { name: 'Retornar lista de Links de Pagamento do tipo Boleto', value: 'listLinksBillet'},
			  { name: 'Retornar lista de Links de Pagamento do tipo Cartão', value: 'listLinksCard'},
				{	name: 'Incluir "notification_url" e "custom_id"',	value: 'updateLinkMetadata'},
				{ name: 'Alterar determinados parâmetros/atributos de um link de pagamento existente',	value: 'updateLink'},
				{	name: 'Cancelar um link de pagamento existente',	value: 'cancelLink'},
				{	name: 'Acrescentar descrição ao histórico de uma transação', value: 'createChargeLinkHistory'},
				{	name: 'Reenviar link de pagamento por e-mail',	value: 'sendLinkEmail'},
    ],
    default: 'createOneStepLink',
    description: 'Selecione o endpoint que você deseja utilizar',
    displayOptions: {
      show: {
        transactionType: ['link'],
      },
    },
  },
	{
    displayName: 'Endpoints para Split de pagamento',
    name: 'endpoints',
    type: 'options',
    options: [
				{	name: 'Criar transação Split de pagamento em One Step - Boleto', value: 'createOneStepSplitBillet'},
				{	name: 'Criar transação Split de pagamento em One Step - Cartão', value: 'createOneStepSplitCard'},
				{	name: 'Criar Transação Split', value: 'createSplitCharge'},
				{	name: 'Associar Forma de Pagamento - Boleto', value: 'defineSplitBilletPayMethod'},
				{	name: 'Associar Forma de Pagamento - Cartão', value: 'defineSplitCardPayMethod'},
    ],
    default: 'createOneStepSplitBillet',
    description: 'Selecione o endpoint que você deseja utilizar',
    displayOptions: {
      show: {
        transactionType: ['split'],
      },
    },
	},
	{
		displayName: 'Endpoint para Notificação',
		name: 'endpoints',
		type: 'options',
		options: [
				{	name: 'Consultar notificação', value: 'getNotification'},
		],
		default: 'getNotification',
		description: 'Selecione o endpoint que você deseja utilizar',
		displayOptions: {
			show: {
				transactionType: ['notificacao'],
			},
		},
  },
  ...boletoConfig,
	...cartaoConfig,
  ...carneConfig,
	...assinaturaConfig,
	...linkConfig,
	...splitConfig,
	...notificacaoConfig
];
