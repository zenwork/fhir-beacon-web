---
layout: layouts/base.vto
title: Project Status
order: 2
---

# Project Status

FHIR Beacon is currently alpha software.

The library package is published as `fhir-beacon` and the current documentation
preview targets library version `0.3.0`. Coverage and status labels are a
snapshot for that target version, not a guarantee for unreleased development
branches.

## What Exists Today

- FHIR resource components for a first set of resources.
- Complex datatype components.
- Primitive rendering and validation support.
- Special elements for references, narrative, meta, and extensions.
- Profiling, extension, and validation work in progress.
- Storybook coverage for many component-level examples.
- A showcase app for broader use-case exploration.

## What Is Still In Progress

- v1 scope and definition of done.
- Full resource coverage.
- Template override design.
- URL/reference provider model.
- Release automation and Deno Deploy migration.
- Complete documentation and reference automation.
- The Play editor.

## Status Labels

The documentation uses these labels:

- <wa-badge variant="success" pill>available</wa-badge>: implemented and usable
  in current examples
- <wa-badge variant="warning" pill>partial</wa-badge>: implemented in part or
  still has known gaps
- <wa-badge variant="brand" pill>experimental</wa-badge>: implemented but still
  changing
- <wa-badge variant="neutral" pill>planned</wa-badge>: not ready yet

## Status Sources

Until reference automation is added, the Phase 1 status pages are maintained
from these sources:

| Source | Used for |
|--------|----------|
| [`fhir-beacon` package metadata](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/package.json) | current published package target |
| [`custom-elements.json`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/custom-elements.json) | public custom element inventory |
| [`web-types.json`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/web-types.json) | IDE/component metadata when generated |
| [Library changelog](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/CHANGELOG.md) | released library changes |
| [GitHub releases](https://github.com/zenwork/fhir-beacon/releases) | release notes and release history |
| [Storybook](https://fhir-beacon.deno.dev) | component examples and visible rendering coverage |

The [FHIR Reference](../../reference/fhir-reference/) is the main coverage
matrix for Phase 1. The [Library Reference](../../reference/library-reference/)
records the package target and common public element inputs.

## Links

- [GitHub repository](https://github.com/zenwork/fhir-beacon)
- [Storybook](https://fhir-beacon.deno.dev)
- [Showcase app](https://fhir-beacon-app.deno.dev)
