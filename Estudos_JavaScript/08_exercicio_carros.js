/*

Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de km e preço do combustível nos dê o valor gasto em reais para realizar este percurso.

*/

class carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    descrever() {
        console.log(`Um carro ${this.marca} ${this.cor} gasta ${this.gastoMedioPorKm} de combustível por km`);
    }
}


function custoPercurso (carro, percursoEmKm, precoCombustivel) {
    console.log(`Para um carro ${carro.marca} ${carro.cor}, o percurso custa R$ ${([percursoEmKm / carro.gastoMedioPorKm] * precoCombustivel).toFixed(2)}`);
}

const gol = new carro('Volkswagen Gol', 'branco', 12);
const clio = new carro('Renault Clio', 'preto', 9);

custoPercurso(gol, 800, 5.79);
custoPercurso(clio, 860, 5.79);