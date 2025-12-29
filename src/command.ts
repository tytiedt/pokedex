import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { CLICommand } from "./state.js";

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
      description: "Explores the map\n Usage: explore <location>",
      callback: commandExplore,
    },
  };
}

export { getCommands };