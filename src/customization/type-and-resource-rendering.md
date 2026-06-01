---
layout: layouts/base.vto
title: Type and Resource Rendering
order: 2
---

# Type and Resource Rendering

Use type and resource rendering customization when you need to change how
specific FHIR structures render.

This chapter is for users asking:

- Can I render CodeableConcept differently?
- Can I render HumanName in our preferred style?
- Can I create a custom layout for Observation?
- Can I change how a datatype or resource renders everywhere?

## Current Status

| Customization path | Status | Notes |
| ------------------ | ------ | ----- |
| Shell display configuration | <wa-badge variant="success" pill>available</wa-badge> | `fhir-shell` can provide shared display configuration to child components. |
| Extending existing components | <wa-badge variant="warning" pill>partial</wa-badge> | Existing classes can be extended, but this uses library internals that may change. |
| Creating custom context-aware elements | <wa-badge variant="brand" pill>experimental</wa-badge> | `FhirContextElement` can read data from parent resource context by `data-path`. |
| Resource `override-template` | <wa-badge variant="brand" pill>experimental</wa-badge> | A Storybook example exists, but the API is not stable. |
| Stable template override system | <wa-badge variant="neutral" pill>planned</wa-badge> | Planned work; do not treat current template override behavior as final. |

## Shell-Level Rendering Configuration

Use `fhir-shell` when you want a group of components to share display behavior.
The shell provides context for child elements.

<code-example language="html">
&lt;fhir-shell mode="structure" open verbose&gt;
  &lt;fhir-patient .data=${patient}&gt;&lt;/fhir-patient&gt;
  &lt;fhir-observation .data=${observation}&gt;&lt;/fhir-observation&gt;
&lt;/fhir-shell&gt;
</code-example>

Current shell properties:

| Property | Status | Effect |
| -------- | ------ | ------ |
| `mode` | <wa-badge variant="success" pill>available</wa-badge> | Sets display mode such as `display`, `structure`, `narrative`, `debug`, or `override`. |
| `open` | <wa-badge variant="success" pill>available</wa-badge> | Opens details-style structure sections where supported. |
| `verbose` | <wa-badge variant="success" pill>available</wa-badge> | Shows additional context and empty fields where supported. |
| `showerror` | <wa-badge variant="success" pill>available</wa-badge> | Shows validation or rendering messages where available. |
| `summaryonly` | <wa-badge variant="success" pill>available</wa-badge> | Limits output to FHIR summary-marked fields where supported. |
| `input` | <wa-badge variant="warning" pill>partial</wa-badge> | Enables input rendering for supported primitives; broader form support is still evolving. |

## Overriding Datatype Rendering

For datatype changes, the current extension path is to create your own element
from an existing datatype class and override the rendering method you need.
This registers a new element; it does not globally replace every built-in
`fhir-human-name` render.

<code-example language="typescript">
import {
  HumanName,
  type Decorated,
  type DisplayConfig,
  type HumanNameData,
} from "fhir-beacon";
import { html } from "lit";
import type { TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
@customElement("my-human-name")
export class MyHumanName extends HumanName {
  override renderDisplay(
    _config: DisplayConfig,
    data: Decorated&lt;HumanNameData&gt;,
  ): TemplateResult[] {
    const displayName = [
      ...(data.prefix ?? []),
      ...(data.given ?? []),
      data.family,
      ...(data.suffix ?? []),
    ]
      .filter(Boolean)
      .join(" ");
    return [
      html`
        &lt;fhir-value
          .text=${displayName}
          placeholder="No name"
        &gt;&lt;/fhir-value&gt;
      `,
    ];
  }
}
</code-example>

You would use `my-human-name` in custom composition or an override template.
This is powerful, but it is a partial customization path because it depends on
the library's TypeScript classes, render method signatures, and decorated data
model.

## Overriding Resource Rendering

Resources inherit from `Resource` and `DomainResource` classes and implement
rendering methods such as `renderDisplay`, `renderStructure`, and
`renderNarrative`. Extending a resource class follows the same pattern as
datatype extension, with a larger maintenance surface.

Use this when:

- a whole resource needs a different domain-specific layout
- default field ordering is wrong for your product workflow
- you need custom validation or decoration before rendering
- CSS and presentation primitives are not enough

Avoid it when the default resource structure is right and only colors, spacing,
or labels need adjustment.

## Resource-Specific Custom Layouts

The current experimental template path uses `override-template` on a resource.
The Storybook customization example applies this to `fhir-medication`:

<code-example language="html">
&lt;fhir-shell&gt;
  &lt;fhir-medication .data=${medication} override-template="medication-card"&gt;
    &lt;template id="medication-card"&gt;
      &lt;sl-card&gt;
        &lt;h4 slot="header"&gt;
          &lt;fhir-primitive value-path="$.code.coding[0].display"&gt;&lt;/fhir-primitive&gt;
        &lt;/h4&gt;
        &lt;fhir-codeable-concept
          key="dose"
          data-path="$.doseForm"
          mode="display"
        &gt;&lt;/fhir-codeable-concept&gt;
      &lt;/sl-card&gt;
    &lt;/template&gt;
  &lt;/fhir-medication&gt;
&lt;/fhir-shell&gt;
</code-example>

The important idea is that custom elements can still use FHIR Beacon datatype
and primitive renderers inside a custom layout. That keeps some FHIR rendering
behavior while letting the application own the composition.

This path is experimental because the current implementation clones a template
into the resource shadow root and relies on context/data-path behavior that is
still being designed.

## Context-Aware Custom Elements

`FhirContextElement` is an experimental helper for custom elements that need to
read a value from parent FHIR data with `data-path`.

<code-example language="typescript">
import { FhirContextElement } from "fhir-beacon";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit";
@customElement("my-context-value")
export class MyContextValue extends FhirContextElement {
  @property()
  label = "";
  constructor() {
    super(null);
  }
  protected render() {
    return html`${this.label}: ${this.value}`;
  }
}
</code-example>

Use this for experiments and local app code. Treat it as unstable until the
template override and context APIs are documented as public.

## Planned Template Override Work

Template override work is planned and still evolving. The current Storybook
example proves the direction, but the final design still needs clearer answers
for:

- how templates are discovered and scoped
- how data paths are expressed and validated
- how custom elements receive FHIR context
- how override templates interact with display modes
- how applications can override datatype rendering globally or per resource
- which parts of the API are public and versioned

Until that work stabilizes, production applications should prefer CSS, shell
configuration, and direct composition with presentation primitives before using
`override-template`.

Backlog and design work are tracked in the project's public planning space:
[FHIR Beacon project backlog](https://github.com/users/zenwork/projects/4).

## Implementation Sources

- Shell context in
  [`fhir-shell`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/shell/shell.ts).
- Base rendering hooks in
  [`BaseElement`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/internal/BaseElement.ts).
- Resource template override code in
  [`Resource.ts`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/internal/resource/Resource.ts).
- Context-aware custom element helper in
  [`FhirContextElement`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/internal/customization/fhir-context-element.ts).
- Current customization example in
  [`custom.stories.ts`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/stories/toolkit/custom.stories.ts).
