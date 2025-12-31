import { describe, expect, test, vi } from "vitest";
import { commandExplore } from './command_explore.js';
import { initState } from "./state.js";

describe('commandExplore', () => {
  test("prints found pokemon for a location", async () => {
    const state = initState();
    const location = "kanto-area";

    // Mock fetchLocation to return a structure with pokemon_encounters
    const fetchSpy = vi.spyOn(state.PokeAPI, "fetchLocation").mockResolvedValue({
      pokemon_encounters: [
        { pokemon: { name: "pidgey" } },
        { pokemon: { name: "rattata" } },
      ]
    } as any);

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    await commandExplore(state, location);

    expect(logSpy).toHaveBeenCalledWith(`Exploring the ${location}...`);
    expect(logSpy).toHaveBeenCalledWith("Found Pokemon:");
    expect(logSpy).toHaveBeenCalledWith("- pidgey");
    expect(logSpy).toHaveBeenCalledWith("- rattata");

    fetchSpy.mockRestore();
    logSpy.mockRestore();
  });
});
