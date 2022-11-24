/* -----------------------Objetos

relação dinâmica de chaves '{}' + valor

*/ 
const pessoa = {
    nome: 'Dayana dos Santos',
    idade: 26,
    altura: 1.63,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();


/* ------------------------Classes

Classe é a definição (o que é uma Pessoa?) e Instância é a ocorrência (As características da Pessoa)

*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const day = new Pessoa('Day', 26);
const pacoca = new Pessoa('Paçoca', 1);

console.log(day,pacoca);

function compararPessoas (p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const harry = new Pessoa('Harry Potter', 42);
const hermione = new Pessoa('Hermione Granger',40);

compararPessoas(harry, hermione);
