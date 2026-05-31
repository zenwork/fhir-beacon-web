---
layout: layouts/base.vto
title: Examples
order: 3
---

# Examples

Examples show how FHIR Beacon can be used in small but realistic frontend
workflows.

## Patient Summary Workflow

A common first workflow is a patient summary screen. The application selects a
Patient and any related records it wants to show. FHIR Beacon renders the FHIR
structures; the application still owns the workflow around them.

<code-example language="typescript">
import { html } from "lit";
import type { ObservationData, PatientData } from "fhir-beacon";

export function patientSummary(
  patient: PatientData,
  observations: ObservationData[],
) {
  return html`
    &lt;section aria-labelledby="patient-heading"&gt;
      &lt;h2 id="patient-heading"&gt;Patient&lt;/h2&gt;
      &lt;fhir-patient .data="${patient}"&gt;&lt;/fhir-patient&gt;

      &lt;h3&gt;Recent observations&lt;/h3&gt;
      ${observations.map((observation) =&gt; html`
        &lt;fhir-observation .data="${observation}"&gt;&lt;/fhir-observation&gt;
      `)}
    &lt;/section&gt;
  `;
}
</code-example>

This workflow keeps the responsibilities separate:

- the application decides which Patient is active
- the application loads and filters the related Observations
- FHIR Beacon renders Patient and Observation data in their FHIR shape
- the surrounding page decides headings, layout, navigation, and actions

## Storybook

Use Storybook for component-level examples, states, and focused rendering cases.

[Open Storybook](https://fhir-beacon.deno.dev)

## Showcase App

Use the showcase app for broader exploration of FHIR Beacon in an
application-like context.

[Open showcase app](https://fhir-beacon-app.deno.dev)

## Planned Documentation Examples

Future documentation examples should explain workflows that are harder to
communicate in Storybook:

- showing related Medication and Appointment data
- reference resolution
- extension and profile-aware rendering
- customization paths from CSS to custom renderers
