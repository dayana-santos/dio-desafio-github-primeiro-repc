
/* objeto para chamar a poke-api
vai retornar toda a manipulação do fetch
-----------------------------------------------------

Para iniciar o servidor local: http-server ./

fetch indica que será utilizado processamento assíncrono, onde
 é enviada a requisição e aguardo resposta (promise) 

exemplo de Promise:

fetch(url).then(function (response) {
    console.log(response)

})

const x = 10 + 10;
console.log(x);

.then 'quando conseguir acesso a url, fazer tal coisa'
.catch 'quando der erro no .then, fazer tal coisa'
.finally 'independente de erro/sucesso, apresentar finally'

*********por padrão. o fetch é uma requisição do tipo GET ************

=> (lê-se arrow function), é uma sintaxe reduzida, pra simplificar o
código


*/

const pokeApi = {}

pokeApi.getPokemons = function(offset = 0, limit = 10) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}

/*faz a requisição para cada pokemon*/

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4'),
    fetch('https://pokeapi.co/api/v2/pokemon/5'),
]) .then((results) => {
    console.log(results)
})