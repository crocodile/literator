// @literator-literate

// # Pancake order
//
// This tiny file walks through a mighty little pancake orchestrator:
//
// 1. Get the recipe.
// 2. Make pancakes.
// 3. Say it is done.
//
// ```mermaid
// flowchart LR
//   Recipe[Get recipe] --> Pancakes[Make pancakes]
//   Pancakes --> Done([Done])
// ```

// ## 1. Get the recipe
//
// @literator-collapse-start Why this is a stub
// A real app might summon the instructions from a cooking wizard.
// For this demo, we keep the steps local.
// @literator-collapse-end

function getRecipe(): string {
  return "pancake recipe";
}

// ## 2. Make pancakes
//
// Now the batter meets the pan. No drama, just pancakes.

function makePancakes(recipe: string): string {
  return `Made pancakes from ${recipe}`;
}

// ## 3. Say it is done
//
// The pancakes have landed.

const recipe = getRecipe();
const pancakes = makePancakes(recipe);

console.log(`${pancakes}. Done!`);
