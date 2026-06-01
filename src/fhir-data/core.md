---
layout: layouts/base.vto
title: Core
order: 0
draft: true
---

# Core

Core covers the FHIR data features most users need first: resources, datatypes,
references, and bundles.

This chapter is for users asking:

- How does FHIR Beacon render FHIR resources?
- How are datatypes displayed?
- What does FHIR Beacon do with references?
- How are bundles and related resources handled?

## Current Coverage

| Area                | Status                                                | Notes                                                                    |
|---------------------|-------------------------------------------------------|--------------------------------------------------------------------------|
| Resource components | <wa-badge variant="warning" pill>partial</wa-badge>   | Dedicated renderers exist for a first resource set.                      |
| Complex datatypes   | <wa-badge variant="success" pill>available</wa-badge> | Common complex datatypes have dedicated renderers.                       |
| Primitive support   | <wa-badge variant="success" pill>available</wa-badge> | Primitive rendering, formatting, and validation exist.                   |
| References          | <wa-badge variant="warning" pill>partial</wa-badge>   | Local display and contained references work; provider lookup is planned. |
| Bundles             | <wa-badge variant="warning" pill>partial</wa-badge>   | Bundle entries render supported resource types.                          |

## Resources

FHIR Beacon renders supported FHIR resources with resource-specific custom
elements. The application keeps FHIR-shaped JSON and passes it directly into the
matching element.

```ts
html`
  <fhir-patient .data=${patient}></fhir-patient>
  <fhir-observation .data=${observation} mode="structure"></fhir-observation>
`;
```

The current resource dispatcher recognizes these `resourceType` values:

| Resource                | Status                                                | Element                         | Notes |
| ----------------------- | ----------------------------------------------------- | ------------------------------- | ----- |
| `Account`               | <wa-badge variant="success" pill>available</wa-badge> | `fhir-account`                  | Includes account backbone renderers for balance, coverage, diagnosis, guarantor, procedure, and related account. |
| `Appointment`           | <wa-badge variant="success" pill>available</wa-badge> | `fhir-appointment`              | Includes participant and recurrence-template backbone renderers. |
| `Medication`            | <wa-badge variant="success" pill>available</wa-badge> | `fhir-medication`               | Includes batch and ingredient backbone renderers. |
| `Observation`           | <wa-badge variant="success" pill>available</wa-badge> | `fhir-observation`              | Includes component, reference-range, and triggered-by backbone renderers. |
| `Patient`               | <wa-badge variant="success" pill>available</wa-badge> | `fhir-patient`                  | Includes communication, contact, and link backbone renderers. |
| `Slot`                  | <wa-badge variant="success" pill>available</wa-badge> | `fhir-slot`                     | Appointment scheduling resource coverage. |
| `Substance`             | <wa-badge variant="success" pill>available</wa-badge> | `fhir-substance`                | Includes substance ingredient rendering. |
| `ObservationDefinition` | <wa-badge variant="warning" pill>partial</wa-badge>   | `fhir-observation-definition`   | Dedicated element exists, but generic resource dispatch does not currently route to it. |
| Other resources         | <wa-badge variant="neutral" pill>planned</wa-badge>   | `fhir-primitive` fallback       | Unsupported `resourceType` values render as unsupported resource text when reached through the generic dispatcher. |

Resource elements share the common display inputs described in the
[Learn overview](../../learn/overview/) and [Reference](../../reference/):
`data`, `mode`, `summaryonly`, `showerror`, `verbose`, `open`, `headless`,
`label`, and `key`.

## Datatypes

Complex datatypes render through dedicated datatype components. These components
are used inside resource renderers and can also be used directly when an
application wants to render a datatype value on its own.

