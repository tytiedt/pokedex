// name, height, weight, stats and type(s)
import { State } from './state.js';

const commandInspect = async (state: State, ...args: string[]) => {
  const { pokedex } = state;
  const pokemonName = args[0];
  if (pokedex[pokemonName]) {
    console.log(`Inspecting ${pokemonName}:`);
    console.log(`- Name: ${pokedex[pokemonName].name}`);
    console.log(`- Height: ${pokedex[pokemonName].height}`);
    console.log(`- Weight: ${pokedex[pokemonName].weight}`);
    console.log(`- Stats:`);
    for (const stat of pokedex[pokemonName].stats) {
      console.log(`  - ${stat.stat.name}: ${stat.base_stat}`);
    }
    // -hp: 40
  // -attack: 45
  // -defense: 40
  // -special-attack: 35
  // -special-defense: 35
  // -speed: 56
    console.log(`- Types:\n  - ${pokedex[pokemonName].types.map((t: any) => t.type.name).join("\n  - ")}`);

  } else {
    console.log("Pokemon not found in your pokedex.");
  }
};

export { commandInspect };