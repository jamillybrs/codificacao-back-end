# Aula 7 - Projeto NestJS

Nesta aula foi desenvolvido um projeto utilizando o **NestJS**, framework para construção de aplicações backend utilizando **Node.js** e **TypeScript**.

O objetivo foi compreender a estrutura inicial de uma aplicação NestJS e conhecer a organização dos principais arquivos e componentes utilizados no desenvolvimento backend.

## Conteúdos estudados

Durante a aula foram trabalhados os seguintes conceitos:

- Criação de uma aplicação com NestJS;
- Estrutura de um projeto NestJS;
- Organização de módulos;
- Controllers;
- Services;
- Injeção de dependências;
- Configuração do TypeScript;
- Configuração do Nest CLI;
- Inicialização da aplicação;
- Testes unitários;
- Testes End-to-End (E2E);
- Organização e padronização do código;
- Gerenciamento de dependências com npm.

## Estrutura do projeto

A estrutura principal desenvolvida durante a aula contém:

```text
aula-07-projeto-nestjs/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│
├── test/
│   └── testes E2E
│
├── .gitignore
├── .oxlintrc.json
├── .prettierrc
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.build.json
└── tsconfig.json