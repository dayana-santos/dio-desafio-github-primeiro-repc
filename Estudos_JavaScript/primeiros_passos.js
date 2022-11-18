/*

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:
1 - Preço do combustível;
2 - Gasto médio do cmbustível do carro por km;
3 - Distância em km da viagem;

Imprima no console o valor que será gasto para realizar essa viagem.

*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaKm = 1800;

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));







