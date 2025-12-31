import { describe, expect, test, vi } from "vitest";
import { commandCatch } from './command_catch.js';
import { initState } from "./state.js";

describe('commandCatch', () => {
  test("should catch", async () => {
    const state = initState();
    const pokemonName = "pikachu";

    // Ensure pokedex is initially empty
    expect(state.pokedex).not.toHaveProperty(pokemonName);

    // Mock fetchPokemon to return a Pokemon with sufficient base_experience
    const fetchSpy = vi.spyOn(state.PokeAPI, "fetchPokemon").mockResolvedValue({
      name: pokemonName,
      base_experience: 100,
    } as any);

    // Mock Math.random so the catch always succeeds
    const mathSpy = vi.spyOn(Math, "random").mockReturnValue(0);

    // Execute the commandCatch function and await it
    await commandCatch(state, pokemonName);

    // Check that the Pokemon was added to the pokedex
    expect(state.pokedex).toHaveProperty(pokemonName);
    expect(state.pokedex[pokemonName].name).toBe(pokemonName);

    // Cleanup
    fetchSpy.mockRestore();
    mathSpy.mockRestore();
  });
});


