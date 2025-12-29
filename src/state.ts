import { createInterface, type Interface } from "readline";
import { getCommands } from './command.js';
import { PokeAPI, Pokemon } from "./pokeapi.js";

type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

type State = {
  commands: Record<string, CLICommand>;
  rl: Interface;
  PokeAPI: PokeAPI;
  nextLocationsURL?: string | null;
  prevLocationsURL?: string | null;
  pokedex: Record<string, Pokemon>;
};

const initState = (): State => ({
  commands: getCommands(),
  rl: createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > '
  }),
  PokeAPI: new PokeAPI(),
  pokedex: {},
});

export { CLICommand, State, initState };