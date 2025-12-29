import { State } from './state.js';

const commandPokedex = async (state: State) => {
  const { pokedex } = state;
  console.log("Your Pokedex:");
  if (Object.keys(pokedex).length === 0) {
    console.log("You haven't caught any Pokemon yet.");
    return;
  }
  Object.keys(pokedex).forEach(name => console.log(`- ${name}`));
};

export { commandPokedex };