---
layout: layouts/base.vto
title: Advanced Topics
order: 2
draft: true
---

# Advanced Topics

Advanced Topics tracks the harder FHIR data cases.

This chapter is for users asking:

- What happens with slicing?
- How are choice types rendered?
- Can contained resources be displayed meaningfully?
- How are primitive extensions handled?
- What happens when data has missing or extra properties?

## Current Status

| Topic                       | Status                                                 |
| --------------------------- | ------------------------------------------------------ |
| Validation                  | <wa-badge variant="brand" pill>experimental</wa-badge> |
| Slicing                     | <wa-badge variant="brand" pill>experimental</wa-badge> |
| Choice types                | <wa-badge variant="warning" pill>partial</wa-badge>    |
| Contained resources         | <wa-badge variant="warning" pill>partial</wa-badge>    |
| Primitive extensions        | <wa-badge variant="warning" pill>partial</wa-badge>    |
| Missing or extra properties | <wa-badge variant="warning" pill>partial</wa-badge>    |
| Special cases               | <wa-badge variant="warning" pill>partial</wa-badge>    |

## Validation

Validation exists at multiple levels, but it is not yet a full public validation
engine.

| Validation layer | Status | Current behavior |
| ---------------- | ------ | ---------------- |
| Primitive type validation | <wa-badge variant="success" pill>available</wa-badge> | `fhir-primitive` validates and formats supported scalar types when `type` is set. |
| Component-level validation messages | <wa-badge variant="warning" pill>partial</wa-badge> | Elements can collect and display validation messages, usually when `showerror` is enabled. |
| Reference validation | <wa-badge variant="warning" pill>partial</wa-badge> | References check whether at least one of `reference`, `identifier`, or `display` is present unless an extension is provided. Contained references also check for a matching contained resource. |
| Profile validation | <wa-badge variant="brand" pill>experimental</wa-badge> | Profiling and profile validation tests exist, but user-facing APIs are still evolving. |
| Complete FHIR validation | <wa-badge variant="neutral" pill>planned</wa-badge> | FHIR Beacon should not be used as the sole conformance validator. |

Use FHIR Beacon validation as UI feedback. Use a dedicated FHIR validator or
server-side conformance workflow for clinical, regulatory, or persistence
decisions.

## Slicing

Slicing support is experimental. The library has profiling builder code for
slice definitions, but resource rendering is not yet a stable, profile-driven
slice renderer.

Current implication: sliced data can render when it uses fields and datatypes
that already have renderers. FHIR Beacon does not yet guarantee that slice names,
discriminators, cardinalities, or profile-specific order will be rendered as an
IG author intended.

## Choice Types

FHIR choice types use names such as `value[x]`, `onset[x]`, or
`deceased[x]`. FHIR Beacon handles choice types where a resource or datatype
component has explicit rendering logic for the expected alternatives.

| Choice area | Status | Notes |
| ----------- | ------ | ----- |
| Extension `value[x]` | <wa-badge variant="success" pill>available</wa-badge> | `fhir-extension` detects the populated `value[x]` key and routes many alternatives to primitive or datatype renderers. |
| Resource-specific choice fields | <wa-badge variant="warning" pill>partial</wa-badge> | Support depends on each resource implementation. |
| Unknown choice alternatives | <wa-badge variant="warning" pill>partial</wa-badge> | Some uncommon complex choices may render as JSON text or be omitted until a dedicated renderer exists. |

When integrating new FHIR data, test the exact resource examples that matter to
your workflow in Storybook or the showcase app before relying on a choice field.

## Contained Resources

Contained resources are partially supported.

Domain resource structure rendering can show `contained` resources, and
`fhir-reference` can resolve a local `#id` reference when the matching contained
resource is available in component context. The resolved contained resource then
uses the normal resource dispatcher.

Important limits:

- Only contained resources with supported `resourceType` values get dedicated
  resource rendering.
- Contained references are local to the rendered data context.
- External reference lookup remains the responsibility of the host application.

## Primitive Extensions

FHIR primitive extensions are represented through underscore properties in FHIR
JSON. FHIR Beacon's primitive element can render extension content where
extension data is available, and extension values are handled through
`fhir-extension`.

This support is partial because primitive extension behavior is not yet
documented as a complete public contract for every primitive field in every
resource component.

| Primitive extension case | Status | Notes |
| ------------------------ | ------ | ----- |
| Extension values with supported `value[x]` types | <wa-badge variant="success" pill>available</wa-badge> | Routed through `fhir-extension`. |
| Primitive field underscore data | <wa-badge variant="warning" pill>partial</wa-badge> | Supported where component data decoration passes extension data into primitive rendering. |
| Modifier extension semantics | <wa-badge variant="neutral" pill>planned</wa-badge> | Not yet implemented as a complete semantic layer. |

## Missing Or Extra Properties

FHIR Beacon is a renderer, not a data-normalization layer. Components render the
fields they know about.

| Data condition | Status | Behavior |
| -------------- | ------ | -------- |
| Missing optional data | <wa-badge variant="success" pill>available</wa-badge> | Usually omitted in display mode. `verbose` can show empty structure where supported. |
| Missing required-looking values | <wa-badge variant="warning" pill>partial</wa-badge> | Some components and primitives can show validation messages, but full FHIR conformance is not guaranteed. |
| Extra unknown properties | <wa-badge variant="warning" pill>partial</wa-badge> | Unknown fields are generally ignored by specific renderers unless debug or structure tooling exposes the raw object. |
| Unsupported resources | <wa-badge variant="warning" pill>partial</wa-badge> | Generic resource dispatch falls back to an unsupported-resource message. |

Use `debug` mode when inspecting unfamiliar payloads. Use resource-specific
tests or Storybook examples when a field is clinically or operationally
important.

## Special Cases

Special FHIR presentation helpers exist for data that does not fit neatly into
ordinary resource or datatype rendering.

| Special case | Status | Element or behavior |
| ------------ | ------ | ------------------- |
| Narrative XHTML | <wa-badge variant="success" pill>available</wa-badge> | `fhir-narrative` renders resource narrative content. |
| Metadata | <wa-badge variant="success" pill>available</wa-badge> | `fhir-meta` renders FHIR metadata where used. |
| Unsupported items | <wa-badge variant="success" pill>available</wa-badge> | `fhir-not-supported` and generic fallback rendering make unsupported areas visible. |
| Debug output | <wa-badge variant="success" pill>available</wa-badge> | `fhir-debug` supports raw data inspection. |
| Empty collections | <wa-badge variant="success" pill>available</wa-badge> | `fhir-empty-list` supports verbose structure views. |

## Implementation Sources

The current status is tied to these implementation surfaces:

- Primitive validators and formatters in
  [`packages/library/src/components/primitive`](https://github.com/zenwork/fhir-beacon/tree/main/packages/library/src/components/primitive).
- Contained resource and domain resource behavior in
  [`DomainResource.ts`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/internal/resource/DomainResource.ts)
  and [`fhir-reference`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/special/reference/reference.ts).
- Profiling and slicing experiments in
  [`packages/library/src/profiling`](https://github.com/zenwork/fhir-beacon/tree/main/packages/library/src/profiling).
- Debug and fallback elements in
  [`packages/library/src/utilities`](https://github.com/zenwork/fhir-beacon/tree/main/packages/library/src/utilities)
  and [`packages/library/src/components/primitive`](https://github.com/zenwork/fhir-beacon/tree/main/packages/library/src/components/primitive).
