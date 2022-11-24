/*

Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/ (altura*altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura.
Peça ao Jose para dizer o valor do seu IMC;

*/

class pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC () {
        this.imc = this.peso / Math.pow(this.altura, 2);

        return 'Eu sou ' + (this.nome) + ' e meu IMC é ' + (this.imc.toFixed(2));
    }

    classificarIMC () {
        if (this.imc < 18.5) {
            console.log('estou abaixo do peso');
        } else if (this.imc >= 18.5 && this.imc < 25) {
            console.log('estou em peso normal');
        } else if (this.imc >=25 && this.imc < 30) {
            console.log('estou acima do peso');
        } else if (this.imc >= 30 && this.imc < 40) {
            console.log('estou obeso');
        } else {
            console.log('estou em obesidade grave');
        }
    }
}

jose = new pessoa('José', 70, 1.75);
pacoca = new pessoa('Paçoca', 45, 1.50);

console.log(jose.calcularIMC());
jose.classificarIMC();

console.log(pacoca.calcularIMC());
pacoca.classificarIMC();