---
layout: layouts/base.vto
title: Themes and CSS
order: 0
---

# Themes and CSS

Use themes and CSS when you want FHIR Beacon to match your app's visual style
without changing rendering logic.

This chapter is for users asking:

- How do I make FHIR Beacon match my app's visual style?
- Can I customize colors, spacing, typography, and states without changing
  rendering logic?
- How far can I get with CSS before replacing components?

## Current Coverage

| Area | Status | Notes |
| ---- | ------ | ----- |
| Web Awesome/Shoelace design tokens | <wa-badge variant="success" pill>available</wa-badge> | FHIR Beacon components use variables such as `--sl-color-primary-700`, `--sl-spacing-small`, and `--sl-border-radius-small`. |
| Host box sizing reset | <wa-badge variant="success" pill>available</wa-badge> | Shared host styles keep component internals predictable. |
| Text selection defaults | <wa-badge variant="success" pill>available</wa-badge> | Primitive text pieces allow text selection in their shadow DOM. |
| Narrative stylesheet override | <wa-badge variant="success" pill>available</wa-badge> | `fhir-narrative` can adopt a stylesheet from `#fhir-beacon-narrative`. |
| Formal CSS part API | <wa-badge variant="warning" pill>partial</wa-badge> | Some parts exist, but the public styling contract is not complete. |
| Full theme variable reference | <wa-badge variant="neutral" pill>planned</wa-badge> | The docs do not yet provide an exhaustive variable map. |

Start here before replacing components. CSS and theme work should be the
lowest-cost customization layer.

## Styling Defaults

FHIR Beacon components are web components. Many visual defaults live inside
component shadow DOM, so ordinary page CSS does not automatically reach every
internal element.

The library does, however, use shared design tokens from the Web
Awesome/Shoelace token set. App-level token changes can influence many FHIR
Beacon components without changing FHIR rendering logic. See the
[Shoelace themes and design tokens](https://shoelace.style/getting-started/themes#customizing-a-built-in-theme)
docs for the underlying token and theming model.

<code-example language="html">
&lt;style&gt;
  :root {
    --sl-color-primary-700: #24547a;
    --sl-color-danger-300: #d86b6b;
    --sl-spacing-small: 0.5rem;
    --sl-border-radius-small: 0.25rem;
  }
&lt;/style&gt;
</code-example>

This is useful for colors, spacing, border radii, and typography tokens that the
current components already consume.

## CSS Hooks

The most reliable hooks today are design tokens and documented component
properties. Directly styling internal shadow DOM selectors from the outside is
not a stable approach.

| Hook | Status | Use |
| ---- | ------ | --- |
| `:root` token overrides | <wa-badge variant="success" pill>available</wa-badge> | Adjust shared colors, spacing, font sizes, and border radii. |
| Element attributes such as `mode`, `headless`, `open`, and `summaryonly` | <wa-badge variant="success" pill>available</wa-badge> | Change rendering state without writing CSS. |
| CSS shadow parts | <wa-badge variant="warning" pill>partial</wa-badge> | Some components expose parts, such as narrative and wrapper surfaces, but this is not yet a complete API. |
| Class names inside shadow DOM | <wa-badge variant="neutral" pill>planned</wa-badge> | Treat internal class names as implementation detail. |

## Narrative Styling

FHIR narrative is special because it contains XHTML from the FHIR resource. The
`fhir-narrative` component looks for a stylesheet element with
`id="fhir-beacon-narrative"` and adopts its rules into the component shadow
root.

<code-example language="html">
&lt;style id="fhir-beacon-narrative"&gt;
  #formatted-narrative {
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }
  #formatted-narrative table.grid {
    border-collapse: collapse;
  }
  #formatted-narrative td,
  #formatted-narrative th {
    border: 1px solid var(--sl-color-neutral-300);
    padding: 0.25rem 0.5rem;
  }
&lt;/style&gt;
</code-example>

Use this for narrative-specific cleanup, not for resource-specific UI
composition. Narrative XHTML is supplied by the FHIR data and can vary widely
between systems.

## Design-System Alignment

For product UI alignment, prefer this order:

1. Set Web Awesome/Shoelace tokens in your application theme.
2. Use FHIR Beacon display properties such as `headless`, `summaryonly`,
   `verbose`, and `open`.
3. Use presentation primitives directly for custom field-level layouts.
4. Extend or override resource/type renderers only when the FHIR presentation
   needs to change.

This keeps most applications close to the default FHIR rendering model while
still allowing visual integration with a broader design system.

## Implementation Sources

- Shared host styles in
  [`packages/library/src/styles`](https://github.com/zenwork/fhir-beacon/tree/main/packages/library/src/styles).
- Wrapper styles in
  [`wrapper-styles.ts`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/shell/layout/wrapper/wrapper-styles.ts).
- Primitive styles in
  [`packages/library/src/components/primitive`](https://github.com/zenwork/fhir-beacon/tree/main/packages/library/src/components/primitive).
- Narrative stylesheet adoption in
  [`fhir-narrative`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/special/narrative/narrative.ts).
