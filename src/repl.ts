import * as readline from 'readline';
import { getCommands } from './command.js';

const cleanInput = (input: string): string[] => {
  return input
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.replace(/[^\w]/g, ''));
};

const startREPL = (): void => {

  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > '
  });

  rl.prompt();

  rl.on('line', (line: string) => {
    const command: string = cleanInput(line)[0];
    const commands = getCommands();
    if (commands[command]) {
      commands[command].callback(commands);
    } else {
      console.log(`Unknown command: ${command}`);
    }
    rl.prompt();
  });

  rl.on('close', () => {
    console.log('Closing the Pokedex... Goodbye!');
    process.exit(0);
  });
};

export { cleanInput, startREPL };