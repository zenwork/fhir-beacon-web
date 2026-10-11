---
layout: layouts/base.vto
title: Complex Types
order: 5
---

# Complex Types

FHIR datatype, special datatype, and backbone custom elements.

## Data Type Components

| Element | Class | Notable attributes | Source |
| ------- | ----- | ------------------ | ------ |
| [`fhir-address`](./fhir-address/) | `Address` | common FHIR inputs | [address/address.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/address/address.ts) |
| [`fhir-annotation`](./fhir-annotation/) | `Annotation` | common FHIR inputs | [annotation/annotation.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/annotation/annotation.ts) |
| [`fhir-attachment`](./fhir-attachment/) | `Attachment` | common FHIR inputs | [attachment/attachment.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/attachment/attachment.ts) |
| [`fhir-codeable-concept`](./fhir-codeable-concept/) | `CodeableConcept` | common FHIR inputs | [codeable-concept/codeable-concept.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/codeable-concept/codeable-concept.ts) |
| [`fhir-codeable-reference`](./fhir-codeable-reference/) | `CodeableReference` | common FHIR inputs | [codeable-reference/codeable-reference.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/codeable-reference/codeable-reference.ts) |
| [`fhir-coding`](./fhir-coding/) | `Coding` | common FHIR inputs | [coding/coding.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/coding/coding.ts) |
| [`fhir-contact-point`](./fhir-contact-point/) | `ContactPoint` | common FHIR inputs | [contact-point/contact-point.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/contact-point/contact-point.ts) |
| [`fhir-human-name`](./fhir-human-name/) | `HumanName` | common FHIR inputs | [human-name/human-name.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/human-name/human-name.ts) |
| [`fhir-identifier`](./fhir-identifier/) | `Identifier` | common FHIR inputs | [identifier/identifier.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/identifier/identifier.ts) |
| [`fhir-money`](./fhir-money/) | `Money` | common FHIR inputs | [money/money.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/money/money.ts) |
| [`fhir-period`](./fhir-period/) | `Period` | common FHIR inputs | [period/period.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/period/period.ts) |
| [`fhir-quantity`](./fhir-quantity/) | `Quantity` | `simple` | [quantity/quantity.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/quantity/quantity.ts) |
| [`fhir-range`](./fhir-range/) | `Range` | common FHIR inputs | [range/range.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/range/range.ts) |
| [`fhir-ratio`](./fhir-ratio/) | `Ratio` | common FHIR inputs | [ratio/ratio.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/ratio/ratio.ts) |
| [`fhir-sampled-data`](./fhir-sampled-data/) | `SampledData` | common FHIR inputs | [sampled-data/sampled-data.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/sampled-data/sampled-data.ts) |
| [`fhir-signature`](./fhir-signature/) | `Signature` | common FHIR inputs | [signature/signature.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/signature/signature.ts) |
| [`fhir-timing`](./fhir-timing/) | `Timing` | common FHIR inputs | [timing/timing.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/timing/timing.ts) |
| [`fhir-timing-repeat`](./fhir-timing-repeat/) | `TimingRepeat` | common FHIR inputs | [timing/timing-repeat.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/complex/timing/timing-repeat.backbone.ts) |

## Resource Backbone Components

