# Aula 03 - Streams e Buffers no Node.js

Nesta aula foram estudados os conceitos de **Streams** e **Buffers** no Node.js, com foco no processamento eficiente de arquivos e logs.

## Conteúdos estudados

- Conceito de **Buffers** no Node.js;
- Utilização de **Streams** para leitura e escrita de arquivos;
- `fs.createReadStream()` para leitura de arquivos em fluxo;
- `fs.createWriteStream()` para gravação de dados;
- Utilização do módulo `readline` para processar arquivos linha por linha;
- Processamento assíncrono com `async/await`;
- Monitoramento do consumo de memória da aplicação;
- Processamento e filtragem de arquivos de log.

## Atividade prática

Foi desenvolvido um programa para processar o arquivo `servidor.log` utilizando Streams.

O programa:

1. Cria um Stream de leitura do arquivo `servidor.log`;
2. Cria um Stream de escrita para o arquivo `apenas-erros.log`;
3. Utiliza o `readline` para percorrer o arquivo linha por linha;
4. Identifica as linhas que contêm a palavra `ERROR`;
5. Salva os erros encontrados em um novo arquivo;
6. Conta a quantidade total de erros encontrados;
7. Exibe no console informações sobre o consumo de memória durante o processamento.

### Exemplo de processamento

```js
const streamLeitura = fs.createReadStream('servidor.log');

const streamEscrita = fs.createWriteStream('apenas-erros.log');

const leitorLinhaAlinha = readline.createInterface({
    input: streamLeitura,
    crlfDelay: Infinity
});

let totalErros = 0;

for await (const linha of leitorLinhaAlinha) {
    if (linha.includes('ERROR')) {
        streamEscrita.write(linha + '\n');
        totalErros++;
    }
}