---
layout: layouts/base.vto
title: fhir-system-choice
order: 23
---

# fhir-system-choice

| Item | Value |
| ---- | ----- |
| Catalog | [Base and Display Elements](../) |
| Category | Shell and Layout |
| Class | `SystemChoice` |
| Superclass | `LitElement` |
| Source | [combo/systemChoice.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/shell/layout/combo/systemChoice.ts) |
| Storybook | [Open Storybook](https://fhir-beacon.deno.dev) |

## Usage Skeleton

<code-example language="html">
&lt;fhir-system-choice&gt;&lt;/fhir-system-choice&gt;
</code-example>

## Attributes

| Name | Type | Default | Inherited from | Description |
| ---- | ---- | ------- | -------------- | ----------- |
| `error` | `string` | `''` |  |  |
| `label` | `string` | `''` |  |  |
| `overridable` | `boolean` | `false` |  |  |
| `value` | `string` | `''` |  |  |
| `valuesets` | `{ value: string, label: string }[]` |  |  |  |

## Properties

| Name | Type | Default | Inherited from | Description |
| ---- | ---- | ------- | -------------- | ----------- |
| `error` | `string` |  |  |  |
| `label` | `string` |  |  |  |
| `overridable` | `boolean` |  |  |  |
| `value` | `string` |  |  |  |
| `valuesets` | `{ value: string, label: string }[]` |  |  |  |

## Events

| Event | Description |
| ----- | ----------- |
| `fhir-system-choice` |  |

## Source Metadata

| Source | Value |
| ------ | ----- |
| Custom elements manifest | [build/custom-elements.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/custom-elements.json) |
| Web types metadata | [build/web-types.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/web-types.json) |
| Catalog | [Base and Display Elements](../) |
