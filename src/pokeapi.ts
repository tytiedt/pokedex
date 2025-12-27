import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  public cache: Cache = new Cache(5 * 60 * 1000);

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ? pageURL : `${PokeAPI.baseURL}/location-area/?offset=0&limit=20`;
    const cached = this.cache.get<ShallowLocations>(url);
    if (cached) {
      return cached;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch locations: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    // console.log(`locationS: ${JSON.stringify(data, null, 2)}`);
    this.cache.add<ShallowLocations>(url, data);
    return data;
  }

  async fetchLocation(locationName: string): Promise<LocationArea> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}/`;
    const cached = this.cache.get<LocationArea>(url);
    if (cached) {
      return cached;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch location: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    // console.log(`location: ${JSON.stringify(data, null, 2)}`);
    this.cache.add<LocationArea>(url, data);
    return data;
  }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type LocationArea = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};
