---
layout: layouts/base.vto
title: Overview
order: 0
---

# Overview

FHIR Beacon is a UI library for rendering FHIR data directly in the browser.

Read this page if you are deciding whether FHIR Beacon belongs in your frontend
architecture.

## The Architectural Idea

Most FHIR frontends map resources into app-specific view models before anything
is rendered. FHIR Beacon makes a different path practical:

- keep FHIR-shaped data visible to the UI layer
- pass a resource to the matching web component
- let FHIR-aware components render common structures

The point is not to remove application-specific screens. The point is to avoid
rewriting common FHIR display rules in every product.

## When It Helps

FHIR Beacon is useful when a screen needs to show FHIR data faithfully:

- record summaries
- admin and support views
- search results
- inspection and review screens
- product areas that need broad FHIR coverage

Use custom view models where a workflow really needs one. Use FHIR Beacon where
the FHIR shape is already the right model to render.

## What It Does Not Replace

FHIR Beacon is not an application framework. Your app still owns:

- data loading
- authorization
- persistence
- orchestration
- workflow logic
- product-specific behavior

FHIR Beacon starts after your frontend has a resource it is allowed to render.

## Where To Go Next

- Use [Getting Started](../getting-started/) to render a first resource.
- Use [Concepts](../concepts/) to understand the rendering model and
  customization boundaries.
- Use [Guides](../guides/) for task-oriented examples.
- Use [Reference](../../reference/) when you need current component and FHIR
  coverage.
