import { describe, test, expect, vi } from 'vitest';
import { initState, State } from './state.js';
import { commandMap, commandMapBack } from './command_map.js';

describe("commandMap", () => {
  test("should print help message to stdout", () => {
    const state = initState();
    const commands = state.commands;

    // Spy on console.log
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => { });

    commandMap(state);

    // Check that console.log was called
    expect(logSpy).toHaveBeenCalled();

    // Get what was logged
    const output = logSpy.mock.calls;

    // Assert on the output
    console.log(output);
    // Cleanup
    logSpy.mockRestore();
  });
});

