---
layout: layouts/base.vto
title: Core
order: 0
---

# Core

Core covers the FHIR data features most users need first.

This chapter is for users asking:

- How does FHIR Beacon render FHIR resources?
- How are datatypes displayed?
- What does FHIR Beacon do with references?
- How are bundles and related resources handled?

## Current Coverage

| Area                | Status                                                | Notes                                                             |
| ------------------- | ----------------------------------------------------- | ----------------------------------------------------------------- |
| Resource components | <wa-badge variant="warning" pill>partial</wa-badge>   | A first resource set is implemented.                              |
| Complex datatypes   | <wa-badge variant="warning" pill>partial</wa-badge>   | Common complex datatypes are implemented.                         |
| Primitive support   | <wa-badge variant="success" pill>available</wa-badge> | Primitive rendering, formatting, and validation exist.            |
| References          | <wa-badge variant="success" pill>available</wa-badge> | Reference rendering exists; provider-based resolution is planned. |
| Bundles             | <wa-badge variant="warning" pill>partial</wa-badge>   | Bundle support exists, with more docs and workflows still needed. |

## Implemented Resource Components

- Account
- Appointment
- Medication
- Observation
- ObservationDefinition
- Patient
- Slot
- Substance

## Implemented Complex Datatypes

- Address
- Annotation
- Attachment
- CodeableConcept
- CodeableReference
- Coding
- ContactPoint
- HumanName
- Identifier
- Money
- Period
- Quantity
- Range
- Ratio
- SampledData
- Signature
- Timing
