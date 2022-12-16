

/* 
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


---------------------

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

---------------------------
encadeamento de .then para simplificar a leitura de código
sempre o que fica no 2º .then é o retorno do 1º
*/

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                   ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

/* lista de pokemons convertida em html*/

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
    })





