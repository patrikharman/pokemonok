import Pokemon from "./Pokemon.js";

const pokemon = new Pokemon("Ditto","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",$(".pokemonok"))

const pokemon2 = new Pokemon("Lucario","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png",$(".pokemonok"))

const pokemon3 = new Pokemon("Snorlax","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png",$(".pokemonok"))

const pokemon4 = new Pokemon("Pikachu","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",$(".pokemonok"))

pokemon.beszel()

console.log(pokemon.nev)
console.log(pokemon.mondat)
pokemon.harciero=2
delete pokemon.nev
console.log(pokemon)
//privát addattagok elérése getterrel
//ehhez csak getter van nem tudom átírni
//pokemon.nev="Roland"
pokemon.mondat="Szép napunk van"
pokemon.beszel()