---
layout: layouts/base.vto
title: Presentation Primitives
order: 1
---

# Presentation Primitives

Presentation primitives are the static display pieces that shape field-level
output while keeping the FHIR rendering model intact.

This chapter is for users asking:

- Can I replace how keys and values are displayed?
- Can I change the error or field layout without changing FHIR rendering?
- How do I keep the data rendering model but use my own visual primitives?

## Current Primitive Pieces

- wrapper
- label
- value
- error
- context

These primitives are the middle customization layer between CSS-only styling and
full type/resource renderer overrides.
