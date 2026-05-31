---
layout: layouts/base.vto
title: Library Reference
order: 1
---

# Library Reference

Library Reference collects FHIR Beacon-specific lookup material.

## Package

| Item                | Value         |
|---------------------|---------------|
| Package             | `fhir-beacon` |
| Current docs target | `0.3.0`       |
| Status              | alpha         |

The target version is checked against the published library package and release
metadata. Phase 1 coverage is still curated manually from the library source,
generated component metadata, Storybook, and the library changelog.

| Source | Link |
|--------|------|
| Package metadata | [`packages/library/package.json`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/package.json) |
| Custom elements manifest | [`custom-elements.json`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/custom-elements.json) |
| Web types metadata | [`web-types.json`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/build/web-types.json) |
| Changelog | [`packages/library/CHANGELOG.md`](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/CHANGELOG.md) |
| Release notes | [GitHub releases](https://github.com/zenwork/fhir-beacon/releases) |

## Common Element Inputs

Common FHIR Beacon elements share a set of rendering inputs. The exact API
reference will expand as the generated reference is added.

| Input         | Purpose                                               |
|---------------|-------------------------------------------------------|
| `data`        | FHIR JSON data to render.                             |
| `key`         | Identity of the element in the FHIR model.            |
| `label`       | Human-readable label.                                 |
| `headless`    | Render properties without title or wrapping elements. |
| `mode`        | Display mode.                                         |
| `summaryonly` | Show only FHIR summary properties where supported.    |
| `verbose`     | Show properties even when data is missing.            |
| `open`        | Open structure details where supported.               |

### Examples

With Lit:

<code-example language="typescript">
import "fhir-beacon";
import { html } from "lit";
import type { PatientData } from "fhir-beacon";

export function renderPatient(patient: PatientData) {
  return html`
    &lt;fhir-patient
      .data=${patient}
      summaryonly
    &gt;&lt;/fhir-patient&gt;
  `;
}
</code-example>

With React 19 JSX:

<code-example language="tsx">
import "fhir-beacon";
import type { PatientData } from "fhir-beacon";

type PatientCardProps = {
  patient: PatientData;
};

export function PatientCard({ patient }: PatientCardProps) {
  return (
    &lt;fhir-patient
      data={patient}
      mode="structure"
      open
    &gt;&lt;/fhir-patient&gt;
  );
}
</code-example>

With plain custom elements:

<code-example language="html">
&lt;fhir-patient id="patient" mode="narrative"&gt;&lt;/fhir-patient&gt;

&lt;script type="module"&gt;
  import "fhir-beacon";

  const patient = {
    resourceType: "Patient",
    name: [
      {
        given: ["Alex"],
        family: "Rivera",
      },
    ],
  };

  const patientElement = document.querySelector("#patient");
  patientElement.data = patient;
&lt;/script&gt;
</code-example>

React 19 is required for first-class web component support in JSX.

## Links

- [Storybook](https://fhir-beacon.deno.dev)
- [Showcase app](https://fhir-beacon-app.deno.dev)
- [GitHub repository](https://github.com/zenwork/fhir-beacon)
