import {html, render as renderLit}                      from 'lit'
import {readFileSync}                                   from 'node:fs'
import {resolve}                                        from 'node:path'
import React, {act}                                     from 'react'
import {createRoot}                                     from 'react-dom/client'
import '../node_modules/fhir-beacon/dist/fhir-beacon.js'
import ts                                               from 'typescript'
import {afterEach, beforeAll, describe, expect, it, vi} from 'vitest'

const homepage = readFileSync(resolve(process.cwd(), "src/index.vto"), "utf8");
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

beforeAll(() => {
  const patientElement = document.createElement("fhir-patient");
  expect(patientElement).toBeInstanceOf(customElements.get("fhir-patient"));
  expect("data" in patientElement).toBe(true);
});

function example(language) {
  const block = homepage.match(
    new RegExp(
      `<code-example\\s+language="${language}"[^>]*>([\\s\\S]*?)<\\/code-example>`,
    ),
  );
  if (!block) throw new Error(`Missing ${language} homepage example`);
  return block[1]
    .split("\n")
    .map((line) => line.replace(/^ {6}/, ""))
    .join("\n")
    .trim();
}

async function evaluateTypeScript(source, { jsx = false, modules = {} } = {}) {
  const { outputText, diagnostics } = ts.transpileModule(source, {
    fileName: jsx ? "homepage-example.tsx" : "homepage-example.ts",
    compilerOptions: {
      jsx: ts.JsxEmit.React,
      jsxFactory: "React.createElement",
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
    reportDiagnostics: true,
  });
  const errors = diagnostics.filter(
    ({ category }) => category === ts.DiagnosticCategory.Error,
  );
  if (errors.length > 0) {
    throw new Error(
      ts.formatDiagnostics(errors, {
        getCanonicalFileName: (fileName) => fileName,
        getCurrentDirectory: () => process.cwd(),
        getNewLine: () => "\n",
      }),
    );
  }
  const loaded = { exports: {} };
  const require = (specifier) => {
    if (!(specifier in modules)) {
      throw new Error(`Unexpected example import: ${specifier}`);
    }
    return modules[specifier];
  };
  new Function("require", "module", "exports", "React", outputText)(
    require,
    loaded,
    loaded.exports,
    React,
  );
  return loaded.exports;
}

let roots = [];

afterEach(async () => {
  await act(async () => {
    roots.forEach((root) => root.unmount());
  });
  roots = [];
  document.body.replaceChildren();
});

describe("homepage integration examples", () => {
  it("passes patient data through React 19 custom-element props", async () => {
    const source = example("jsx");
    expect(source).toContain('import "fhir-beacon";');
    const { PatientSummary } = await evaluateTypeScript(source, {
      jsx: true,
      modules: { "fhir-beacon": {} },
    });
    const patient = { resourceType: "Patient", id: "react-example" };
    const container = document.createElement("div");
    document.body.append(container);
    const root = createRoot(container);
    roots.push(root);

    await act(async () => {
      root.render(React.createElement(PatientSummary, { patient }));
    });

    expect(container.querySelector("fhir-patient").data).toBe(patient);
  });

  it("passes patient data through Lit's property binding", async () => {
    const source = example("typescript");
    expect(source).toContain('import "fhir-beacon";');
    const { PatientSummary } = await evaluateTypeScript(source, {
      modules: { "fhir-beacon": {}, lit: { html } },
    });
    const patient = { resourceType: "Patient", id: "lit-example" };
    const container = document.createElement("div");

    renderLit(PatientSummary(patient), container);

    expect(container.querySelector("fhir-patient").data).toBe(patient);
  });

  it("loads patient data into the static HTML custom element", async () => {
    const source = example("html");
    expect(source).toContain('import "fhir-beacon";');
    const markup = source.match(/<fhir-patient\b[^>]*><\/fhir-patient>/)?.[0];
    const script = source.match(/<script\s+type="module">([\s\S]*?)<\/script>/)?.[1];
    expect(markup).toBeDefined();
    expect(script).toBeDefined();
    document.body.innerHTML = markup;
    const patient = { resourceType: "Patient", id: "html-example" };
    const fetch = vi.fn(async () => ({ json: async () => patient }));
    const executable = script.replace(/^\s*import\s+"fhir-beacon";\s*/m, "");

    new Function("fetch", "document", executable)(fetch, document);
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(fetch).toHaveBeenCalledWith("https://health.org/patient/123");
    expect(document.getElementById("123").data).toBe(patient);
  });
});