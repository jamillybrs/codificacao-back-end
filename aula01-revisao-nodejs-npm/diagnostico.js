//! importando o módulo os
const os = require ('os');

const plataforma = os.platform();
const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2);
const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2);
const processador = os.cpus();

console.log('=== DIAGNÓSTICO DO SERVIDOR ===');
console.log(`Arquitetura OS: ${plataforma}`);
console.log(`Mémoria RAM Total: ${memoriaTotal} GB`);
console.log(`Mémoria RAM Livre: ${memoriaLivre} GB`);
console.log(`Cores do processador: ${processador.length} GB`);
console.log(`Processador: ${processador[0].model}`);
console.log(`Velocidade do Processador:${processador[0].speed} Mhz`);
