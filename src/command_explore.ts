import { State } from './state.js';

const commandExplore = async (state: State, ...args: string[]) => {
  const { PokeAPI } = state;
  const location = args[0];
  console.log(`Exploring the ${location}...`);
  let locationsData = await PokeAPI.fetchLocation(location);
  console.log(`Found Pokemon:`);
  for (const locationResult of locationsData.pokemon_encounters) {
    console.log(`- ${locationResult.pokemon.name}`);
  }
};

export { commandExplore };