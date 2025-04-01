![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-efibank

O n8n-nodes-efibank é um nó personalizado para o n8n que facilita a integração com a API de Cobranças e a API Pix do Efibank, permitindo a automação de fluxos de trabalho relacionados a pagamentos, recebimentos, e transações financeiras.

[requisitos](#requisitos) 
[Instalação](#instalação)  
[Instalação para usuários finais](#instalação-para-usuários-finais)
[Configuração](#configuração)  

## Requisitos

### Versão do Node.js
Este nó personalizado requer uma versão do Node.js compatível com o n8n. A versão mínima do Node.js necessária é 18.17, e a versão máxima suportada é 22.

## Instalação

Para instalar este nó personalizado, você precisa:

1. Instalar as dependências:
```bash
npm install
```

2. Compilar o código:
```bash
npm run build
```

3. Link para uso local (desenvolvimento):
```bash
npm link
```

4. Iniciar o n8n:
```bash
n8n
```

## Instalação para usuários finais via NPM

Para instalar apenas o nó em uma instalação existente do n8n:

```bash
npm install n8n-nodes-efibank
```

## Instalação para usuários finais via Git

O nó também está disponível em nosso repositório no Github da [Efí](https://github.com/efipay/n8n-nodes-efibank).

```bash
git clone https://github.com/efipay/n8n-nodes-efibank.git
```

## Configuração

### API Cobranças
Na interface do n8n, configure suas credenciais:
1. Selecione o ambiente (Homologação/Produção)
2. Configure as credenciais Client ID e Client Secret para os dois ambientes. Para obter as credencias da aplicação, você pode acessar [esse tutorial](https://dev.efipay.com.br/docs/api-cobrancas/credenciais#obtendo-as-credenciais-da-aplica%C3%A7%C3%A3o).

### API Pix
Na interface do n8n, configure suas credenciais:
1. Selecione o ambiente (Homologação/Produção)
2. Configure as credenciais Client ID e Client Secret para os dois ambientes. Para obter as credencias da aplicação, você pode acessar [esse tutorial](https://dev.efipay.com.br/docs/api-cobrancas/credenciais#obtendo-as-credenciais-da-aplica%C3%A7%C3%A3o).
3. Configure o certificado:
   - Gere um certificado em sua conta Efí, veja como [clicando aqui](https://sejaefi.com.br/central-de-ajuda/api/como-gerar-o-certificado-para-usar-a-api-pix?_gl=1*96b3d4*_gcl_au*MTgzNDQxMDgyMi4xNzQzNTA2MDI5#conteudo)
   - Faça upload do certificado na página de conversão e clique em "Codificar e Exibir", [clicando aqui](https://efipay.github.io/encode-credentials/certificado.html)
   - Copie o conteúdo do Certificado e cole no campo "Certificado"
   - Copie o conteúdo da Key e cole no campo "Key"


