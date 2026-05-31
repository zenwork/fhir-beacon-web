---
layout: layouts/base.vto
title: Guides
order: 5
---

# Guides

Guides are short task walkthroughs.

## Render A Patient Resource

Use this when you want the smallest practical path from resource data to a
rendered component.

### Register Components

Import FHIR Beacon once before rendering its custom elements.

<code-example language="typescript">
import "fhir-beacon";
</code-example>

### Keep The Resource FHIR-Shaped

The app can fetch and authorize data however it needs. The renderer receives a
FHIR-shaped Patient.

<code-example language="typescript">
import type { PatientData } from "fhir-beacon";

const patient: PatientData = {
  resourceType: "Patient",
  id: "example",
  identifier: [{
    system: "https://example.org/mrn",
    value: "MRN-10001",
  }],
  name: [{
    use: "official",
    given: ["Alex"],
    family: "Rivera",
  }],
  gender: "unknown",
  birthDate: "1970-01-01",
};
</code-example>

### Render The Component

Add the custom element to the page.

<code-example language="html">
&lt;fhir-patient id="patient"&gt;&lt;/fhir-patient&gt;
</code-example>

Assign the Patient to the component's `data` property.

<code-example language="javascript">
const patientElement = document.querySelector("#patient");

patientElement.data = patient;
</code-example>

### Keep The Boundary Clear

The app owns:

- loading data
- checking permissions
- choosing the screen workflow

FHIR Beacon owns:

- rendering the Patient
- rendering nested FHIR datatypes
- keeping FHIR structure visible

### Check Coverage

The [FHIR Reference](../../reference/fhir-reference/) page tracks which
resources and datatypes are available, preview, partial, or planned.
