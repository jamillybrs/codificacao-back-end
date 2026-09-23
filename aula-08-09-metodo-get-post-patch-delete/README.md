## Atualização — Métodos de manipulação de convidados

Nesta etapa da Aula 09, o projeto foi evoluído com a implementação de novas funcionalidades no `ConvidadosService`, permitindo realizar operações de consulta, atualização e remoção de convidados.

### Funcionalidades implementadas

Foram adicionados os seguintes métodos:

- **`listarConvidados()`**: retorna a lista de convidados cadastrados.
- **`encontrarConvidado(id)`**: busca um convidado pelo seu ID.
- **`atualizarIdade(id, idade)`**: localiza um convidado e atualiza sua idade.
- **`removerConvidadoLista(id)`**: localiza o convidado pelo ID e remove seu registro da lista.

### Tratamento de erros

Foi utilizado o `NotFoundException` do NestJS para tratar situações em que um convidado não é encontrado.

Quando o ID informado não existe, a aplicação retorna uma exceção informando que o convidado não foi encontrado:

```typescript
throw new NotFoundException(
  `[ADMINISTRADOR] Convidado com ID ${id} não encontrado!`
);