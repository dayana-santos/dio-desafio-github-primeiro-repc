

/* 
Condicionais Simples: Para expressar verdadeiro ou falso 

Alguns operadores:
> 'maior que'
< 'menor que'
>= 'maior/igual que'
<= 'menor igual que'
% 'resto da divisão'
= 'atribuição'
=== 'igualdade'

*/

const numero = 3;

const isNumeroPar = (numero % 2) === 0;

/*

afirmação

if (numeroPar) {
    console.log('É um número par');
}

negação

if (!numeroPar) {
    console.log('É um número Ímpar');
}

se ou senão*/

if (numero === 0) {
    console.log('O número é inválido');
} else if (isNumeroPar) {
    console.log('É um número par');
} else { 
    console.log('É um número Ímpar');
}






