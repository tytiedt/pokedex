import { State } from './state.js';

const commandCatch = async (state: State, ...args: string[]) => {
  const pokeapi = state.PokeAPI;
  const pokemon = args[0];
  console.log(`Throwing a Pokeball at ${pokemon}...`);
  let pokemonData = await pokeapi.fetchPokemon(pokemon);
  if (pokemonData) {
    let baseExperience = pokemonData.base_experience;
    let chance = Math.min(90, 30 + baseExperience / 10);
    let roll = Math.random() * 100;
    if (roll <= chance) {
      state.pokedex[pokemon] = pokemonData;
      console.log(`${pokemon} was caught!`);
    } else {
      console.log(`${pokemon} escaped!`);
    }
  }

};

export { commandCatch };