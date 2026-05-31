---
layout: layouts/base.vto
title: Overview
order: 0
---

# Overview

FHIR Beacon is a UI library for rendering FHIR data directly in the browser.

The library is built with web components. A FHIR resource can be passed to a
matching custom element, and the element renders the FHIR-shaped data without
requiring a middle-tier layer to turn it into an app-specific view model first.

The examples may use Lit when a templating helper makes the sample easier to
read. Lit is not required to use FHIR Beacon. The components are custom elements
and can be used from plain HTML, JavaScript, TypeScript, or frontend frameworks
that support web components.

## The Architectural Idea

Many FHIR applications introduce a mapping layer between FHIR data and frontend
UI state. That can be useful, but it also adds duplicated semantics, extra
transformation code, and another place for FHIR-specific detail to disappear.

FHIR Beacon explores a different path:

- keep FHIR-shaped data visible to the UI layer
- use components that understand the FHIR model
- make customization possible without forcing every project to rebuild FHIR
  rendering from scratch

## What It Does Not Replace

FHIR Beacon does not remove the need for application architecture.

You still need to decide how your app handles:

- data loading
- authorization
- persistence
- orchestration
- workflow logic
- product-specific behavior

FHIR Beacon focuses on rendering and presenting FHIR data once it reaches the
UI.
