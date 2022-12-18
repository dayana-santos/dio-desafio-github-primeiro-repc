// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = -16;

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

function findNumber (n) {
    var position = elementos.indexOf(n);
    if (position === -1) {
        return `Numero ${n} nao encontrado!`
    } else {
        return `Achei ${n} na posicao ${position}`
    }
}

console.log(findNumber(valor))
