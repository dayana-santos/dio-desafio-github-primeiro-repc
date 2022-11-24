/*

Listas: Arrays

listas são representadas por colchetes []
['nome1', 'nome2', 'nome3']

    -para chamar o primeiro da lista: [0]

    -para adicionar +1 item na lista: alunos.push() ou
    alunos[4] = 'Vinícius'

    -para remover o último item da lista: alunos.pop()

    -para remover o primeiro item da lista: alunos.shift()

    -para ver o tamanho da lista: notas.length()


*/

const alunos = ['João', 'Victor', 'Paçoca'];

console.log(alunos[0]);

/*

--------------Estruturas de Repetição

for (let index = 0; index < array.length; index++) {
}

onde 

1 parte Declaração de Variável:

i 'index' que é a variável de controle = 'número inicial da lista, geralmente é 0'

2 parte Repetição:
i < 10;

3 parte Iteração:

i++ considera i = i + 1; soma um ao i

--------------------

const nome = 'Dayana Santos';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}

/*---------------------------
média de notas de uma lista

*/

const notas = [];

notas.push(8);
notas.push(5.5);
notas.push(7);
notas.push(9.5);
notas.push(6);
notas.push(5.5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma/ notas.length;
console.log(media.toFixed(2));