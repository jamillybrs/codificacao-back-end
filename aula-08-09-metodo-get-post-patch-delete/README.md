# Aulas 08 e 09 — API com NestJS

## Introdução

Nas Aulas 08 e 09 foi desenvolvido e aprimorado um projeto de API utilizando o **NestJS**, framework baseado em Node.js e desenvolvido com TypeScript.

O objetivo dessas aulas foi compreender, na prática, como funciona a estrutura de uma aplicação backend, desde a criação do projeto até a implementação de rotas responsáveis por realizar operações de consulta, criação, atualização e exclusão de dados.

Durante o desenvolvimento, foram trabalhados conceitos importantes da arquitetura do NestJS, como **Controllers, Services, Modules, DTOs, injeção de dependências, métodos HTTP e tratamento de exceções**.

O projeto desenvolvido utiliza uma lista de convidados armazenada em memória para simular o funcionamento de uma aplicação que futuramente poderia estar conectada a um banco de dados.

---

# Aula 08 — Métodos HTTP e estrutura da API

Na Aula 08 foi iniciada a implementação da API utilizando o NestJS.

O foco principal foi compreender como uma aplicação backend recebe requisições HTTP e como os Controllers e Services trabalham em conjunto para processar essas requisições.

## Estrutura da aplicação

O projeto foi organizado utilizando a estrutura padrão do NestJS:

```text
src/
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── convidados.controller.ts
├── convidados.service.ts
├── criar-convidado.dto.ts
└── main.ts
