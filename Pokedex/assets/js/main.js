

/* fetch indica que será utilizado processamento assíncrono, onde
 é enviada a requisição e aguardo resposta (promise) 

exemplo:

fetch(url).then(function (response) {
    console.log(response)

})

const x = 10 + 10;
console.log(x);

*/

const offset = 0;
const limit = 10;
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}';

fetch(url).then(function (response) {
    console.log(response)

})

const x = 10 + 10;
console.log(x);