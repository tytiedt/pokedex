import { describe, expect, test } from "vitest";
import { commandExit } from './command_exit.js';

describe('commandExit', () => {
  test('should throw error with', () => {
    expect(() => commandExit()).toThrow("process.exit unexpectedly called with \"0\"");
  });
});


