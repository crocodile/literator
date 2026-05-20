# Literator

Generate readable Markdown walkthroughs from TypeScript source files.

Literator is source-first documentation: your `.ts` and `.tsx` files stay the source of truth, and generated Markdown is auto-generated beside them.

## Quickstart

### 📝 Mark a source file
to literate:

```ts
// @literator-literate
```

### ▶️ Run Literator:

```bash
npx literator
```

(By default, Literator scans the `src` folder. To scan a different folder: `npx literator app`)

### 🏁 Done
Markdown is generated beside each marked source file:

```text
src/index.ts -> src/index.ts.literated.md
```

<br>

## Example

```ts 
// @literator-literate

// # Greeting example
//
// This tiny script turns a name into a friendly message.
//
// ```mermaid
// flowchart LR
//   Name[Name] --> Greet[greet()]
//   Greet --> Message[Greeting]
// ```
//
// ![Greeting badge](./images/greeting-badge.svg)

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

This creates:

```text
src/index.ts.literated.md
```

See the generated example: [examples/src/index.ts.literated.md](examples/src/index.ts.literated.md).

<br>

## How it works

### 🛠️ Install it locally
if that's what you prefer.
```bash
npm install
 literator
```


### 🛠️ Addining MArkdown in the Comments

Line comments become Markdown:

```ts
// ## A Markdown heading
//
// Markdown prose here.
```

Standalone block comments also become Markdown:

```ts
/*
## Another heading

More Markdown prose here.
*/
```

Because comments become Markdown, normal Markdown features work naturally, including Mermaid diagrams and images:

```ts
// ```mermaid
// flowchart LR
//   A --> B
// ```
//
// ![Diagram](./images/diagram.png)
```

None of the Literator annotations appear in the Markdown.

### 🛠️ Adding collapsible Sections
when there is too much going on in the markdown, These will be collapsabel and expandable to keep the view ..

```ts
// @literator-collapse-start Internal notes
// This content is collapsed by default.
// @literator-collapse-end
```

If the title is omitted a title, Literator uses:`Expand this section` / `Collapse this section`

### Safety

Literator scans:

```text
.ts
.tsx
```

Literator skips:

```text
*.d.ts
*.md
*.literated.md
```

