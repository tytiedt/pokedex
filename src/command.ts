import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
import { CLICommand } from "./state.js";
import { inspect } from "node:util";

const getCommands = (): Record<string, CLICommand> => {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays this help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays a page of the map",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the previous page of the map",
      callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Explores the map\n\tUsage: explore <location>",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catches a Pokemon\n\tUsage: catch <pokemon>",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspects a Pokemon in your pokedex\n\tUsage: inspect <pokemon>",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Displays your pokedex",
      callback: commandPokedex,
    },
  };
}

export { getCommands };