import { describe, expect, test, vi } from "vitest";
import { commandPokedex } from './command_pokedex.js';
import { initState } from "./state.js";

describe('commandPokedex', () => {
  test("prints pokedex entries when not empty", async () => {
    const state = initState();
    state.pokedex = {
      pikachu: { name: "pikachu" } as any,
      bulbasaur: { name: "bulbasaur" } as any,
    };

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    await commandPokedex(state);

    expect(logSpy).toHaveBeenCalledWith("Your Pokedex:");
    expect(logSpy).toHaveBeenCalledWith("- pikachu");
    expect(logSpy).toHaveBeenCalledWith("- bulbasaur");

    logSpy.mockRestore();
  });

  test("prints empty message when pokedex is empty", async () => {
    const state = initState();
    state.pokedex = {};

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    await commandPokedex(state);

    expect(logSpy).toHaveBeenCalledWith("Your Pokedex:");
    expect(logSpy).toHaveBeenCalledWith("You haven't caught any Pokemon yet.");

    logSpy.mockRestore();
  });
});


