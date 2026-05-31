# Phase 1 Release and Deployment

This document records the Phase 1 release setup for the FHIR Beacon docs site.

Status: repo-side Phase 1 work is complete. The remaining release execution
step is creating/confirming the Deno Deploy app and production URL with deploy
credentials.

## Release Versioning

The docs site has its own release version tracked in `version.txt`.

Release Please is configured with the `simple` release type. It opens release
pull requests from conventional commits, updates `CHANGELOG.md`, updates
`version.txt`, and creates GitHub releases after the release PR is merged. When
a release is created, the same workflow verifies the release build and deploys
the production revision to Deno Deploy.

The docs release version is separate from the `fhir-beacon` library package
version. The rendered docs should continue to state which library version they
target.

The release workflow needs permission to create pull requests. There are two
supported configurations:

- Enable **Settings > Actions > General > Workflow permissions > Allow GitHub
  Actions to create and approve pull requests** for this repository or
  organization.
- Or update the workflow to use a `RELEASE_PLEASE_TOKEN` repository secret from a
  fine-grained PAT that can write contents and pull requests for this
  repository.

## Verification

Every pull request should pass:

- [x] `deno task check`
- [x] `deno task check:drafts`

Both checks build the site and run built-site verification. Lume's
`check_urls` plugin is enabled in `_config.ts` with strict internal URL and
anchor validation, and broken links fail the build.

## Documentation Conventions

- [x] Code snippets in docs use the shared `code-example` component rather than
      raw fenced code blocks.
- [x] Any snippet with Lit binding syntax (for example `.data=${data}`) wraps
      the full fragment in a render function using `html\`\``. Otherwise, use
      plain HTML examples.

Release checks run `deno task check` in the Release Please workflow when a docs
GitHub release is created. GitHub does not trigger follow-up workflows from
releases created with `GITHUB_TOKEN`, so production deployment is intentionally
handled in the Release Please workflow instead of relying on a separate
`release.published` event.

## Draft Publishing

Public builds run without `LUME_DRAFTS`, so pages with `draft: true` are hidden.

Review builds can run with `LUME_DRAFTS=true` to show the full planned
documentation structure.

## Phase 1 Public Preview Blockers

- [x] Public documentation build is coherent without draft pages.
- [x] Draft documentation build exposes the planned full structure for review.
- [x] Minimum automated verification exists for required pages and internal
      links.
- [x] Lume `check_urls` validates internal links and anchors during public and
      draft builds.
- [x] CI workflow runs public and draft verification.
- [x] Docs release workflow exists.
- [x] Release Please PR creation permission is enabled, either by repository
      setting or `RELEASE_PLEASE_TOKEN`.
- [x] Deno Deploy workflow exists for same-repository pull request previews and
      Release Please production releases.
- [x] Review design/styling decisions in this repo and define which should move
      into `theme-webawesome`.
- [x] Deno Deploy docs app target is configured in repo metadata and workflows.
- [ ] Deno Deploy docs app is created/confirmed with deploy credentials.
- [ ] Production docs URL is confirmed after deploy app creation.
- [x] Storybook deployment target is explicitly deferred until after Phase 1.
- [x] Showcase deployment target is explicitly deferred until after Phase 1.
- [x] Library release notes and changelog import path is defined.

## Design and Theme Review

The Phase 1 docs repo keeps only site-specific design choices:

- brand and radius token overrides in `src/styles/webawesome-theme.css`
- the FHIR Beacon logo asset
- the FHIR Beacon component/runtime integration in `src/components/site-components.ts`

Reusable component work remains outside this release. The `demo-pane` cleanup is
tracked as a paused post-Phase 1 follow-up in the project build plan and should
land in `theme-webawesome`, not in this docs release.

## Library Status Sources

Phase 1 does not import library release metadata automatically yet. The public
status pages should be checked against these source paths before release:

- package/version target:
  [`packages/library/package.json`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/package.json)
- generated custom element inventory:
  [`packages/library/custom-elements.json`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/custom-elements.json)
- generated IDE/component metadata:
  [`packages/library/build/web-types.json`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/web-types.json)
- library changelog:
  [`packages/library/CHANGELOG.md`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/CHANGELOG.md)
- release notes:
  [GitHub releases](https://github.com/zenwork/fhir-beacon/releases)

Automated import of these sources remains part of the parallel technical track.

## Deno Deploy Setup

The docs site should be deployed as a static app on the new Deno Deploy
platform.

Use the Deno Deploy CLI to create or configure the app once final organization
and app names are known:

```bash
deno deploy create \
  --org zenwork \
  --app fhir-beacon-web \
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

- [x] Final Deno Deploy organization name: `zenwork`.
- [x] Final docs app name: `fhir-beacon-web`.
- [x] Release Please PR creation permission is enabled in GitHub.
- [ ] Deno Deploy token and repository variables are available in GitHub.
- [ ] Production docs URL is confirmed after the app exists.
- [x] Preview deployment behavior for pull requests is defined in
      `.github/workflows/deploy.yml`.
- [x] Storybook migration is not required before the docs preview is public.
- [x] Showcase migration is not required before the docs preview is public.
- [ ] Final Storybook URL after post-Phase 1 migration.
- [ ] Final showcase app URL after post-Phase 1 migration.

## Deferred Until After Phase 1

- Migrate Storybook from classic Deno Deploy to the new Deno Deploy platform.
- Update docs links if the Storybook URL changes during that migration.
- Migrate the showcase app from classic Deno Deploy to the new Deno Deploy
  platform.
- Update docs links if the showcase URL changes during that migration.
