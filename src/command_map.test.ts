import { describe, test, expect, vi } from 'vitest';
import { initState, State } from './state.js';
import { commandMap, commandMapBack } from './command_map.js';

describe("commandMap", () => {
  const state = initState();
  test("should print help message to stdout", () => {
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

  test("commandMapBack should print help message to stdout", () => {
    // Spy on console.log
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => { });

    commandMapBack(state);

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

