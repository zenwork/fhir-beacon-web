---
layout: layouts/base.vto
title: Presentation Primitives
order: 1
---

# Presentation Primitives

Presentation primitives are the static display pieces that shape field-level
output while keeping the FHIR rendering model intact.

This chapter is for users asking:

- Can I replace how keys and values are displayed?
- Can I change the error or field layout without changing FHIR rendering?
- How do I keep the data rendering model but use my own visual primitives?

## Current Primitive Pieces

| Piece | Status | Element | Purpose |
| ----- | ------ | ------- | ------- |
| Wrapper | <wa-badge variant="success" pill>available</wa-badge> | `fhir-wrapper` | Groups fields and controls plain, details, and error wrapper layout. |
| Label | <wa-badge variant="success" pill>available</wa-badge> | `fhir-label` | Displays a field label and delimiter. |
| Value | <wa-badge variant="success" pill>available</wa-badge> | `fhir-value` | Displays text, links, placeholders, checkboxes, and long-value variants. |
| Error | <wa-badge variant="success" pill>available</wa-badge> | `fhir-error` | Displays validation or rendering messages. |
| Context | <wa-badge variant="success" pill>available</wa-badge> | `fhir-context` | Displays secondary contextual text such as code or type details. |
| Badges | <wa-badge variant="success" pill>available</wa-badge> | `fhir-badge-group` | Shows summary, required, constraint, resource, and profile badges in structure views. |
| Field layout contract | <wa-badge variant="warning" pill>partial</wa-badge> | `fhir-primitive` composition | The primitive composition is usable, but the formal replacement API is still evolving. |

These primitives are the middle customization layer between CSS-only styling and
full type/resource renderer overrides.

## Wrapper

`fhir-wrapper` groups one or more rendered fields. It supports these variants:

| Variant | Status | Behavior |
| ------- | ------ | -------- |
| `none` | <wa-badge variant="success" pill>available</wa-badge> | Renders a label and ordered list of child items. |
| `details` | <wa-badge variant="success" pill>available</wa-badge> | Renders a collapsible Web Awesome/Shoelace details surface. |
| `error` | <wa-badge variant="success" pill>available</wa-badge> | Renders an error-styled wrapper. |

Common properties include `label`, `headless`, `open`, `summary`, and
`summaryonly`. Structure-mode wrappers can also display badges for resource,
summary, constraint, required, and profile metadata.

<code-example language="html">
&lt;fhir-wrapper label="name" variant="details" open&gt;
  &lt;fhir-primitive label="given" value="Ada"&gt;&lt;/fhir-primitive&gt;
  &lt;fhir-primitive label="family" value="Lovelace"&gt;&lt;/fhir-primitive&gt;
&lt;/fhir-wrapper&gt;
</code-example>

## Label

`fhir-label` renders field names. It accepts `text`, `delimiter`, `variant`, and
`for`. The default delimiter is `:`.

<code-example language="html">
&lt;fhir-label text="identifier" delimiter=": "&gt;&lt;/fhir-label&gt;
</code-example>

Use labels directly when building custom field layouts from the low-level
pieces.

## Value

`fhir-value` renders the readable value. It supports:

- `text` for the displayed value
- `link` for clickable values
- `placeholder` for missing values
- `variant="fixed-width"` for long text wrapping
- `variant="hide-overflow"` for collapsed long text
- `variant="checkbox"` for boolean-style display
- `before` and `after` slots for units, prefixes, or suffixes

<code-example language="html">
&lt;fhir-value text="100"&gt;
  &lt;span slot="after"&gt;mg&lt;/span&gt;
&lt;/fhir-value&gt;
</code-example>

## Error

`fhir-error` renders a message when `text` is provided.

<code-example language="html">
&lt;fhir-error text="Value is required"&gt;&lt;/fhir-error&gt;
</code-example>

Most applications should let FHIR Beacon components pass validation messages
into errors. Use `fhir-error` directly when composing custom field displays.

## Context

`fhir-context` renders secondary contextual information in parentheses. FHIR
Beacon uses this for details such as coded context or verbose type information.

<code-example language="html">
&lt;fhir-context text="http://loinc.org"&gt;&lt;/fhir-context&gt;
</code-example>

## Field Layout

`fhir-primitive` composes these pieces into the common field-level display:

<code-example language="html">
&lt;li&gt;
  &lt;fhir-label text="status" delimiter=": "&gt;&lt;/fhir-label&gt;
  &lt;fhir-value text="final"&gt;&lt;/fhir-value&gt;
  &lt;fhir-context text="code"&gt;&lt;/fhir-context&gt;
&lt;/li&gt;
</code-example>

You can use the primitive pieces directly when CSS is not enough but you do not
want to replace an entire FHIR datatype or resource renderer.

## Implementation Sources

- Primitive composition in
  [`fhir-primitive`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/primitive/primitive.ts).
- Wrapper implementation in
  [`fhir-wrapper`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/shell/layout/wrapper/wrapper.ts).
- Primitive pieces in
  [`packages/library/src/components/primitive`](https://github.com/zenwork/fhir-beacon/tree/main/packages/library/src/components/primitive).
- Layout examples in [Storybook](https://fhir-beacon.deno.dev).
