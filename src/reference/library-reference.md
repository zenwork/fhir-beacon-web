---
layout: layouts/base.vto
title: Library Reference
order: 1
---

# Library Reference

Library Reference collects FHIR Beacon-specific lookup material.

## Package

| Item                | Value         |
| ------------------- | ------------- |
| Package             | `fhir-beacon` |
| Current docs target | `0.3.0`       |
| Status              | alpha         |

## Common Component Inputs

Common FHIR Beacon elements share a set of rendering inputs. The exact API
reference will expand as the generated reference is added.

| Input         | Purpose                                            |
| ------------- | -------------------------------------------------- |
| `data`        | FHIR JSON data to render.                          |
| `key`         | Identity of the element in the FHIR model.         |
| `label`       | Human-readable label.                              |
| `mode`        | Display mode.                                      |
| `summaryonly` | Show only FHIR summary properties where supported. |
| `verbose`     | Show properties even when data is missing.         |
| `open`        | Open structure details where supported.            |

## Links

- [Storybook](https://fhir-beacon.deno.dev)
- [Showcase app](https://fhir-beacon-app.deno.dev)
- [GitHub repository](https://github.com/zenwork/fhir-beacon)
