import { State } from './state.js';

const cleanInput = (input: string): string[] => {
  return input
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.replace(/[^\w]/g, ''));
};

const startREPL = (state: State): void => {
  const { rl, commands } = state;

  rl.prompt();
  rl.on('line', async (line: string) => {
    const command: string = cleanInput(line)[0];
    if (commands[command]) {
      try {
        await commands[command].callback(state);
      } catch (error) {
        console.error(`Error executing command ${command}:`, error);
      }
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

// TODO remove cleanInput export when no longer needed elsewhere
export { cleanInput, startREPL };