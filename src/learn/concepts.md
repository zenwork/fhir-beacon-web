---
layout: layouts/base.vto
title: Concepts
order: 4
---

# Concepts

These concepts explain how FHIR Beacon thinks about rendering FHIR data in a
frontend application.

## Rendering Model

FHIR Beacon components receive FHIR-shaped data through properties and render
that data directly. A resource-aware component, such as `fhir-patient`, expects
the matching FHIR resource shape. Datatype components, such as
`fhir-human-name`, `fhir-identifier`, or `fhir-codeable-concept`, focus on
smaller parts of a resource.

The rendering model has three important boundaries:

- the application owns data loading and decides which resources are available
- FHIR Beacon owns common presentation for known FHIR structures
- the application can still compose components into product-specific screens

This keeps FHIR semantics visible without making the component library
responsible for the whole application.

## Display Modes

FHIR data can appear in different contexts. A compact summary, a detailed record
view, and a diagnostic inspection view do not need the same density or emphasis.

FHIR Beacon treats display mode as a presentation concern. The same resource can
be rendered in a compact location, a larger page section, or a specialized
composition. The exact mode support depends on the component and is still
maturing, so use the [Reference](../../reference/) pages when you need the
current status for a specific resource or datatype.

## Resource-Aware Components

Resource-aware components encode common knowledge about a resource type. For
example, a Patient renderer can prioritize names, identifiers, gender, birth
date, contact details, and other patient-specific fields without every
application repeating the same display decisions.

That does not mean every Patient screen should be generic. A patient registration
workflow, chart header, search result, and admin audit screen may all compose the
same resource-aware component differently. FHIR Beacon provides the rendering
building blocks; the application still controls the screen.

## Context And Configuration

Some rendering decisions need context beyond a single value. Examples include
preferred display density, terminology display choices, reference resolution,
or project-specific rules for fields that should be highlighted.

FHIR Beacon is moving toward configuration that can be shared across a composed
screen without forcing every component call site to repeat the same settings.
Today, treat configuration as an integration boundary: keep project-specific
behavior near the application, and use FHIR Beacon components for the stable
FHIR rendering behavior that can be reused.

## Relationship To Storybook And The Showcase App

The docs site explains the architecture and teaches workflows. Storybook remains
the best place to inspect individual components, states, and visual coverage.
The showcase app is useful when you want to explore FHIR Beacon in a broader
application-like surface.

Use them together:

- Learn pages explain why the library works this way
- Guides show how to assemble practical screens
- Reference pages show current coverage and implementation status
- Storybook shows component-level behavior
- the showcase app shows broader exploration
