---
layout: layouts/base.vto
title: Concepts
order: 4
---

# Concepts

Read this page when you need the basic vocabulary used across the docs.

## Rendering Model

FHIR Beacon components receive FHIR-shaped data and render it directly.

Example: `fhir-patient` receives a Patient resource. Datatype components such as
`fhir-human-name` or `fhir-identifier` render smaller FHIR structures.

The boundary is simple:

- app code gets the right data
- FHIR Beacon renders known FHIR structures
- app code owns the surrounding screen

## Display Modes

The same resource may need different density in different screens: compact
summary, full detail, or inspection view.

Mode support is component-specific and still maturing. Check
[Reference](../../reference/) when a screen depends on a specific resource or
datatype.

## Resource-Aware Components

Resource-aware components know the shape of a resource type.

For example, a Patient renderer can handle names, identifiers, gender, birth
date, and contact details without every app rebuilding that display logic.

## Context And Configuration

Some rendering choices need context: density, terminology display, reference
resolution, or project-specific emphasis.

Treat those choices as an integration boundary. Keep product rules in the app;
use FHIR Beacon for reusable FHIR rendering.

## Relationship To Storybook And The Showcase App

- Learn explains the model.
- Guides show task-oriented usage.
- Reference shows coverage and status.
- Storybook shows individual components.
- The showcase app shows broader exploration.
