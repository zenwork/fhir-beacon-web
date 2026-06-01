---
layout: layouts/base.vto
title: Customize
order: 2
---

# Customize

Customization is for frontend developers who want to adapt how FHIR Beacon looks
and renders.

The customization model has levels. Start with CSS and design-system tokens.
Use presentation primitives when you need field-level control. Move to datatype
or resource rendering only when the FHIR-specific output needs to change.

## Current Levels

| Level                                           | Status                                                 | Use when                                                                                                              |
|-------------------------------------------------|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| CSS and Web Awesome tokens                      | <wa-badge variant="success" pill>available</wa-badge>  | The default rendering is structurally right, but needs to match your app's visual system.                             |
| Narrative stylesheet override                   | <wa-badge variant="success" pill>available</wa-badge>  | You need to style FHIR narrative XHTML inside `fhir-narrative`.                                                       |
| Presentation primitives                         | <wa-badge variant="success" pill>available</wa-badge>  | You need direct control over labels, values, errors, context, and wrappers.                                           |
| Shell-level display configuration               | <wa-badge variant="success" pill>available</wa-badge>  | You want consistent `mode`, `verbose`, `open`, `summaryonly`, `showerror`, or `input` behavior across child elements. |
| Extending existing datatype or resource classes | <wa-badge variant="warning" pill>partial</wa-badge>    | You need custom rendering or validation for a FHIR type and are comfortable working with the library's internal APIs. |
| Resource template override                      | <wa-badge variant="brand" pill>experimental</wa-badge> | You need a custom resource layout and can tolerate changing APIs.                                                     |
| Stable template override API                    | <wa-badge variant="neutral" pill>planned</wa-badge>    | You need a supported, documented override mechanism for production use.                                               |

The preferred path is to customize at the lowest level that solves the problem.
CSS changes are easiest to maintain. Custom renderers have more power, but they
also take ownership of more FHIR presentation behavior.

## Chapters

- [Themes and CSS](./themes-and-css/) covers styling defaults, theme tokens,
  narrative styling, and design-system alignment.
- [Presentation Primitives](./presentation-primitives/) covers wrapper, label,
  value, error, context, and field layout pieces.
- [Type and Resource Rendering](./type-and-resource-rendering/) covers custom
  datatype/resource rendering and the current experimental template override
  path.
