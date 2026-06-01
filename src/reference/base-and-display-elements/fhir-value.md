---
layout: layouts/base.vto
title: fhir-value
order: 30
---

# fhir-value

| Item | Value |
| ---- | ----- |
| Catalog | [Base and Display Elements](../) |
| Category | Presentation Primitives |
| Class | `PrimitiveValue` |
| Superclass | `ShoelaceStyledElement` |
| Source | [primitive-value/primitive-value.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/primitive/primitive-value/primitive-value.ts) |
| Storybook | [Open Storybook](https://fhir-beacon.deno.dev) |

## Usage Skeleton

<code-example language="html">
&lt;fhir-value&gt;&lt;/fhir-value&gt;
</code-example>

## Attributes

| Name | Type | Default | Inherited from | Description |
| ---- | ---- | ------- | -------------- | ----------- |
| `link` | `string` | `''` |  |  |
| `placeholder` | `string` | `'n/a'` |  |  |
| `text` | `string` | `''` |  |  |
| `variant` | `string` |  |  | Value representation variants. accepted values: - `fixed-width` - flow large blocks of text to a specific width - `hide-overflow` - collapse large blocks of text - `checkbox` - show a checkbox instead of text. |

## Properties

| Name | Type | Default | Inherited from | Description |
| ---- | ---- | ------- | -------------- | ----------- |
| `afterSlot` | `Array<HTMLElement>` |  |  |  |
| `beforeSlot` | `Array<HTMLElement>` |  |  |  |
| `link` | `string` |  |  |  |
| `placeholder` | `string` |  |  |  |
| `text` | `string` |  |  |  |
| `variant` | `string` |  |  | Value representation variants. accepted values: - `fixed-width` - flow large blocks of text to a specific width - `hide-overflow` - collapse large blocks of text - `checkbox` - show a checkbox instead of text. |

## Events

No generated event metadata.

## Source Metadata

| Source | Value |
| ------ | ----- |
| Custom elements manifest | [build/custom-elements.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/custom-elements.json) |
| Web types metadata | [build/web-types.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/web-types.json) |
| Catalog | [Base and Display Elements](../) |
