---
layout: layouts/base.vto
title: Examples
order: 3
---

# Examples

Examples show small workflow slices that are larger than a single component.

## Patient Summary Workflow

Use this when a page needs to render one Patient and a few related Observations.

Page structure:

<code-example language="html">
&lt;section aria-labelledby="patient-heading"&gt;
  &lt;h2 id="patient-heading"&gt;Patient&lt;/h2&gt;
  &lt;fhir-patient id="patient"&gt;&lt;/fhir-patient&gt;

  &lt;h3&gt;Recent observations&lt;/h3&gt;
  &lt;div id="observations"&gt;&lt;/div&gt;
&lt;/section&gt;
</code-example>

Data binding:

<code-example language="javascript">
import "fhir-beacon";

const patientElement = document.querySelector("#patient");
patientElement.data = patient;

const observationList = document.querySelector("#observations");

for (const observation of observations) {
  const observationElement = document.createElement("fhir-observation");

  observationElement.data = observation;
  observationList.append(observationElement);
}
</code-example>

The page owns:

- the application decides which Patient is active
- the application loads and filters the related Observations
- the surrounding page decides headings, layout, navigation, and actions

FHIR Beacon renders the Patient and Observation data.

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
