---
layout: layouts/base.vto
title: fhir-badge-group
order: 20
---

# fhir-badge-group

| Item | Value |
| ---- | ----- |
| Catalog | [Base and Display Elements](../) |
| Category | Shell and Layout |
| Class | `BadgeGroup` |
| Superclass | `LitElement` |
| Source | [badge-group/badge-group.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/shell/layout/badge-group/badge-group.ts) |
| Storybook | [Open Storybook](https://fhir-beacon.deno.dev) |

## Usage Skeleton

<code-example language="html">
&lt;fhir-badge-group&gt;&lt;/fhir-badge-group&gt;
</code-example>

## Attributes

| Name | Type | Default | Inherited from | Description |
| ---- | ---- | ------- | -------------- | ----------- |
| `constraint` | `boolean` | `false` |  |  |
| `profile` | `string` | `''` |  |  |
| `required` | `boolean` | `false` |  |  |
| `resource` | `string` | `''` |  |  |
| `summary` | `boolean` | `false` |  |  |

## Properties

| Name | Type | Default | Inherited from | Description |
| ---- | ---- | ------- | -------------- | ----------- |
| `badges` | `{ label: string, type: BadgeType }[]` |  |  |  |
| `constraint` | `boolean` |  |  |  |
| `profile` | `string` |  |  |  |
| `required` | `boolean` |  |  |  |
| `resource` | `string` |  |  |  |
| `summary` | `boolean` |  |  |  |

## Events

No generated event metadata.

## Source Metadata

| Source | Value |
| ------ | ----- |
| Custom elements manifest | [build/custom-elements.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/custom-elements.json) |
| Web types metadata | [build/web-types.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/web-types.json) |
| Catalog | [Base and Display Elements](../) |
