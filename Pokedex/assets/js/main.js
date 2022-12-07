

/* 
Para iniciar o servidor local: http-server ./

fetch indica que será utilizado processamento assíncrono, onde
 é enviada a requisição e aguardo resposta (promise) 

exemplo:

fetch(url).then(function (response) {
    console.log(response)

})

const x = 10 + 10;
console.log(x);

.then 'quando conseguir acesso a url, fazer tal coisa'
.catch 'quando der erro no .then, fazer tal coisa'
.finally 'independente de erro/sucesso, apresentar finally'

*********por padrão. o fetch é uma requisição do tipo GET ************

*/

const offset = 0;
const limit = 10;
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}';

fetch(url)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.error(error)
    })
    .finally(function () {
        console.log('Requisição concluída!')
    })

