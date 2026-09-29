# Aula 11 — API de Upload de Imagens

Nesta aula foi desenvolvido um recurso de **upload de imagens** utilizando **NestJS**, trabalhando com recebimento de arquivos através de uma API, validação, armazenamento e organização dos componentes da aplicação.

## Conteúdos trabalhados

Durante a aula, foram praticados os seguintes conceitos:

- Criação de um endpoint para upload de imagens;
- Utilização de `FileInterceptor` para receber arquivos enviados em requisições HTTP;
- Uso do `@UploadedFile()` para acessar o arquivo recebido;
- Configuração do `diskStorage` do **Multer**;
- Geração de nomes únicos para os arquivos utilizando `uuid`;
- Preservação da extensão original do arquivo;
- Definição de limite para o tamanho do arquivo;
- Validação dos formatos de imagem permitidos;
- Criação e organização de um módulo específico para imagens;
- Utilização de `@Controller()` e `@Post()` no NestJS;
- Configuração do `ImagemModule` dentro do `AppModule`.

## Tecnologias utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **Multer**
- **UUID**
- **Vitest**
- **ESLint/Oxlint**
- **Prettier**

## Estrutura principal

O projeto foi organizado aproximadamente da seguinte forma:

```text
aula-11-api-upload-imagem/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── imagem.controller.ts
│   ├── imagem.module.ts
│   └── main.ts
├── test/
│   └── app.e2e-spec.ts
├── upload/
├── .gitignore
├── .oxlintrc.json
├── .prettierrc
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.build.json
└── README.md