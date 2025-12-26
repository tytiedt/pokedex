import { describe, it, expect, beforeEach } from "vitest";
import { PokeAPI } from "./pokeapi";

describe("PokeAPI", () => {
  let pokeAPI: PokeAPI;

  beforeEach(() => {
    pokeAPI = new PokeAPI();
  });

  it("should fetch location", async () => {
    const locationName = "canalave-city-area";
    const location = await pokeAPI.fetchLocation(`${locationName}`);
    // console.log(`Fetched location: ${JSON.stringify(location, null, 2)}`);
    expect(location).toBeDefined();
    expect(location.name).toEqual(`${locationName}`);
  });

  it("should fetch locations", async () => {
    const locations = await pokeAPI.fetchLocations();
    console.log(`Fetched locations: ${JSON.stringify(locations, null, 2)}`);
    expect(locations).toBeDefined();
    expect(locations.results.length).toEqual(20);
  });
});