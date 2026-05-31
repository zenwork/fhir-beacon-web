---
layout: layouts/base.vto
title: Concepts
order: 4
---

# Concepts

The Learn pages use these terms when describing `fhir-beacon`.

## Rendering Model

FHIR Beacon renders FHIR-shaped JSON with matching custom elements.

Examples:

- `<fhir-patient>` renders Patient resources
- `<fhir-observation>` renders Observation resources
- `<fhir-human-name>` and `<fhir-identifier>` render FHIR datatypes

Your app chooses the data and the surrounding workflow. FHIR Beacon renders the
FHIR structures.

## Display Modes

FHIR Beacon elements support display modes for different inspection needs:

- `display` for the default reader view
- `structure` for a more explicit model-oriented view
- `narrative` for FHIR narrative content
- `debug` for inspection
- `override` for custom rendering paths

Mode support is still maturing. Check [Reference](../../reference/) before
depending on a mode for a specific resource or datatype.

## Resource-Aware Components

Resource components know the FHIR shape they render.

For example, `<fhir-patient>` can render patient identifiers, names, contact
details, gender, birth date, and other Patient fields without every product
implementing those display rules again.

## Common Properties

Most FHIR Beacon elements share the same integration surface:

- `data` passes the FHIR JSON to render
- `mode` selects display, structure, narrative, debug, or override rendering
- `summaryonly` limits output to FHIR summary fields
- `showerror` displays validation or rendering errors
- `verbose` shows fields even when data is missing
- `open` expands structure sections where supported
- `headless` hides labels where supported

## Relationship To Storybook And The Showcase App

- Learn explains the library model.
- Examples show focused usage patterns.
- Reference shows current coverage and status.
- Storybook is the component catalog.
- The showcase app demonstrates broader integration use cases.
