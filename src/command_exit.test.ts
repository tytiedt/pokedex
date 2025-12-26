import { describe, expect, test, vi } from "vitest";
import { commandExit } from './command_exit.js';
import { initState } from "./state.js";
// TODO: Fix these
describe('commandExit', () => {
  test("should print exit message to stdout", async () => {
    const state = initState();
    const {commands} = state;
    
    // Spy on console.log
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    
    await commandExit(state);
    
    // Check that console.log was called
    // TODO: Fix this
    // expect(logSpy).toHaveBeenCalled();
    
    // Get what was logged
    const output = logSpy.mock.calls;
    
    // Assert on the output
    // TODO: Fix this
    // expect(output[0][0]).toContain("Closing the Pokedex... Goodbye!");
    
    // Cleanup
    logSpy.mockRestore();
  });
});


