---
layout: layouts/base.vto
title: Overview
order: 0
---

# Overview

FHIR Beacon is a frontend library for rendering FHIR R5 data directly in the
browser.

Use it when your application already has FHIR-shaped JSON and needs a faithful
browser UI for those resources.

## Core Idea

Most FHIR frontends convert resources into app-specific view models before
rendering. FHIR Beacon keeps the FHIR shape visible:

- pass a Patient resource to `<fhir-patient>`
- pass an Observation resource to `<fhir-observation>`
- let FHIR-aware components render known resource and datatype structures

The goal is not to replace product screens. The goal is to avoid rebuilding the
same FHIR display logic in every frontend.

## Where It Fits

FHIR Beacon fits screens that need to show FHIR data as FHIR:

- record summaries
- admin and support views
- search results
- inspection and review screens
- broad FHIR data browsers

Use custom view models when a workflow needs product-specific behavior. Use
FHIR Beacon when the FHIR resource is already the right thing to render.

## Application Boundary

FHIR Beacon is not an application framework. Your app still owns:

- data loading
- authorization
- persistence
- orchestration
- workflow logic
- product-specific behavior

FHIR Beacon starts when your frontend has FHIR data it is allowed to display.

## Where To Go Next

- Use [Getting Started](../getting-started/) to render a first resource.
- Use [Concepts](../concepts/) for the core vocabulary.
- Use [Examples](../examples/) for focused usage patterns.
- Use [Reference](../../reference/) when you need current component and FHIR
  coverage.
