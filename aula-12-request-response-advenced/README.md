# Aula 12 — Request e Response Avançado

Nesta aula foi desenvolvido um exemplo de **requisições e respostas HTTP avançadas utilizando NestJS**, trabalhando com controle de acesso através de uma chave de API, utilização de headers, códigos de status HTTP e respostas personalizadas.

## Conteúdos trabalhados

Durante a aula, foram praticados os seguintes conceitos:

- Criação de controllers no NestJS;
- Utilização do `@Controller()`;
- Criação de rotas com `@Get()`;
- Utilização do `@Headers()` para acessar informações enviadas no cabeçalho da requisição;
- Utilização do `@Res()` para controlar manualmente a resposta HTTP;
- Definição de headers personalizados na resposta;
- Utilização de códigos de status HTTP;
- Validação de uma chave de API;
- Retorno de respostas diferentes de acordo com a autorização;
- Utilização de `Response` do Express;
- Organização da aplicação através de controllers, services e modules.

## Tecnologias utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **Express**

## Estrutura principal

O projeto possui uma estrutura semelhante a:

```text
aula-12-request-response-advanced/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── seguranca.controller.ts
│   └── main.ts
├── test/
├── package.json
├── package-lock.json
├── nest-cli.json
├── tsconfig.json
└── README.md