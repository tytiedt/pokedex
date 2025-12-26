import { State } from './state.js';

const commandHelp = async (state: State) => {
  console.log(`Welcome to the Pokedex!`);
  console.log(`Usage:\n`);
  for (const [name, command] of Object.entries(state.commands)) {
    console.log(`${name}: ${command.description}`);
  }
};

export { commandHelp };