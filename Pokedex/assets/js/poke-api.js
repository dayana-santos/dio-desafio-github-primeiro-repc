
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


/*conversão do modelo da pokeAPI para modelo próprio 'pokemon-model'*/
function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon) 
}

pokeApi.getPokemons = function(offset = 0, limit = 5) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    /*busca a lista de pokemons*/
    return fetch(url)
        /*converte a lista para json*/
        .then((response) => response.json())
        /*pega os resultados da lista em json*/
        .then((jsonBody) => jsonBody.results)
        /*transforma em uma nova lista, com promises de detalhes dos pokemons*/
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        /*lista de requisições*/
        .then((detailRequests) => Promise.all(detailRequests))
        /* imprimir a lista*/
        .then((pokemonsDetails) => pokemonsDetails)
}

