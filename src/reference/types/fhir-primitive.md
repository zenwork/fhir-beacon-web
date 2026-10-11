---
layout: layouts/base.vto
title: fhir-primitive
order: 20
---

# fhir-primitive

| Item | Value |
| ---- | ----- |
| Catalog | [Types](../) |
| Category | Presentation Primitives |
| Class | `Primitive` |
| Superclass | `ConfigurableElement` |
| Source | [primitive/primitive.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/primitive/primitive.ts) |
| Storybook | [Open Storybook](https://fhir-beacon.deno.dev) |

## Usage Skeleton

<code-example language="html">
&lt;fhir-primitive&gt;&lt;/fhir-primitive&gt;
</code-example>

## Attributes

| Name | Type | Default | Inherited from | Description |
| ---- | ---- | ------- | -------------- | ----------- |
| `choices` | `Choice[]` |  |  |  |
| `context` | `string` |  |  |  |
| `delimiter` | `string` | `': '` |  |  |
| `errormessage` | `string` |  |  |  |
| `extension` | `FhirExtensionData<OpenType> \| null` | `null` |  |  |
| `input` | `boolean` |  | `ConfigurableElement` | Display primitive as an input field.  Setting the attribute overrides context-provided property. |
| `key` | `string` |  |  |  |
| `label` | `string` |  |  |  |
| `link` | `string` |  |  |  |
| `mode` | `DisplayMode` |  | `ConfigurableElement` | Retrieves the current display mode.  Setting the attribute overrides context-provided property. |
| `open` | `boolean` |  | `ConfigurableElement` | Display the content of the component in an open state  Setting the attribute overrides context-provided property. |
| `required` | `boolean` | `false` |  |  |
| `showerror` | `boolean` |  | `ConfigurableElement` | Determines whether error messages should be displayed.  Setting the attribute overrides context-provided property. |
| `showProvided` | `boolean` | `false` |  |  |
| `summary` | `boolean` | `false` |  |  |
| `summaryonly` | `boolean` |  | `ConfigurableElement` | Only display value if the priitive also has the summary attribute  Setting the attribute overrides context-provided property. |
| `translate` | `boolean` | `false` |  |  |
| `trialuse` | `boolean` | `false` |  |  |
| `type` | `PrimitiveType` |  |  |  |
| `value` | `string` |  |  |  |
| `value-path` | `string` |  |  |  |
| `variant` | `string` |  |  |  |
| `verbose` | `boolean` |  | `ConfigurableElement` | This property determines whether verbose mode is enabled.  Setting the attribute overrides context-provided property. |

## Properties

| Name | Type | Default | Inherited from | Description |
| ---- | ---- | ------- | -------------- | ----------- |
| `choices` | `Choice[]` |  |  |  |
| `context` | `string` |  |  |  |
| `delimiter` | `string` |  |  |  |
| `errormessage` | `string` |  |  |  |
| `extension` | `FhirExtensionData<OpenType> \| null` |  |  |  |
| `input` | `boolean` |  |  | Display primitive as an input field.  Setting the attribute overrides context-provided property. |
| `key` | `string` |  |  |  |
| `label` | `string` |  |  |  |
| `link` | `string` |  |  |  |
| `mode` | `DisplayMode` |  |  | Retrieves the current display mode.  Setting the attribute overrides context-provided property. |
| `open` | `boolean` |  |  | Display the content of the component in an open state  Setting the attribute overrides context-provided property. |
| `required` | `boolean` |  |  |  |
| `showerror` | `boolean` |  |  | Determines whether error messages should be displayed.  Setting the attribute overrides context-provided property. |
| `showProvided` | `boolean` |  |  |  |
| `summary` | `boolean` |  |  |  |
| `summaryonly` | `boolean` |  |  | Only display value if the priitive also has the summary attribute  Setting the attribute overrides context-provided property. |
| `translate` | `boolean` |  |  |  |
| `trialuse` | `boolean` |  |  |  |
| `type` | `PrimitiveType` |  |  |  |
| `value` | `string` |  |  |  |
| `valuePath` | `string` |  |  |  |
| `variant` | `string` |  |  |  |
| `verbose` | `boolean` |  |  | This property determines whether verbose mode is enabled.  Setting the attribute overrides context-provided property. |

## Events

No generated event metadata.

## Source Metadata

| Source | Value |
| ------ | ----- |
| Custom elements manifest | [build/custom-elements.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/custom-elements.json) |
| Web types metadata | [build/web-types.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/web-types.json) |
| Catalog | [Types](../) |
