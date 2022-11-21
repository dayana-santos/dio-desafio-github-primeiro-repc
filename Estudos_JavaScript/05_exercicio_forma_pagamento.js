/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida
e efetuar o cálculo adequado.

Código Condição de Pagamento:
1- À vista Débito, recebe 10% desconto;
2- À vista no Dinheiro ou Pix, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta, sem juros;
4- Acima de duas vezes, preço normal de etiqueta, mais juros de 10%;

*/

const preco = 12;
const precoDebito = preco * 0.9;
const precoDinheiroPix = preco * 0.85;
const preco2x = preco;
const preco2xOuMais = preco * 1.1;

const formaPagamento = 1;
console.log('A forma de pagamento escolhida é ' + formaPagamento)

if (formaPagamento === 1) {
    console.log('O valor da compra no Débito ficou R$ ' + precoDebito.toFixed(2))
} else if (formaPagamento === 2) {
    console.log('O valor da compra em Dinheiro ou Pix ficou R$ ' + precoDinheiroPix.toFixed(2))
} else if (formaPagamento === 3) {
    console.log('O valor da compra em 2x ficou R$ ' + preco2x.toFixed(2))
} else if (formaPagamento === 4) {
    console.log('O valor da compra em mais de 2x ficou R$ ' + preco2xOuMais.toFixed(2))
} else {
    console.log('Forma de Pagamento não identificada, digite novamente')
}
