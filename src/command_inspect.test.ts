import { describe, expect, test, vi } from "vitest";
import { commandInspect } from './command_inspect.js';
import { initState } from "./state.js";

describe('commandInspect', () => {
  test("inspects a pokemon in the pokedex", async () => {
    const state = initState();
    state.pokedex = {
      bulbasaur: { name: "bulbasaur", height: 7, weight: 69, stats: [{ stat: { name: "hp" }, base_stat: 45 }, { stat: { name: "attack" }, base_stat: 49 }, { stat: { name: "defense" }, base_stat: 49 }, { stat: { name: "special-attack" }, base_stat: 65 }, { stat: { name: "special-defense" }, base_stat: 65 }, { stat: { name: "speed" }, base_stat: 45 }], types: [{ type: { name: "grass" } }, { type: { name: "poison" } }] } as any,
    };

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    await commandInspect(state, "bulbasaur");

    expect(logSpy).toHaveBeenCalledWith("Inspecting bulbasaur:");
    expect(logSpy).toHaveBeenCalledWith("- Name: bulbasaur");
    expect(logSpy).toHaveBeenCalledWith("- Height: 7");
    expect(logSpy).toHaveBeenCalledWith("- Weight: 69");
    expect(logSpy).toHaveBeenCalledWith("- Stats:");
    expect(logSpy).toHaveBeenCalledWith("  - hp: 45");
    expect(logSpy).toHaveBeenCalledWith("  - attack: 49");
    expect(logSpy).toHaveBeenCalledWith("  - defense: 49");
    expect(logSpy).toHaveBeenCalledWith("  - special-attack: 65");
    expect(logSpy).toHaveBeenCalledWith("  - special-defense: 65");
    expect(logSpy).toHaveBeenCalledWith("  - speed: 45");
    expect(logSpy).toHaveBeenCalledWith("- Types:\n  - grass\n  - poison");
    logSpy.mockRestore();
  });

  test("prints empty message when pokedex is empty", async () => {
    const state = initState();
    state.pokedex = {};

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    await commandInspect(state, "pikachu");

    expect(logSpy).toHaveBeenCalledWith("Pokemon not found in your pokedex.");

    logSpy.mockRestore();
  });
});


