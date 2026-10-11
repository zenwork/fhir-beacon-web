---
layout: layouts/base.vto
title: Library Reference
order: 1
---

# Library Reference

This page is generated from the fhir-beacon package metadata, custom elements
manifest, web-types metadata, and changelog. Run
`deno task reference:generate` after updating the library source or package
version.

## Source Inputs

| Source | Value |
| ------ | ----- |
| Package metadata | [package.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/package.json) |
| Custom elements manifest | [build/custom-elements.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/custom-elements.json) |
| Web types metadata | [build/web-types.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/web-types.json) |
| Changelog | [CHANGELOG.md](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/CHANGELOG.md) |
| Storybook | [fhir-beacon.deno.dev](https://fhir-beacon.deno.dev) |
| GitHub releases | [github.com/zenwork/fhir-beacon/releases](https://github.com/zenwork/fhir-beacon/releases) |

## Package and Compatibility

| Item | Value |
| ---- | ----- |
| Package | `fhir-beacon` |
| Source package version | `0.2.0` |
| Docs import target | `npm:fhir-beacon@0.3.0/dist/fhir-beacon.js` |
| Module type | `module` |
| Web types package | `fhir-beacon` `0.1.4` |
| Published files | `dist/**/*`, `build/web-types.json`, `build/custom-elements.json`, `README.md` |
| Recent changelog versions | `0.2.0`, `0.1.4`, `0.1.3`, `0.1.2`, `0.1.1`, `0.1.0` |

| Runtime dependency | Version |
| ------------------ | ------- |
| `@lit/context` | `^1.1.5` |
| `@shoelace-style/shoelace` | `^2.20.1` |
| `axios` | `^1.9.0` |
| `jsonpath-plus` | `^10.3.0` |
| `lit` | `^3.3.0` |

## Component Summary

The generated catalogs group entries by FHIR Beacon surface. Each catalog entry
has its own page with generated attributes, properties, events, source file, and
a usage skeleton.

| Catalog | Elements | Scope |
| ------- | -------- | ----- |
| [Base and Display Elements](../base-and-display-elements/) | 12 | Shell, layout, display primitive, and utility custom elements used to compose FHIR rendering. |
| [Types](../types/) | 1 | Primitive type rendering elements. |
| [Complex Types](../complex-types/) | 42 | FHIR datatype, special datatype, and backbone custom elements. |
| [Resources](../resources/) | 2 | Concrete FHIR resources whose renderer is not a DomainResource renderer. |
| [Domain Resources](../domain-resources/) | 8 | Concrete FHIR resources implemented with the DomainResource renderer base. |

## Common Element Inputs

Most FHIR model elements share inherited rendering inputs. Use property binding
for complex values such as `data`; use attributes for string and boolean
configuration.

| Attribute | Components |
| --------- | ---------- |
| `label` | 56 |
| `open` | 55 |
| `summary` | 55 |
| `summaryonly` | 55 |
| `input` | 54 |
| `key` | 54 |
| `mode` | 54 |
| `required` | 54 |
| `showerror` | 54 |
| `verbose` | 54 |
| `data` | 53 |
| `headless` | 53 |
| `data-path` | 52 |
| `override-template` | 8 |
| `variant` | 5 |
| `text` | 4 |
| `delimiter` | 2 |
| `error` | 2 |
| `link` | 2 |
| `value` | 2 |
| `badge-constraint` | 1 |
| `badge-profile` | 1 |
| `badge-required` | 1 |
| `badge-resource` | 1 |

## API Surface

| Area | Exports | Use |
| ---- | ------- | --- |
| Display configuration | `DisplayMode`, `DisplayConfig`, `Shell` | Configure render mode and shared display behavior. |
| Element extension | `BaseElement`, `FhirContextElement` | Build custom renderers or template-aware custom elements. |
| FHIR definitions | `PrimitiveDef`, `DatatypeDef`, `ResourceDef` | Work with generated FHIR type and resource definitions. |
| Terminology helpers | `Codes`, `useSystem`, `systemChoices` | Read packaged code-system choices. |
| Profiling | `profile`, profiling builders, definition helpers | Build StructureDefinition-like profile definitions and constraints. |
| Styling | `hostStyles`, `textHostStyles` | Reuse base Lit CSS helpers when extending components. |
| Utilities | `hasAll`, `hasOnly`, `hasNone`, `toDisplayMode`, `when` | Use internal-adjacent helpers exported by the package. |

## Update Workflow

1. Build or update the fhir-beacon library so `build/custom-elements.json` and
   `build/web-types.json` are current.
2. Run `deno task reference:generate` from this docs repository.
3. Review the generated diff for component, package, dependency, and changelog
   changes.
4. Run `deno task build` before publishing.
