---
layout: layouts/base.vto
title: Guides
order: 5
---

# Guides

Guides show how to build practical screens with FHIR Beacon.

## Render A Patient Resource

This guide renders a Patient resource and explains which parts belong to the
application and which parts belong to FHIR Beacon.

### 1. Register The Components

Import the package once in the part of your frontend that initializes custom
elements.

<code-example language="typescript">
import "fhir-beacon";
</code-example>

### 2. Keep The Resource FHIR-Shaped

The application can fetch, cache, authorize, and select data however it needs.
Once the Patient is ready to render, keep the object in its FHIR shape.

<code-example language="typescript">
import type { PatientData } from "fhir-beacon";

const patient: PatientData = {
  resourceType: "Patient",
  id: "example",
  identifier: [
    {
      system: "https://example.org/mrn",
      value: "MRN-10001",
    },
  ],
  name: [
    {
      use: "official",
      given: ["Alex"],
      family: "Rivera",
    },
  ],
  gender: "unknown",
  birthDate: "1970-01-01",
};
</code-example>

### 3. Pass The Resource To A Component

With Lit, bind the Patient object to the component property.

<code-example language="typescript">
import { html } from "lit";

export function patientSummary(patient: PatientData) {
  return html`
    &lt;fhir-patient .data="${patient}"&gt;&lt;/fhir-patient&gt;
  `;
}
</code-example>

Without Lit, assign the property from JavaScript.

<code-example language="html">
&lt;fhir-patient id="patient"&gt;&lt;/fhir-patient&gt;

&lt;script type="module"&gt;
  import "fhir-beacon";

  document.querySelector("#patient").data = patient;
&lt;/script&gt;
</code-example>

### 4. Keep Application Logic Outside The Renderer

The Patient component should receive the data it is allowed to render. It should
not decide how to fetch the Patient, whether the current user may see it, or
which workflow should happen next.

Use application code for:

- loading the Patient from an API
- checking permissions
- selecting related resources
- handling navigation and actions

Use FHIR Beacon for:

- rendering Patient-specific fields
- rendering nested FHIR datatypes
- keeping FHIR semantics visible in the UI
- providing consistent defaults across screens

### 5. Link To Coverage When You Need Detail

The [FHIR Reference](../../reference/fhir-reference/) page tracks which
resources and datatypes are available, preview, partial, or planned. Check it
when a guide depends on a specific component.
