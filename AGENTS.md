# AGENTS

This file defines working rules for coding agents contributing to `fhir-beacon-docs`.

## Project Snapshot

- Purpose: this repository documents the `fhir-beacon` library available on GitHub at https://github.com/zenwork/fhir-beacon.
- Static documentation site built with Deno + Lume.
- Theme loaded remotely from `theme-webawesome` in [`_config.ts`](_config.ts).
- Markdown content source under [`src/`](src/).
- CMS setup in [`_cms.ts`](_cms.ts).

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

- Do NOT add "Co-authored-by: Junie" or similar trailers to commit messages unless explicitly requested.
- Use logical, descriptive commit messages.

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
