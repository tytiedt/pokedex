import { createInterface, type Interface } from "readline";
import { getCommands } from './command.js';
import { PokeAPI } from "./pokeapi.js";

type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;  //callback: (commands: Record<string, CLICommand>) => void;
};

type State = {
  commands: Record<string, CLICommand>;
  rl: Interface;
  PokeAPI: PokeAPI; // TODO: specify type
  nextLocationsURL?: string | null;
  prevLocationsURL?: string | null;
};

const initState = (): State => ({
  commands: getCommands(),
  rl: createInterface({
    input: process.stdin, 
    output: process.stdout,
    prompt: 'Pokedex > '
  }),
  PokeAPI: new PokeAPI(),
});

export { CLICommand, State, initState };