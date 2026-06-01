---
layout: layouts/base.vto
title: fhir-human-name
order: 27
---

# fhir-human-name

| Item | Value |
| ---- | ----- |
| Catalog | [Complex Types](../) |
| Category | Data Type Components |
| Class | `HumanName` |
| Superclass | `BaseElement` |
| Source | [human-name/human-name.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/human-name/human-name.ts) |
| Storybook | [Open Storybook](https://fhir-beacon.deno.dev) |

## Usage Skeleton

<code-example language="html">
&lt;fhir-human-name .data=${data}&gt;&lt;/fhir-human-name&gt;
</code-example>

## Attributes

| Name | Type | Default | Inherited from | Description |
| ---- | ---- | ------- | -------------- | ----------- |
| `data` | `T` | `NoDataObject` | `FhirDataElement` | Element data |
| `data-path` | `string` |  | `FhirDataElement` |  |
| `headless` | `boolean` | `false` | `FhirPresentableElement` |  |
| `input` | `boolean` |  | `ConfigurableElement` | Display primitive as an input field.  Setting the attribute overrides context-provided property. |
| `key` | `string` | `'nokey'` | `FhirDataElement` | The key the element is known as in its parent data structure |
| `label` | `string` | `''` | `FhirPresentableElement` |  |
| `mode` | `DisplayMode` |  | `ConfigurableElement` | Retrieves the current display mode.  Setting the attribute overrides context-provided property. |
| `open` | `boolean` |  | `ConfigurableElement` | Display the content of the component in an open state  Setting the attribute overrides context-provided property. |
| `required` | `boolean` | `false` | `FhirPresentableElement` |  |
| `showerror` | `boolean` |  | `ConfigurableElement` | Determines whether error messages should be displayed.  Setting the attribute overrides context-provided property. |
| `summary` | `boolean` | `false` | `FhirPresentableElement` |  |
| `summaryonly` | `boolean` |  | `ConfigurableElement` | Only display value if the priitive also has the summary attribute  Setting the attribute overrides context-provided property. |
| `verbose` | `boolean` |  | `ConfigurableElement` | This property determines whether verbose mode is enabled.  Setting the attribute overrides context-provided property. |

## Properties

| Name | Type | Default | Inherited from | Description |
| ---- | ---- | ------- | -------------- | ----------- |
| `data` | `T` |  |  | Element data |
| `dataContext` | `FhirDataContext` |  |  |  |
| `dataPath` | `string` |  |  |  |
| `errors` | `ValidationErrors` |  |  | An array of objects representing validation errors. |
| `headless` | `boolean` |  |  |  |
| `input` | `boolean` |  |  | Display primitive as an input field.  Setting the attribute overrides context-provided property. |
| `key` | `string` |  |  | The key the element is known as in its parent data structure |
| `label` | `string` |  |  |  |
| `mode` | `DisplayMode` |  |  | Retrieves the current display mode.  Setting the attribute overrides context-provided property. |
| `open` | `boolean` |  |  | Display the content of the component in an open state  Setting the attribute overrides context-provided property. |
| `profile` | `StructureDefinition<T> \| undefined` |  |  | Represents the structure definition of a generic type `T` or is undefined.  This variable is used to define the structure of a type, allowing for type validation or enforcement. It may be undefined if no structure is provided or applicable. |
| `required` | `boolean` |  |  |  |
| `showerror` | `boolean` |  |  | Determines whether error messages should be displayed.  Setting the attribute overrides context-provided property. |
| `summary` | `boolean` |  |  |  |
| `summaryonly` | `boolean` |  |  | Only display value if the priitive also has the summary attribute  Setting the attribute overrides context-provided property. |
| `verbose` | `boolean` |  |  | This property determines whether verbose mode is enabled.  Setting the attribute overrides context-provided property. |

## Events

No generated event metadata.

## Source Metadata

| Source | Value |
| ------ | ----- |
| Custom elements manifest | [build/custom-elements.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/custom-elements.json) |
| Web types metadata | [build/web-types.json](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/web-types.json) |
| Catalog | [Complex Types](../) |
