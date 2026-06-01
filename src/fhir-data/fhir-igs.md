---
layout: layouts/base.vto
title: FHIR IGs
order: 1
draft: true
---

# FHIR IGs

FHIR IGs covers implementation-guide-driven FHIR: profiles, extensions,
terminology, and constraints.

This chapter is for users asking:

- My data conforms to an IG profile. Can the UI reflect that?
- How are extensions displayed or customized?
- How does FHIR Beacon handle terminology and coded values?
- Can constraints or profile-specific rules affect rendering?

## Current Coverage

| Area        | Status                                                 | Notes                                                       |
| ----------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| Profiles    | <wa-badge variant="brand" pill>experimental</wa-badge> | Profiling builder and validation code exists and is still evolving. |
| Extensions  | <wa-badge variant="warning" pill>partial</wa-badge>    | Simple and complex extension rendering exists for many `value[x]` types. |
| Terminology | <wa-badge variant="brand" pill>experimental</wa-badge> | Valueset and codesystem stores, processors, and tests exist. |
| Constraints | <wa-badge variant="brand" pill>experimental</wa-badge> | Constraint metadata can influence validation, but public usage is not stable. |

FHIR IG support is an important part of the v1 direction. It is not yet a full
IG runtime. The current implementation is best understood as rendering support
plus early profiling, binding, and validation infrastructure.

## Profiles

Profiles are currently represented by experimental profiling code rather than a
stable public profile-loading workflow.

| Capability | Status | Notes |
| ---------- | ------ | ----- |
| Definition builder | <wa-badge variant="brand" pill>experimental</wa-badge> | Builder APIs exist for defining profile-like structures in code. |
| Extension builder | <wa-badge variant="brand" pill>experimental</wa-badge> | Extension definitions can be modeled for profile-aware work. |
| Slicing builder | <wa-badge variant="brand" pill>experimental</wa-badge> | Slice-related builder code exists, but docs and API guarantees are not stable. |
| Runtime profile loading from IG packages | <wa-badge variant="neutral" pill>planned</wa-badge> | Applications should not assume package-based IG loading is available. |
| Profile-specific renderer selection | <wa-badge variant="neutral" pill>planned</wa-badge> | Current rendering is primarily resource/type driven, not profile-dispatch driven. |

For now, treat profile support as an evolving internal capability. FHIR Beacon
can render profile-shaped data when the underlying resource and datatype fields
are supported, but it does not yet act as a complete IG-aware rendering engine.

## Extensions

`fhir-extension` renders FHIR `Extension` data. It detects simple extensions
with one `value[x]` property and complex extensions with nested `extension`
items.

Supported value rendering includes:

| Extension value shape | Status | Rendering path |
| --------------------- | ------ | -------------- |
| Primitive values such as `valueBoolean`, `valueCode`, `valueDate`, `valueDateTime`, `valueDecimal`, `valueId`, `valueInstant`, `valueInteger`, `valueMarkdown`, `valueString`, `valueTime`, `valueUri`, `valueUrl`, and `valueUuid` | <wa-badge variant="success" pill>available</wa-badge> | Rendered through `fhir-primitive` with matching primitive type handling. |
| Quantity-like values such as `valueAge`, `valueCount`, `valueDistance`, and `valueDuration` | <wa-badge variant="success" pill>available</wa-badge> | Rendered through `fhir-quantity`. |
| Complex values such as `valueAnnotation`, `valueAttachment`, `valueCodeableConcept`, `valueCoding`, `valueContactPoint`, `valueHumanName`, `valueIdentifier`, `valueMoney`, `valuePeriod`, `valueQuantity`, `valueRange`, `valueRatio`, `valueReference`, `valueSampledData`, `valueSignature`, and `valueTiming` | <wa-badge variant="success" pill>available</wa-badge> | Rendered through matching datatype components. |
| Other complex IG-related values such as `valueDataRequirement`, `valueDosage`, `valueExpression`, `valueParameterDefinition`, `valueRelatedArtifact`, `valueTriggerDefinition`, and `valueUsageContext` | <wa-badge variant="warning" pill>partial</wa-badge> | Rendered as JSON text because dedicated public components are not available yet. |
| Label mapping by canonical URL | <wa-badge variant="warning" pill>partial</wa-badge> | `labelMap` can provide friendlier labels for extension URLs. |
| Modifier extension semantics | <wa-badge variant="neutral" pill>planned</wa-badge> | Domain resource structure currently surfaces `modifierExtension` as not implemented. |

In display mode, extension labels are derived from the URL tail unless a label
map supplies a better name. In structure mode, the URL remains visible so the
reader can inspect the extension identity.

## Terminology

FHIR Beacon contains generated or imported FHIR R5 codesystem and valueset data
and has terminology processing utilities under the library source. This supports
code display, choices, and binding-oriented experiments, but it should not be
treated as a complete terminology server.

| Capability | Status | Notes |
| ---------- | ------ | ----- |
| Local FHIR R5 codesystem data | <wa-badge variant="brand" pill>experimental</wa-badge> | CodeSystem JSON files are present in the library source. |
| Local FHIR R5 valueset data | <wa-badge variant="brand" pill>experimental</wa-badge> | ValueSet JSON files and expanded valueset files are present. |
| Valueset processor and resolver tests | <wa-badge variant="brand" pill>experimental</wa-badge> | Tests cover processor, source, fetch, and resolver behavior. |
| Primitive/code rendering | <wa-badge variant="success" pill>available</wa-badge> | Coding and coded primitive display exists. |
| Remote terminology operations | <wa-badge variant="neutral" pill>planned</wa-badge> | `$expand`, `$validate-code`, subsumption, and remote terminology workflows are not a stable public feature. |

Applications that need authoritative terminology services should still integrate
with their own terminology infrastructure. FHIR Beacon can present coded data
and use local choices where available.

## Constraints

Constraint support is experimental. The component layer can surface validation
messages through common rendering paths, and profile validation tests exist, but
constraint handling is not yet a documented public contract.

| Constraint area | Status | Notes |
| --------------- | ------ | ----- |
| Required fields | <wa-badge variant="success" pill>available</wa-badge> | Components can mark values as required and show errors. |
| Primitive datatype validation | <wa-badge variant="success" pill>available</wa-badge> | Primitive validators exist for the supported scalar types. |
| Reference invariants | <wa-badge variant="warning" pill>partial</wa-badge> | `fhir-reference` checks basic `ref-1` and `ref-2` style cases. |
| Profile validation | <wa-badge variant="brand" pill>experimental</wa-badge> | Profile validation tests exist, but the public API is still changing. |
| FHIRPath constraint execution | <wa-badge variant="neutral" pill>planned</wa-badge> | Do not assume full FHIRPath invariant execution. |

## Implementation Sources

The current status is tied to these implementation surfaces:

- Profiling code in
  [`packages/library/src/profiling`](https://github.com/zenwork/fhir-beacon/tree/main/packages/library/src/profiling).
- Extension rendering in
  [`fhir-extension`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/special/extension/extension.ts).
- Valueset and codesystem code in
  [`packages/library/src/valuesets`](https://github.com/zenwork/fhir-beacon/tree/main/packages/library/src/valuesets)
  and [`packages/library/src/codes`](https://github.com/zenwork/fhir-beacon/tree/main/packages/library/src/codes).
- Component examples in [Storybook](https://fhir-beacon.deno.dev).
