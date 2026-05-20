# AGENTS.md

## Literator source-first documentation

This project uses Literator to generate Markdown walkthroughs from marked TypeScript source files.

The `.ts` and `.tsx` files are the source of truth.

Generated `.literated.md` files should usually not be edited directly. Edit the source file and regenerate.

## Core rules

- TypeScript source files remain valid TypeScript.
- A source file is only literated if it contains `// @literator-literate`.
- `//` line comments and standalone `/* ... */` block comments are treated as Markdown prose.
- Source code is emitted as fenced `ts` or `tsx` code blocks.
- Generated Markdown should read from top to bottom like a guided source walkthrough.
- Prefer editing source files, then regenerating docs.
- Do not use TypeDoc/JSDoc-style API reference prose unless the project specifically asks for API docs.

## Opt-in annotation

Use this annotation to mark a file for Literator:

```ts
// @literator-literate
```

Place it near the top of the file.

This annotation should not appear in generated Markdown.

## Output files

Generated Markdown is saved beside the source file:

```text
src/index.ts -> src/index.ts.literated.md
```

Do not parse or edit `.literated.md` files as source.

## Collapse annotations

Use these annotations to make a section expandable in the generated Markdown:

```ts
// @literator-collapse-start Optional title
// Markdown prose here.

const codeInsideTheSection = true;

// @literator-collapse-end
```

This does not hide content from the Markdown file. It only wraps the generated Markdown in an expandable `<details>` section.

If no title is provided, Literator uses a muted hint:

```text
Expand this section
```

When expanded, it changes to:

```text
Collapse this section
```

## Writing style

Write comments as useful Markdown:

```ts
// ## Creating a session
//
// First we create a temporary session for the user.

/*
Longer Markdown prose can also be written in standalone block comments.
*/

function createSession() {
  return { state: "temporary" };
}
```

Use Markdown diagrams and images when helpful:

```ts
// ```mermaid
// flowchart TD
//   A[Start] --> B[Finish]
// ```
//
// ![Architecture diagram](./images/architecture.png)
```

## Commands

Generate docs with:

```bash
npm run docs:literate
```

or directly:

```bash
literator src
```
