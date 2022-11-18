/*

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio do combustível do carro por km;
5 - Distância em km da viagem;

Imprima no console o valor que será gasto para realizar essa viagem.

*/

const precoEtanol = 2.56;
const precoGasolina = 5.32;
const tipoCombustivel = 'etanol';
const kmPorLitroEtanol = 10;
const kmPorLitroGasolina = 12;
const distanciaKm = 180;

if (tipoCombustivel === 'gasolina') {
    const qtdeLitros = distanciaKm / kmPorLitroGasolina;
    const valorViagem = qtdeLitros * precoGasolina;
    console.log('O valor da viagem em gasolina é ' + valorViagem.toFixed(2));
} else {
    const qtdeLitros = distanciaKm / kmPorLitroEtanol;
    const valorViagem = qtdeLitros * precoEtanol;
    console.log('O valor da viagem em etanol é ' + valorViagem.toFixed(2));
}



