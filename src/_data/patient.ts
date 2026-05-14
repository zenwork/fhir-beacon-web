const template= '<fhir-patient .data=${data} > </fhir-contact-point>'

const data = {
  data: {
    resourceType: 'Patient',
    id: 'patient-example-sex-and-gender',
    extension: [
      {
        url: 'http://hl7.org/fhir/StructureDefinition/individual-genderIdentity',
        extension: [
          {
            url: 'value',
            valueCodeableConcept: {
              coding: [{ system: 'http://snomed.info/sct', code: '446141000124107', display: 'Identifies as female gender (finding)' }]
            }
          },
          { url: 'period', valuePeriod: { start: '2001-05-06' } },
          { url: 'comment', valueString: 'Patient transitioned from male to female in 2001.' }
        ]
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/individual-pronouns',
        extension: [
          {
            url: 'value',
            valueCodeableConcept: {
              coding: [{ system: 'http://loinc.org', code: 'LA29519-8', display: 'she/her/her/hers/herself' }]
            }
          },
          { url: 'period', valuePeriod: { start: '2001-05-06' } },
          { url: 'comment', valueString: 'Patient transitioned from male to female in 2001.' }
        ]
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender',
        extension: [
          {
            url: 'value',
            valueCodeableConcept: {
              coding: [{ system: 'http://hl7.org/fhir/administrative-gender', code: 'male', display: 'Male' }]
            }
          },
          {
            url: 'type',
            valueCodeableConcept: {
              coding: [{ system: 'http://loinc.org', code: '76689-9', display: 'Sex Assigned At Birth' }]
            }
          },
          { url: 'effectivePeriod', valuePeriod: { start: '1974-12-25' } },
          { url: 'acquisitionDate', valueDateTime: '2005-12-06' },
          { url: 'sourceField', valueString: 'SEX' },
          {
            url: 'jurisdiction',
            valueCodeableConcept: {
              coding: [{ system: 'https://www.usps.com/', code: 'OH', display: 'Ohio' }]
            }
          },
          { url: 'comment', valueString: 'Patient transitioned from male to female in 2001, but their birth certificate still indicates male.' }
        ]
      }
    ],
    identifier: [
      {
        use: 'usual',
        type: { coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v2-0203', code: 'MR' }] },
        system: 'urn:oid:1.2.36.146.595.217.0.1',
        value: '12345'
      }
    ],
    active: true,
    name: [
      { use: 'official', family: 'Roth', given: ['Patrick'] },
      { use: 'usual', family: 'Roth', given: ['Patricia'] },
      { use: 'nickname', given: ['Pat'] }
    ],
    gender: 'male',
    birthDate: '1974-12-25'
  }
}

export {data, template}