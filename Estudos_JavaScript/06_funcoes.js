/*
function 'para chamar a função'
return 'retorna o resultado da função'
main 'é a função do programa principal'

Sequência:
1º declarar a function
2º chamar a function

*/

function sayMyName(nome) {
    console.log ('Meu nome é ' + nome);
}

sayMyName('Dayana');
sayMyName('Eduardo');


function souMaiorDeIdade(idade) {
    if (idade >= 18) {
        console.log('Sou maior de idade ')
    } else {
        console.log('Sou menor de idade ')
    }
}

souMaiorDeIdade(16);
