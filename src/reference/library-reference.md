---
layout: layouts/base.vto
title: Library Reference
order: 1
---

# Library Reference

Library Reference collects FHIR Beacon-specific lookup material.

## Package

| Item                | Value         |
|---------------------|---------------|
| Package             | `fhir-beacon` |
| Current docs target | `0.3.0`       |
| Status              | alpha         |

The target version is checked against the published library package and release
metadata. Phase 1 coverage is still curated manually from the library source,
generated component metadata, Storybook, and the library changelog.

| Source | Link |
|--------|------|
| Package metadata | [`packages/library/package.json`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/package.json) |
| Custom elements manifest | [`custom-elements.json`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/custom-elements.json) |
| Web types metadata | [`web-types.json`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/web-types.json) |
| Changelog | [`packages/library/CHANGELOG.md`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/CHANGELOG.md) |
| Release notes | [GitHub releases](https://github.com/zenwork/fhir-beacon/releases) |

## Common Element Inputs

Common FHIR Beacon elements share a set of rendering inputs. The exact API
reference will expand as the generated reference is added.

| Input         | Purpose                                               |
|---------------|-------------------------------------------------------|
| `data`        | FHIR JSON data to render.                             |
| `key`         | Identity of the element in the FHIR model.            |
| `label`       | Human-readable label.                                 |
| `headless`    | Render properties without title or wrapping elements. |
| `mode`        | Display mode.                                         |
| `summaryonly` | Show only FHIR summary properties where supported.    |
| `verbose`     | Show properties even when data is missing.            |
| `open`        | Open structure details where supported.               |

## Links

- [Storybook](https://fhir-beacon.deno.dev)
- [Showcase app](https://fhir-beacon-app.deno.dev)
- [GitHub repository](https://github.com/zenwork/fhir-beacon)
