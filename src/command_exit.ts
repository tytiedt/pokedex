import { State } from './state.js';

const commandExit = async (state: State) => {
  const { rl } = state;
  rl.close();
};

export { commandExit };