| Datatype            | Status                                                | Element                    |
| ------------------- | ----------------------------------------------------- | -------------------------- |
| `Address`           | <wa-badge variant="success" pill>available</wa-badge> | `fhir-address`             |
| `Annotation`        | <wa-badge variant="success" pill>available</wa-badge> | `fhir-annotation`          |
| `Attachment`        | <wa-badge variant="success" pill>available</wa-badge> | `fhir-attachment`          |
| `CodeableConcept`   | <wa-badge variant="success" pill>available</wa-badge> | `fhir-codeable-concept`    |
| `CodeableReference` | <wa-badge variant="success" pill>available</wa-badge> | `fhir-codeable-reference`  |
| `Coding`            | <wa-badge variant="success" pill>available</wa-badge> | `fhir-coding`              |
| `ContactPoint`      | <wa-badge variant="success" pill>available</wa-badge> | `fhir-contact-point`       |
| `HumanName`         | <wa-badge variant="success" pill>available</wa-badge> | `fhir-human-name`          |
| `Identifier`        | <wa-badge variant="success" pill>available</wa-badge> | `fhir-identifier`          |
| `Money`             | <wa-badge variant="success" pill>available</wa-badge> | `fhir-money`               |
| `Period`            | <wa-badge variant="success" pill>available</wa-badge> | `fhir-period`              |
| `Quantity`          | <wa-badge variant="success" pill>available</wa-badge> | `fhir-quantity`            |
| `Range`             | <wa-badge variant="success" pill>available</wa-badge> | `fhir-range`               |
| `Ratio`             | <wa-badge variant="success" pill>available</wa-badge> | `fhir-ratio`               |
| `SampledData`       | <wa-badge variant="success" pill>available</wa-badge> | `fhir-sampled-data`        |
| `Signature`         | <wa-badge variant="success" pill>available</wa-badge> | `fhir-signature`           |
| `Timing`            | <wa-badge variant="success" pill>available</wa-badge> | `fhir-timing`              |

FHIR primitive datatypes render through `fhir-primitive`. The primitive layer
includes validators and formatters for FHIR scalar types such as `boolean`,
`code`, `date`, `dateTime`, `decimal`, `id`, `instant`, `integer`,
`positiveInt`, `time`, `unsignedInt`, `uri`, `url`, and `uuid`.

## References

`fhir-reference` handles the FHIR `Reference` datatype and chooses a display
path from the data that is present.

| Reference shape | Status                                                | Behavior |
| --------------- | ----------------------------------------------------- | -------- |
| `reference` plus optional `display` | <wa-badge variant="success" pill>available</wa-badge> | Renders a linked primitive using `display` when present and the raw reference otherwise. |
| `display` only | <wa-badge variant="success" pill>available</wa-badge> | Renders the display text as the readable value. |
| `identifier` only | <wa-badge variant="success" pill>available</wa-badge> | Renders the identifier with `fhir-identifier`. |
| Contained reference such as `#example` | <wa-badge variant="warning" pill>partial</wa-badge> | Can render a matching contained resource when it is available in the component context. |
| Extension-only reference | <wa-badge variant="neutral" pill>planned</wa-badge> | Detected, but currently reports that reference extension support is not implemented. |
| Remote/provider lookup | <wa-badge variant="neutral" pill>planned</wa-badge> | Applications still own loading and resolving external resources. |

Reference rendering is intentionally presentation-focused. It does not fetch
remote resources, follow authorization rules, or decide application navigation.
Those responsibilities remain in the host application.

## Bundles

`fhir-bundle` renders Bundle metadata and entries. It displays `identifier`,
`type`, `timestamp`, `total`, links, entries, signatures, and issues where
present.

Bundle entries use the same resource dispatcher as other nested resource
rendering. That means entries with currently supported resource types render as
resource components, while unsupported resource types fall back to an unsupported
resource message.

| Bundle feature | Status                                                | Notes |
| -------------- | ----------------------------------------------------- | ----- |
| Bundle metadata | <wa-badge variant="success" pill>available</wa-badge> | Identifier, type, timestamp, total, links, signature, and issues are represented. |
| Entry resources | <wa-badge variant="warning" pill>partial</wa-badge>   | Supported resources render; unsupported resources use fallback output. |
| Search, request, and response entry data | <wa-badge variant="success" pill>available</wa-badge> | Structure mode exposes search, request, and response fields. |
| Bundle-driven workflows | <wa-badge variant="neutral" pill>planned</wa-badge> | Transaction semantics, persistence, and orchestration belong outside the renderer. |

## Implementation Sources

The current status is tied to these implementation surfaces:

- Resource and datatype components in
  [`packages/library/src/components`](https://github.com/zenwork/fhir-beacon/tree/main/packages/library/src/components).
- Resource dispatch in
  [`renderResourceComponent.ts`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/internal/resource/renderResourceComponent.ts).
- Component examples in [Storybook](https://fhir-beacon.deno.dev).
- The complete coverage matrix in [FHIR Reference](../../reference/fhir-reference/).
