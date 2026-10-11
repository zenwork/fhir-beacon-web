# FHIR Beacon Docs

Documentation site for [`fhir-beacon`](https://github.com/zenwork/fhir-beacon).

## Commands

```bash
deno task serve
deno task serve:drafts
deno task reference:generate
deno task check
deno task check:drafts
```

`deno task check` verifies the public build. `deno task check:drafts` builds
with Lume draft pages enabled so the full planned structure can be reviewed.

## Library Reference Generator

Run `deno task reference:generate` after updating the local `fhir-beacon`
library checkout or after a new library release. The generator reads package and
component metadata from the sibling checkout at
`../fhir-beacon/packages/library/` by default.

Use `FHIR_BEACON_LIBRARY_DIR` when the library checkout is somewhere else:

```bash
FHIR_BEACON_LIBRARY_DIR=/path/to/fhir-beacon/packages/library \
  deno task reference:generate
```

The generator expects these source files in the library package:

- `package.json`
- `build/custom-elements.json`
- `build/web-types.json`
- `CHANGELOG.md`

It writes the generated library lookup page to
`src/reference/library-reference.md` and writes per-catalog component pages
under `src/reference/base-and-display-elements/`, `src/reference/types/`,
`src/reference/complex-types/`, `src/reference/resources/`, and
`src/reference/domain-resources/`. Review the generated diff before committing,
then run `deno task build` or `deno task check`.

## Deno Deploy

This repository is configured for the **new Deno Deploy platform** using the
`deno deploy` CLI.

It is **not** using Deploy Classic (`deployctl`).

### One-time app setup (new platform)

Run once to create the app configuration:

```bash
deno deploy create \
  --token "$DENO_DEPLOY_TOKEN" \
  --org "<your-org-slug>" \
  --app "<your-app-slug>" \
  --source github \
  --owner "zenwork" \
  --repo "fhir-beacon-web" \
  --app-directory "." \
  --runtime-mode static \
  --static-dir _site \
  --build-command "deno task build" \
  --build-timeout 10 \
  --build-memory-limit 2048 \
  --region global
```

### GitHub configuration

The workflow
[deploy.yml](/Users/flo/dev/zenwork/fhir-beacon-docs/.github/workflows/deploy.yml)
deploys preview revisions for pull requests and deploys production only when a
Release Please release is published.

Set these repository settings:

- secret `DENO_DEPLOY_TOKEN`: token for the new Deno Deploy platform.
- variable `DENO_DEPLOY_ORG`: deploy organization slug.
- variable `DENO_DEPLOY_APP`: deploy app slug.

## Phase 1 Release

The Phase 1 release setup is tracked in
[`docs/phase-1-release.md`](docs/phase-1-release.md). CI runs both public and
draft documentation checks, while Release Please manages docs-site releases from
conventional commits.

Release Please must be allowed to open release pull requests. Either enable the
repository setting that allows GitHub Actions to create pull requests, or set a
`RELEASE_PLEASE_TOKEN` repository secret with contents and pull request write
access.
