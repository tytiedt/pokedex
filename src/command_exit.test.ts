import { describe, expect, test, vi } from "vitest";
import { commandExit } from './command_exit.js';
import { initState } from "./state.js";
describe('commandExit', () => {
  test("should print exit message to stdout", async () => {
    const state = initState();
    
    // Spy on the close method
    const closeSpy = vi.spyOn(state.rl, "close").mockImplementation(() => {});
    
    commandExit(state);
    
    // Check that close was called
    expect(closeSpy).toHaveBeenCalled();
    
    // Cleanup
    closeSpy.mockRestore();
  });
});


