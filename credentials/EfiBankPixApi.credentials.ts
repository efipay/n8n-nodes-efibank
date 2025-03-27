import {
	ICredentialType,
	INodeProperties,
	ICredentialDataDecryptedObject,
	IHttpRequestOptions,
	ICredentialTestRequest,
} from 'n8n-workflow';


import * as forge from 'node-forge';

export class EfiBankPixApi implements ICredentialType {
	name = 'EfiBankPixApi';
	displayName = 'Efí Bank | API Pix';
	documentationUrl = 'https://dev.efipay.com.br/docs/api-pix/credenciais';

	properties: INodeProperties[] = [
			{
				displayName: 'Ambiente',
				name: 'environment',
				type: 'options',
				options: [
					{ name: 'Homologação', value: 'homolog' },
					{ name: 'Produção', value: 'prod' },
				],
				default: 'homolog',
				required: true,
				description: 'Selecione o ambiente correto para suas credenciais',
			},
			{
				displayName: 'Chave Client ID Produção',
				name: 'clientIdProd',
				type: 'string',
				default: '',
				required: true,
			},
			{
				displayName: 'Chave Client Secret Produção',
				name: 'clientSecretProd',
				type: 'string',
				default: '',
				required: true,
			},
			{
				displayName: 'Chave Client ID Homologação',
				name: 'clientIdHomolog',
				type: 'string',
				default: '',
				required: true,
			},
			{
				displayName: 'Chave Client Secret Homologação',
				name: 'clientSecretHomolog',
				type: 'string',
				default: '',
				required: true,
			},
			{
				displayName: 'Certificado',
				name: 'certificatePem',
				type: 'string',
				default: '',
				required: true,
				description: 'Cole o conteúdo completo do certificado PEM (BEGIN/END)',
			},
			{
				displayName: 'Key',
				name: 'keyPem',
				type: 'string',
				default: '',
				required: true,
				description: 'Cole o conteúdo completo da chave privada PEM (BEGIN/END)',
			},
	];

	private convertPemToP12Base64(credentials: ICredentialDataDecryptedObject): string {
		try {
			// Obter os dados PEM das credenciais e remover possíveis quebras de linha incorretas
			const certificatePem = String(credentials.certificatePem || "").replace(/\\n/g, "\n");
			const keyPem = String(credentials.keyPem || "").replace(/\\n/g, "\n");

			// Converter PEM para objetos forge
			const certificate = forge.pki.certificateFromPem(certificatePem);
			const privateKey = forge.pki.privateKeyFromPem(keyPem);

			// Criar PKCS#12 sem senha
			const p12Asn1 = forge.pkcs12.toPkcs12Asn1(
				privateKey,
				[certificate],
				'', // Sem senha
				{
					friendlyName: 'Efi Bank Certificate',
					generateLocalKeyId: true,
				}
			);

			// Converter para DER
			const p12Der = forge.asn1.toDer(p12Asn1).getBytes();

			// Converter P12 para Base64
			const certificate_base64 = Buffer.from(p12Der, 'binary').toString('base64');

        return certificate_base64;
		} catch (error) {
			console.error('Erro ao converter PEM para P12 Base64:', error);
			throw new Error(`Falha na conversão de certificados: ${error.message}`);
		}
	}

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions
	): Promise<IHttpRequestOptions> {
		// 1. Obter dados do usuário
		const isProd = credentials.environment === "prod";

		// Seleciona as credenciais corretas
		const clientId = isProd ? credentials.clientIdProd : credentials.clientIdHomolog;
		const clientSecret = isProd ? credentials.clientSecretProd : credentials.clientSecretHomolog;

		// Codificar credenciais em Base64 para autenticação
		const encodedApiKey = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

		// Converter certificado para base64
		const certificate_base64 = this.convertPemToP12Base64(credentials);

		// Garantir que headers e body estão inicializados
		requestOptions.headers = requestOptions.headers || {};
		requestOptions.body = requestOptions.body || {};

		// Adicionar os cabeçalhos da requisição
		requestOptions.headers.Authorization = `Basic ${encodedApiKey}`;
		requestOptions.headers["Content-Type"] = "application/json";

		// Adicionar grant_type e certificado em base64 no corpo
		const bodyData = requestOptions.body as Record<string, any>;
		bodyData.grant_type = "client_credentials";
		bodyData.certificate_base64 = certificate_base64;

		console.log("Request Options:", {
			url: requestOptions.url,
			method: requestOptions.method,
			headers: requestOptions.headers,
			bodyKeys: Object.keys(bodyData),
		});

		return requestOptions;
	}

	// Configuração para o teste de credenciais
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.environment === "prod" ? "https://pix.api.efipay.com.br" : "https://pix-h.api.efipay.com.br" }}',
			url: '/oauth/token',
			method: 'POST',
		},
	};
}