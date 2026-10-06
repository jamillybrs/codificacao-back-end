# Aula 13 — Middlewares e Interceptors no NestJS

## Sobre a aula

Nesta aula foram estudados **Middlewares** e **Interceptors** no NestJS, entendendo como esses recursos podem ser utilizados durante o processamento das requisições HTTP.

O projeto possui rotas públicas e administrativas para demonstrar o funcionamento desses recursos.

---

## Objetivos

- Entender o funcionamento de Middlewares no NestJS;
- Criar Middlewares personalizados;
- Interceptar requisições antes que elas cheguem aos Controllers;
- Trabalhar com Interceptors;
- Manipular ou padronizar respostas da aplicação;
- Entender o fluxo de uma requisição dentro do NestJS.

---

## Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- npm

---

## Estrutura principal

```text
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
└── ...