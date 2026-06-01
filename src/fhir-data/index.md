---
layout: layouts/base.vto
title: FHIR Data
order: 1
draft: true
---

# FHIR Data

FHIR Data is for readers who know FHIR and want to understand how FHIR Beacon
handles real FHIR data in the UI.

This section explains the current rendering behavior for FHIR R5 resources,
datatypes, implementation-guide concepts, and advanced FHIR data cases. It is
written from the current `fhir-beacon` implementation, so every page separates
what is available today from partial, experimental, and planned work.

Use this section when you need to answer questions such as:

- Can this resource or datatype render with a dedicated component?
- What happens when a reference points at another resource?
- How are profiles, extensions, terminology, and constraints represented?
- Which FHIR edge cases are supported, partial, or still planned?

For a complete item-by-item inventory, see the
[FHIR Reference](../reference/fhir-reference/).

## Chapters

- [Core](./core/) covers resources, datatypes, references, and bundles.
- [FHIR IGs](./fhir-igs/) covers profiles, extensions, terminology, and constraints.
- [Advanced Topics](./advanced-topics/) covers validation, slicing, choice types,
  contained resources, primitive extensions, unknown data, and special cases.
