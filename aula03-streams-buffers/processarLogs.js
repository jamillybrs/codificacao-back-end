import fs from 'fs';
import readline from 'readline'; ///vai gerar um algoritmo de erros registrados

async function filtrarErros() {

    console.log('Iniciando processamento com Stream...');
    exibirConsumoMemoria('Inicío');

    const streamLeitura = fs.createReadStream('servidor.log');
    const streamEscrita = fs.createWriteStream('apenas-erros.log');
    const leitorLinhaALinha = readline.createInterface({input: streamLeitura, crlfDelay: Infinity});


    let totalErros = 0;
    for await(const linha of leitorLinhaALinha){
        if(linha.includes('ERROR')){
            streamEscrita.write(linha + '\n');
            totalErros++;
        }
    }
    exibirConsumoMemoria('Fim');
    console.log(`Processamento concluído!\n`);
    console.log(`Quantidade de Erros Encontrados: ${totalErros} linhas.\n`);
}
filtrarErros();
function exibirConsumoMemoria(consumo){
const memoria = process.memoryUsage();
const rssMB = (memoria.rss / 1024 /1024).toFixed(2);
const heapMB = (memoria.heapUsed /1024 /1024).toFixed(2);
console.log(`[${consumo}] RSS: ${rssMB} MB | Heap Utilizado: `)
}
