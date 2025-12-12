import { describe, expect, test, vi } from "vitest";
import { commandHelp } from "./command_help.js";
import { getCommands } from "./command.js";

describe("commandHelp", () => {
  test("should print help message to stdout", () => {
    const commands = getCommands();
    
    // Spy on console.log
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    
    commandHelp(commands);
    
    // Check that console.log was called
    expect(logSpy).toHaveBeenCalled();
    
    // Get what was logged
    const output = logSpy.mock.calls;
    
    // Assert on the output
    expect(output[0][0]).toContain("Welcome to the Pokedex!");
    let idx = 2;
    for (const command of Object.values(commands)) {
      expect(output[idx][0]).toContain(`${command.name}: ${command.description}`);
      idx += 1;
    }
    
    // Cleanup
    logSpy.mockRestore();
  });
});
