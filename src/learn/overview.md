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

The goal is not to make every application screen look the same. The goal is to
make the default path honest about the data model. A `Patient` is rendered as a
Patient, a `CodeableConcept` is rendered as a coded concept, and a `Bundle` can
remain a Bundle instead of being flattened into an unrelated UI-only shape
before it reaches the component tree.

That matters because FHIR carries meaning in structure. Extensions, references,
primitive values, repeated elements, codings, and narrative all have rules that
can be lost when a frontend treats resources as generic JSON. FHIR Beacon keeps
those structures close to the UI so the rendering layer can make informed
decisions.

## What It Challenges

FHIR Beacon challenges the assumption that every frontend needs a custom view
model before it can render clinical or administrative data.

That conventional approach is often reasonable when a screen is a highly
specific workflow. But it becomes expensive when the product needs broad FHIR
coverage, many resource types, or inspection-oriented views where preserving
FHIR shape is more important than compressing the data into one task-specific
object.

The library takes a narrower position:

- use app-specific view models when a workflow needs them
- avoid view models when the goal is to present FHIR data faithfully
- centralize common FHIR rendering behavior in reusable components
- keep escape hatches for styling, configuration, and custom rendering

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

It also does not validate resource conformance, enforce authorization rules, or
decide which data a user is allowed to see. Those responsibilities stay in the
application, API, identity, and persistence layers. FHIR Beacon assumes the
frontend has already received data that is appropriate to render.

## Where To Go Next

- Use [Getting Started](../getting-started/) to render a first resource.
- Use [Concepts](../concepts/) to understand the rendering model and
  customization boundaries.
- Use [Guides](../guides/) for task-oriented examples.
- Use [Reference](../../reference/) when you need current component and FHIR
  coverage.
