Aula 10 – Rotas Dinâmicas com NestJS

Nesta aula, desenvolvi uma aplicação utilizando NestJS com o objetivo de trabalhar com rotas dinâmicas, organização de serviços e tratamento de parâmetros recebidos pela URL.

Durante a atividade, criei uma estrutura para consulta de jogos utilizando Controller e Service, aplicando conceitos importantes de uma API REST.

O que foi desenvolvido
Criação do AppController e AppService para trabalhar com uma rota inicial de status.
Criação do JogosController responsável pelas rotas relacionadas aos jogos.
Criação do JogosService para armazenar e consultar uma lista de jogos.
Implementação de uma rota dinâmica utilizando @Get(':id').
Utilização do @Param() para receber o ID enviado pela URL.
Utilização do ParseIntPipe para converter o parâmetro recebido de string para number.
Implementação da busca de um jogo pelo seu ID através do método buscarPorId().
Utilização de NotFoundException para retornar um erro quando o jogo solicitado não existe.
Organização dos controllers e services no AppModule.
Prática da injeção de dependência no NestJS através dos construtores.
Estrutura criada
src/
├── app.controller.ts
├── app.service.ts
├── app.module.ts
├── jogos.controller.ts
├── jogos.service.ts
└── main.ts
Rota dinâmica

A principal funcionalidade desenvolvida foi a rota:

GET /jogos/:id

Por exemplo:

GET /jogos/1

O JogosController recebe o ID através do parâmetro da URL e encaminha a consulta para o JogosService.

@Get(':id')
buscarPorID(@Param('id', ParseIntPipe) id: number) {
  return this.jogosService.buscarPorId(id);
}

No serviço, a busca é realizada utilizando o find():

buscarPorId(id: number) {
  const jogo = this.jogos.find((j) => j.id === id);

  if (!jogo) {
    throw new NotFoundException(
      `Jogo com ID ${id} não localizado em nosso estoque.`
    );
  }

  return jogo;
}
Jogos cadastrados

Para realizar os testes, foi criada uma lista de jogos contendo informações como ID, título e estúdio, incluindo jogos como Minecraft, The Legend of Zelda: Ocarina of Time, Grand Theft Auto V, Elden Ring e God of War.

Conceitos aprendidos

Nesta aula, pratiquei principalmente:

Rotas dinâmicas
Parâmetros de rota
Controllers
Services
Injeção de dependência
ParseIntPipe
NotFoundException
Busca de dados com find()
Organização de módulos no NestJS
Construção de endpoints para APIs REST.