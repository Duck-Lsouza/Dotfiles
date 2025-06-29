// Solicita o nome e a nota do candidato
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do candidato: ', (nome) => {
    rl.question('Digite a nota do candidato: ', (nota) => {
        nota = parseFloat(nota);

        if (nota < 7) {
            console.log(`${nome} foi reprovado com nota ${nota}.`);
        } else {
            console.log(`${nome} foi aprovado com nota ${nota}.`);
        }

        rl.close();
    });
});