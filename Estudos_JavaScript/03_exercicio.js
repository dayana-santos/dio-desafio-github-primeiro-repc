/*

Faça um algoritmo que dados as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
-Média menor que 5, reprovação;
-Média entre 5 e 7, recuperação;
-Média acima de 7, passou de semestre;

*/

const nota1 = 7.0;
const nota2 = 5.0;
const nota3 = 8.9;

const mediaNotas = (nota1 + nota2 + nota3) / 3;
console.log('A média do aluno é ' + mediaNotas.toFixed(2));

if (mediaNotas < 5) {
    console.log('Reprovação');
} else if (mediaNotas >= 5  && mediaNotas < 7) {
    console.log('Em recuperação');
} else {
    console.log('Aprovado!');
}