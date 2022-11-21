/* 

O IMC (Indice de Massa Corporal) é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

IMC em adultos Condições:
-Abaixo de 18.5: Abaixo do peso
-Entre 18.5 e 25: peso normal
-Entre 25 e 30: Acima do peso
-Entre 30 e 40: Obeso
-Acima de 40: Obesidade Grave 

*/

const pesoKG = 79.5;
const alturaM = 1.77;

const imc = pesoKG / Math.pow(alturaM, 2);
console.log('Resultado do IMC ' + imc.toFixed(2));

if (imc < 18.5) {
    console.log('Está abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Está em peso normal');
} else if (imc >=25 && imc < 30) {
    console.log('Está acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Está obeso');
} else {
    console.log('Está em obesidade grave')
};