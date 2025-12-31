import { State } from './state.js';

const commandMap = async (state: State) => {
  const pokeapi = state.PokeAPI;
  const { nextLocationsURL, prevLocationsURL } = state
  console.log(`List of map locations:`);
  !nextLocationsURL && console.log(`* you're on the first page *`);
  let locationsData = await pokeapi.fetchLocations(nextLocationsURL ?? undefined);
  state.nextLocationsURL = locationsData.next;
  state.prevLocationsURL = locationsData.previous;
  for (const locationResult of locationsData.results) {
    console.log(`- ${locationResult.name}`);
  }
};

const commandMapBack = async (state: State) => {
  const pokeapi = state.PokeAPI;
  const { prevLocationsURL } = state
  console.log(`Going back on the map:`);
  (!prevLocationsURL || prevLocationsURL.includes("offset=0")) && console.log(`* you're on the first page *`);
  let locationsData = await pokeapi.fetchLocations(prevLocationsURL ?? undefined);
  state.nextLocationsURL = locationsData.next;
  state.prevLocationsURL = locationsData.previous;
  for (const locationResult of locationsData.results) {
    console.log(`- ${locationResult.name}`);
  }
}

export { commandMap, commandMapBack };