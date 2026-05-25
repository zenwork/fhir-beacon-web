# Phase 1 Release and Deployment

This document records the Phase 1 release setup for the FHIR Beacon docs site.

## Release Versioning

The docs site has its own release version tracked in `version.txt`.

Release Please is configured with the `simple` release type. It opens release
pull requests from conventional commits, updates `CHANGELOG.md`, updates
`version.txt`, and creates GitHub releases after the release PR is merged.

The docs release version is separate from the `fhir-beacon` library package
version. The rendered docs should continue to state which library version they
target.

## Verification

Every pull request should pass:

- [x] `deno task check`
- [x] `deno task check:drafts`

## Documentation Conventions

- [x] Code snippets in docs use the shared `code-example` component rather than
      raw fenced code blocks.
- [x] Any snippet with Lit binding syntax (for example `.data=${data}`) wraps
      the full fragment in a render function using `html\`\``. Otherwise, use
      plain HTML examples.

Release checks run `deno task check` when a docs GitHub release is published.

## Draft Publishing

Public builds run without `LUME_DRAFTS`, so pages with `draft: true` are hidden.

Review builds can run with `LUME_DRAFTS=true` to show the full planned
documentation structure.

## Phase 1 Public Preview Blockers

- [x] Public documentation build is coherent without draft pages.
- [x] Draft documentation build exposes the planned full structure for review.
- [x] Minimum automated verification exists for required pages and internal
      links.
- [x] CI workflow runs public and draft verification.
- [x] Docs release workflow exists.
- [ ] Review design/styling decisions in this repo and define which should move
      into `theme-webawesome`.
- [ ] Deno Deploy docs app is created and connected to the repository.
- [ ] Production docs URL is confirmed.
- [ ] Storybook deployment target is confirmed or explicitly deferred.
- [ ] Showcase deployment target is confirmed or explicitly deferred.
- [ ] Library release notes and changelog import path is defined.

## Deno Deploy Setup

The docs site should be deployed as a static app on the new Deno Deploy
platform.

Use the Deno Deploy CLI to create or configure the app once final organization
and app names are known:

```bash
deno deploy create \
  --org <deno-org> \
  --app <docs-app-name> \
  --source github \
  --owner zenwork \
  --repo fhir-beacon-web \
  --runtime-mode static \
  --static-dir _site \
  --build-command "deno task check" \
  --build-timeout 10 \
  --build-memory-limit 2048 \
  --region global
```

## Open Deployment Inputs

- [ ] Final Deno Deploy organization name.
- [ ] Final docs app name and production URL.
- [ ] Preview deployment behavior for pull requests.
- [ ] Whether Storybook and showcase must be migrated before the docs preview is
      public.
- [ ] Final Storybook URL after migration.
- [ ] Final showcase app URL after migration.
