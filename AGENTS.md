# AGENTS

This file defines working rules for coding agents contributing to `fhir-beacon-docs`.

## Project Snapshot

- Purpose: this repository documents the `fhir-beacon` library available on GitHub at https://github.com/zenwork/fhir-beacon.
- Static documentation site built with Deno + Lume.
- Theme loaded remotely from `theme-webawesome` in [`_config.ts`](_config.ts).
- Markdown content source under [`src/`](src/).
- CMS setup in [`_cms.ts`](_cms.ts).

## Documentation Subject

This site is about the `fhir-beacon` library only. Do not make reader-facing
docs about Lume, Vento, the docs theme, or the implementation details of this
documentation site unless the user explicitly asks for contributor/development
documentation.

Use the library repository as the source of truth:

- GitHub: https://github.com/zenwork/fhir-beacon
- Local sibling checkout: `/Users/flo/dev/zenwork/fhir-beacon`

Current understanding of `fhir-beacon`:

- It is an exploratory frontend library for rendering FHIR R5 data directly in
  the browser.
- It provides FHIR-aware web components/custom elements for resources,
  datatypes, primitives, and special elements.
- The integration model is to keep FHIR-shaped JSON visible in the frontend and
  pass it to matching components such as `<fhir-patient>` or
  `<fhir-observation>`.
- Applications still own data loading, authorization, persistence,
  orchestration, navigation, and product-specific workflows.
- The library owns reusable FHIR rendering behavior, including common resource
  and datatype presentation.
- The documented setup is `npm install fhir-beacon`, load the required
  Shoelace assets, and `import "fhir-beacon"` before rendering components.
- The library README uses Lit examples for concise property binding, but the
  components are web components and aim to be framework-agnostic.
- Common element properties include `data`, `mode`, `summaryonly`, `showerror`,
  `verbose`, `open`, `headless`, `label`, `key`, `summary`, and `required`.
- Display modes include `display`, `structure`, `narrative`, `debug`, and
  `override`.
- The library is alpha/exploratory. Docs must be explicit about what works
  today, what is partial or experimental, and what is planned.
- Storybook is the component catalog. The showcase app demonstrates broader
  integration use cases. They are product resources, not the subject of the
  docs themselves.

## Tech Stack

- **Deno**: runtime, task runner, and module/dependency management via [`deno.json`](deno.json).
- **Lume**: static site generator and plugin system.
  - Site: https://lume.land/
  - GitHub: https://github.com/lumeland/lume
- **theme-webawesome**: Lume theme used by this project.
  - GitHub: https://github.com/zenwork/theme-webawesome
- **Lit**: web components foundation used by the theme/component layer.
  - Site: https://lit.dev/
  - GitHub: https://github.com/lit/lit
- **Web Awesome UI Components**: framework-agnostic component library used by the theme.
  - Site: https://webawesome.com/
  - GitHub: https://github.com/shoelace-style/webawesome

## What To Edit

- Documentation pages: `src/**/*.md`
- Site/content metadata:
  - [`src/_data.yml`](src/_data.yml)
- Build/site behavior:
  - [`_config.ts`](_config.ts)
  - [`deno.json`](deno.json)
  - [`_cms.ts`](_cms.ts)

## Generated Reference Docs

The library reference generator lives at
[`scripts/generate_library_reference.ts`](scripts/generate_library_reference.ts)
and runs through `deno task reference:generate`.

It reads the local `fhir-beacon` library package from
`../fhir-beacon/packages/library/` unless `FHIR_BEACON_LIBRARY_DIR` is set. The
library package must have current `package.json`, `build/custom-elements.json`,
`build/web-types.json`, and `CHANGELOG.md` files before generation.

Generated outputs are source docs, but they should be regenerated rather than
hand-maintained unless the user explicitly asks for manual edits:

- [`src/reference/library-reference.md`](src/reference/library-reference.md)
- [`src/reference/base-and-display-elements/`](src/reference/base-and-display-elements/)
- [`src/reference/types/`](src/reference/types/)
- [`src/reference/complex-types/`](src/reference/complex-types/)
- [`src/reference/resources/`](src/reference/resources/)
- [`src/reference/domain-resources/`](src/reference/domain-resources/)

The catalog pages are intentionally direct children of `src/reference/`; do not
reintroduce a `src/reference/component-catalog/` wrapper. After changing the
generator, run `deno fmt scripts/generate_library_reference.ts`, then
`deno task reference:generate`, `deno task build`, and `deno task verify`.

## What Not To Edit (Unless Explicitly Requested)

- Generated output: [`_site/`](_site/)
- Cache/internal artifacts: [`_cache/`](_cache/), `node_modules/`
- IDE files: `.idea/`

## Content Conventions

- Keep one H1 per page.
- Use front matter when needed (`id`, `hide_menu`, etc.) and preserve existing keys.
- Keep section structure consistent with nearby pages.
- Prefer relative, stable links between docs pages.
- Do not introduce placeholder headings/content in finalized edits.

## Build And Verification

Run commands from repository root:

```bash
deno task serve   # local preview server
deno task build   # production build
deno lint         # optional lint check
```

If you modify config, navigation, or shared data files, run at least `deno task build` before finishing.

## Dependency Management

- Dependencies are managed in [`deno.json`](deno.json) imports.
- To update dependencies:

```bash
deno task update-deps
```

- Keep versions explicit and changes scoped to the requested task.

## Git Commits

- Do not create, amend, squash, or push commits unless the user explicitly approves the commit first.
- Do NOT add "Co-authored-by: Junie" or similar trailers to commit messages unless explicitly requested.
- Use logical, descriptive commit messages.
- use conventional commit messages (https://www.conventionalcommits.org/en/v1.0.0/)

## Agent Workflow Expectations

1. Read nearby files before editing; follow existing patterns.
2. Keep changes minimal and task-focused.
3. Avoid unrelated refactors.
4. Summarize changed files and verification commands in handoff notes.

## Pre-Handoff Checklist

- [ ] Requested change implemented.
- [ ] No generated/cache files modified.
- [ ] `deno task build` run (when applicable) or reason provided if not run.
- [ ] File paths and commands in docs are accurate.
