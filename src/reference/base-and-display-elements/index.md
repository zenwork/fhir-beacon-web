---
layout: layouts/base.vto
title: Base and Display Elements
order: 3
---

# Base and Display Elements

Shell, layout, display primitive, and utility custom elements used to compose FHIR rendering.

## Shell and Layout

| Element | Class | Notable attributes | Source |
| ------- | ----- | ------------------ | ------ |
| [`fhir-badge-group`](./fhir-badge-group/) | `BadgeGroup` | `constraint`, `profile`, `resource` | [badge-group/badge-group.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/shell/layout/badge-group/badge-group.ts) |
| [`fhir-empty-list`](./fhir-empty-list/) | `EmptySet` | none | [layout/empty-set.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/shell/layout/empty-set.ts) |
| [`fhir-shell`](./fhir-shell/) | `Shell` | common FHIR inputs | [shell/shell.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/shell/shell.ts) |
| [`fhir-system-choice`](./fhir-system-choice/) | `SystemChoice` | `error`, `overridable`, `value`, `valuesets` | [combo/systemChoice.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/shell/layout/combo/systemChoice.ts) |
| [`fhir-wrapper`](./fhir-wrapper/) | `Wrapper` | `badge-constraint`, `badge-profile`, `badge-required`, `badge-resource`, `badge-summary`, `variant` | [wrapper/wrapper.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/shell/layout/wrapper/wrapper.ts) |

## Presentation Primitives

| Element | Class | Notable attributes | Source |
| ------- | ----- | ------------------ | ------ |
| [`fhir-context`](./fhir-context/) | `PrimitiveContext` | `text` | [primitive-context/primitive-context.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/primitive/primitive-context/primitive-context.ts) |
| [`fhir-error`](./fhir-error/) | `PrimitiveError` | `text` | [primitive-error/primitive-error.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/primitive/primitive-error/primitive-error.ts) |
| [`fhir-label`](./fhir-label/) | `PrimitiveLabel` | `delimiter`, `for`, `text`, `variant` | [primitive-label/primitive-label.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/primitive/primitive-label/primitive-label.ts) |
| [`fhir-not-supported`](./fhir-not-supported/) | `NotSupported` | `description`, `error`, `variant` | [primitive/not-supported.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/primitive/not-supported.ts) |
| [`fhir-primitive-wrapper`](./fhir-primitive-wrapper/) | `PrimitiveWrapper` | none | [primitive-wrapper/primitive-wrapper.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/primitive/primitive-wrapper/primitive-wrapper.ts) |
| [`fhir-value`](./fhir-value/) | `PrimitiveValue` | `link`, `placeholder`, `text`, `variant` | [primitive-value/primitive-value.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/primitive/primitive-value/primitive-value.ts) |

## Utilities

| Element | Class | Notable attributes | Source |
| ------- | ----- | ------------------ | ------ |
| [`fhir-debug`](./fhir-debug/) | `Debug` | `data` | [debug/debug.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/utilities/debug/debug.ts) |

