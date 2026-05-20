# Literator

Generate readable Markdown walkthroughs from TypeScript source files.

Literator is source-first documentation: your `.ts` and `.tsx` files stay the source of truth, and generated Markdown is written beside them.

## Quickstart

1. Mark files with:

// @literator-literate

2. Run
```bash
npx literator
```

3. Markdown files will be generated from the marked source files saved besides it with ansuffix .literated.md

## Example

Example index file and literaed goes here



## Options:

### Installing

To scan a different folder:

```bash
npx literator app
```

### Choosing files to literate

All files are optt in with @literator-literate

### Comments
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

Code becomes fenced `ts` or `tsx` blocks.

Because comments become Markdown, everything will work naturally as it would otherwise such as diagrams and images :

```ts
// ```mermaid
// flowchart LR
//   A --> B
// ```
//
// ![Diagram](./images/diagram.png)
```

### Markdown Features


Collapsible sections are supported, because sometime we don't want to show everything in the markdown, yet prefer not to hide them.

```ts
// @literator-collapse-start Internal notes
// This content is collapsed by default.
// @literator-collapse-end
```

Without a title, Literator uses the default hint:

```text
Expand this section
```



### Safety

Literator only scans real source files:

```text
.ts
.tsx
```

It skips:

```text
*.d.ts
*.md
*.literated.md
```

Control annotations do not appear in the generated Markdown.

