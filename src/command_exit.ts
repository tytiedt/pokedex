import { State } from './state.js';

const commandExit = async (state: State) => {
  const { rl, PokeAPI } = state;
  PokeAPI.cache.stopReapLoop();
  rl.close();
};

export { commandExit };