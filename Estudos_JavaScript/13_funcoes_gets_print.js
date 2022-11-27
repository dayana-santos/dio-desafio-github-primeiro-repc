/*
Importação de arquvo

no arquivo que tenha as funções de onde deseja importar,
utilizar module.exports = {gets, print};

no arquivo que vai receber:
const funcoes = require('nome do arquivo');
console.log(funcoes);

*/

function gets () {
    return 10;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };

