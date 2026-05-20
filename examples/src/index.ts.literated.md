<style>
.doc-collapse summary .when-open {
  display: none;
}

.doc-collapse[open] summary .when-closed {
  display: none;
}

.doc-collapse[open] summary .when-open {
  display: inline;
}
</style>

# Pancake order

This tiny file walks through a mighty little pancake orchestrator:

1. Get the recipe.
2. Make pancakes.
3. Say it is done.

```mermaid
flowchart LR
  Recipe[Get recipe] --> Pancakes[Make pancakes]
  Pancakes --> Done([Done])
```

## 1. Get the recipe

A real app might summon this recipe from a cooking wizard.
This example keeps the recipe as a tiny local stub.

```ts
function getRecipe(): string {
  return "pancake recipe";
}
```

## 2. Make pancakes

Now the batter meets the pan. No drama, just pancakes.

```ts
function makePancakes(recipe: string): string {
  return `Made pancakes from ${recipe}`;
}
```

## 3. Say it is done

Breakfast is served.

```ts
const recipe = getRecipe();
const pancakes = makePancakes(recipe);

console.log(`${pancakes}. Done!`);
```