| Element | Class | Notable attributes | Source |
| ------- | ----- | ------------------ | ------ |
| [`fhir-account-balance`](./fhir-account-balance/) | `Balance` | common FHIR inputs | [backbone/balance.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/account/backbone/balance.backbone.ts) |
| [`fhir-account-coverage`](./fhir-account-coverage/) | `Coverage` | common FHIR inputs | [backbone/coverage.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/account/backbone/coverage.backbone.ts) |
| [`fhir-account-diagnosis`](./fhir-account-diagnosis/) | `Diagnosis` | common FHIR inputs | [backbone/diagnosis.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/account/backbone/diagnosis.backbone.ts) |
| [`fhir-account-guarantor`](./fhir-account-guarantor/) | `Guarantor` | common FHIR inputs | [backbone/guarantor.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/account/backbone/guarantor.backbone.ts) |
| [`fhir-account-procedure`](./fhir-account-procedure/) | `Procedure` | common FHIR inputs | [backbone/procedure.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/account/backbone/procedure.backbone.ts) |
| [`fhir-account-related-account`](./fhir-account-related-account/) | `RelatedAccount` | common FHIR inputs | [backbone/related-account.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/account/backbone/related-account.backbone.ts) |
| [`fhir-appointment-participant`](./fhir-appointment-participant/) | `AppointmentParticipantBackbone` | common FHIR inputs | [appointment/appointment-participant.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/appointment/appointment-participant.backbone.ts) |
| [`fhir-appointment-recurrence-template`](./fhir-appointment-recurrence-template/) | `AppointmentRecurrenceTemplateBackbone` | common FHIR inputs | [appointment/appointment-recurrence-template.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/appointment/appointment-recurrence-template.backbone.ts) |
| [`fhir-medication-batch`](./fhir-medication-batch/) | `MedicationBatchBackbone` | common FHIR inputs | [medication/medication-batch.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/medication/medication-batch.backbone.ts) |
| [`fhir-medication-ingredient`](./fhir-medication-ingredient/) | `MedicationIngredientBackbone` | common FHIR inputs | [medication/medication-ingredient.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/medication/medication-ingredient.backbone.ts) |
| [`fhir-monthly-template`](./fhir-monthly-template/) | `AppointmentMonthlyTemplate` | common FHIR inputs | [appointment/appointment-monthly-template.bacbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/appointment/appointment-monthly-template.bacbone.ts) |
| [`fhir-observation-component`](./fhir-observation-component/) | `ObservationComponent` | common FHIR inputs | [observation/observation-component.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/observation/observation-component.backbone.ts) |
| [`fhir-observation-reference-range`](./fhir-observation-reference-range/) | `ObservationReferenceRange` | common FHIR inputs | [observation/observation-reference-range.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/observation/observation-reference-range.backbone.ts) |
| [`fhir-observation-triggered-by`](./fhir-observation-triggered-by/) | `ObservationTriggeredBy` | common FHIR inputs | [observation/observation-triggered-by.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/observation/observation-triggered-by.backbone.ts) |
| [`fhir-patient-communication`](./fhir-patient-communication/) | `PatientCommunicationBackbone` | common FHIR inputs | [patient/patient-communication.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/patient/patient-communication.backbone.ts) |
| [`fhir-patient-contact`](./fhir-patient-contact/) | `PatientContactBackbone` | common FHIR inputs | [patient/patient-contact.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/patient/patient-contact.backbone.ts) |
| [`fhir-patient-link`](./fhir-patient-link/) | `PatientLink` | common FHIR inputs | [patient/patient-link.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/patient/patient-link.backbone.ts) |
| [`fhir-substance-ingredient`](./fhir-substance-ingredient/) | `SubstanceIngredientBackbone` | common FHIR inputs | [substance/substance-ingredient.backbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/substance/substance-ingredient.backbone.ts) |
| [`fhir-weekly-template`](./fhir-weekly-template/) | `AppointmentWeeklyTemplate` | common FHIR inputs | [appointment/appointment-weekly-template.bacbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/appointment/appointment-weekly-template.bacbone.ts) |
| [`fhir-yearly-template`](./fhir-yearly-template/) | `AppointmentYearlyTemplate` | common FHIR inputs | [appointment/appointment-yearly-template.bacbone.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/resources/appointment/appointment-yearly-template.bacbone.ts) |

## Special FHIR Components

| Element | Class | Notable attributes | Source |
| ------- | ----- | ------------------ | ------ |
| [`fhir-extension`](./fhir-extension/) | `Extension` | common FHIR inputs | [extension/extension.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/special/extension/extension.ts) |
| [`fhir-meta`](./fhir-meta/) | `Meta` | common FHIR inputs | [meta/meta.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/special/meta/meta.ts) |
| [`fhir-narrative`](./fhir-narrative/) | `Narrative` | `status` | [narrative/narrative.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/special/narrative/narrative.ts) |
| [`fhir-reference`](./fhir-reference/) | `Reference` | common FHIR inputs | [reference/reference.ts](https://github.com/zenwork/fhir-beacon/blob/main/packages/library/src/components/special/reference/reference.ts) |

