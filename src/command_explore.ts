import { State } from './state.js';

const commandExplore = async (state: State, ...args: string[]) => {
  const pokeapi = state.PokeAPI;
  const location = args[0];
  console.log(`Exploring the ${location}...`);
  let locationsData = await pokeapi.fetchLocation(location);
  console.log(`Found Pokemon:`);
  for (const locationResult of locationsData.pokemon_encounters) {
    console.log(`- ${locationResult.pokemon.name}`);
  }
};

export { commandExplore };