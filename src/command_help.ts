import { CLICommand } from "./command.js";

const commandHelp = (commands: Record<string, CLICommand>) => {
  console.log(`Welcome to the Pokedex!`);
  console.log(`Usage:\n`);
  for (const [name, command] of Object.entries(commands)) {
    console.log(`${name}: ${command.description}`);
  }
};

export { commandHelp };