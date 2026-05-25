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

## Common Attributes

Common FHIR Beacon elements share a set of rendering inputs. The exact API
reference will expand as the generated reference is added.

| Attribute     | Purpose                                               |
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

Plain HTML attributes:

<code-example language="html">
  &lt;fhir-patient
    data="{...}"
    mode="narative"
    headless
    &gt;&lt;/fhir-patient&gt;
</code-example>

With Lit:

<code-example language="typescript">
  import { html } from "lit";
  function render(patientData) {
    return html`&lt;fhir-patient 
                    .data=${patientData}
                    label="Patient Details"
                    summaryonly
                &gt;&lt;/fhir-patient&gt;`;
  }
</code-example>

With React*:

<code-example language="tsx">
  import "fhir-beacon";
  export function PatientCard({ patientData }) {
    return &lt;fhir-patient 
                data={patientData} 
                mode="structure" 
                open 
            /&gt;;
  }
</code-example>
*React 19 is required for first-class web component support in JSX.

## Links

- [Storybook](https://fhir-beacon.deno.dev)
- [Showcase app](https://fhir-beacon-app.deno.dev)
- [GitHub repository](https://github.com/zenwork/fhir-beacon)
