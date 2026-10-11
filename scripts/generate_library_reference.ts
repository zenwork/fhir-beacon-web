type PackageJson = {
  name: string;
  version: string;
  type?: string;
  dependencies?: Record<string, string>;
  files?: string[];
};

type ManifestField = {
  name: string;
  description?: string;
  type?: { text?: string };
  default?: string;
  inheritedFrom?: { name?: string; module?: string };
};

type CustomElementsManifest = {
  modules?: Array<{
    path: string;
    declarations?: Array<{
      name?: string;
      tagName?: string;
      superclass?: { name?: string; module?: string; package?: string };
      attributes?: ManifestField[];
      members?: ManifestField[];
      events?: Array<{ name: string; description?: string }>;
    }>;
  }>;
};

type WebTypeField = {
  name: string;
  description?: string;
  value?: { type?: string; default?: string };
  type?: string;
};

type WebTypes = {
  name?: string;
  version?: string;
  contributions?: {
    html?: {
      elements?: Array<{
        name: string;
        attributes?: WebTypeField[];
        js?: {
          properties?: WebTypeField[];
          events?: Array<{ name: string; description?: string }>;
        };
      }>;
    };
  };
};

type FieldReference = {
  name: string;
  type?: string;
  default?: string;
  description?: string;
  inheritedFrom?: string;
};

type ComponentReference = {
  tag: string;
  className: string;
  catalog: string;
  category: string;
  sourcePath: string;
  superclass?: string;
  attributes: FieldReference[];
  properties: FieldReference[];
  events: FieldReference[];
};

const repoRoot = new URL("../", import.meta.url);
const libraryDir = new URL(
  Deno.env.get("FHIR_BEACON_LIBRARY_DIR") ??
    "../fhir-beacon/packages/library/",
  repoRoot,
);
const libraryReferencePath = new URL(
  "src/reference/library-reference.md",
  repoRoot,
);
const catalogRootDir = new URL(
  "src/reference/",
  repoRoot,
);
const legacyComponentCatalogDir = new URL(
  "src/reference/component-catalog/",
  repoRoot,
);

const commonAttributes = new Set([
  "label",
  "summary",
  "required",
  "headless",
  "key",
  "data",
  "data-path",
  "mode",
  "showerror",
  "input",
  "verbose",
  "summaryonly",
  "open",
]);

const categoryOrder = [
  "Shell and Layout",
  "Presentation Primitives",
  "Data Type Components",
  "Foundation Components",
  "Resource Renderers",
  "Resource Backbone Components",
  "Special FHIR Components",
  "Utilities",
  "Other",
];

const catalogOrder = [
  "Base and Display Elements",
  "Types",
  "Complex Types",
  "Resources",
  "Domain Resources",
];

const catalogDescriptions: Record<string, string> = {
  "Base and Display Elements":
    "Shell, layout, display primitive, and utility custom elements used to compose FHIR rendering.",
  "Types": "Primitive type rendering elements.",
  "Complex Types":
    "FHIR datatype, special datatype, and backbone custom elements.",
  "Resources":
    "Concrete FHIR resources whose renderer is not a DomainResource renderer.",
  "Domain Resources":
    "Concrete FHIR resources implemented with the DomainResource renderer base.",
};

function readJson<T>(path: string): Promise<T> {
  return Deno.readTextFile(new URL(path, libraryDir)).then(JSON.parse);
}

function categoryFor(sourcePath: string): string {
  if (sourcePath.includes("/shell/")) return "Shell and Layout";
  if (sourcePath.includes("/components/primitive/")) {
    return "Presentation Primitives";
  }
  if (sourcePath.includes("/components/complex/")) {
    return "Data Type Components";
  }
  if (sourcePath.includes("/components/foundation/")) {
    return "Foundation Components";
  }
  if (sourcePath.includes("/components/resources/")) {
    if (
      sourcePath.includes(".backbone.") ||
      sourcePath.includes(".bacbone.")
    ) {
      return "Resource Backbone Components";
    }
    return "Resource Renderers";
  }
  if (sourcePath.includes("/components/special/")) {
    return "Special FHIR Components";
  }
  if (sourcePath.includes("/utilities/")) return "Utilities";
  return "Other";
}

function isBackboneComponent(sourcePath: string, superclass?: string): boolean {
  return superclass === "Backbone" ||
    sourcePath.includes(".backbone.") ||
    sourcePath.includes(".bacbone.");
}

function catalogFor(args: {
  sourcePath: string;
  tag: string;
  superclass?: string;
}): string {
  const { sourcePath, tag, superclass } = args;
  if (superclass === "DomainResource") return "Domain Resources";
  if (sourcePath.includes("/components/foundation/")) return "Resources";
  if (tag === "fhir-primitive") return "Types";
  if (
    sourcePath.includes("/components/complex/") ||
    sourcePath.includes("/components/special/") ||
    isBackboneComponent(sourcePath, superclass)
  ) {
    return "Complex Types";
  }
  return "Base and Display Elements";
}

function code(value: string): string {
  return `\`${value.replaceAll("`", "\\`")}\``;
}

function tableCell(value: string): string {
  return value.replaceAll("|", "\\|").replaceAll("\n", " ");
}

function formatList(values: string[], empty = "none"): string {
  if (values.length === 0) return empty;
  return values.map(code).join(", ");
}

function formatNotableAttributes(attributes: FieldReference[]): string {
  const notable = attributes
    .map((attribute) => attribute.name)
    .filter((attribute) => !commonAttributes.has(attribute));
  if (notable.length === 0 && attributes.length >= 5) {
    return "common FHIR inputs";
  }
  if (notable.length === 0) {
    return formatList(attributes.map((attribute) => attribute.name));
  }
  return formatList(notable);
}

function sourceLink(path: string): string {
  const href =
    `https://github.com/zenwork/fhir-beacon/blob/main/packages/library/${path}`;
  const label = path.split("/").slice(-2).join("/");
  return `[${label}](${href})`;
}

function latestVersions(changelog: string): string[] {
  return [...changelog.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1])
    .slice(0, 6);
}

function docsImportTarget(): string {
  const denoJson = JSON.parse(
    Deno.readTextFileSync(new URL("deno.json", repoRoot)),
  ) as { imports?: Record<string, string> };
  return denoJson.imports?.["fhir-beacon"] ?? "not configured";
}

function slugFor(value: string): string {
  return value.toLowerCase().replaceAll(" ", "-");
}

function catalogDir(catalog: string): URL {
  return new URL(`${slugFor(catalog)}/`, catalogRootDir);
}

function catalogPagePath(catalog: string): URL {
  return new URL("index.md", catalogDir(catalog));
}

function componentPagePath(component: ComponentReference): URL {
  return new URL(`${component.tag}.md`, catalogDir(component.catalog));
}

function catalogLink(catalog: string, prefix = "./"): string {
  return `[${catalog}](${prefix}${slugFor(catalog)}/)`;
}

function componentLink(component: ComponentReference, prefix = "./"): string {
  return `[${code(component.tag)}](${prefix}${component.tag}/)`;
}

function htmlUsageExample(component: ComponentReference): string {
  const hasData = component.attributes.some((attribute) =>
    attribute.name === "data"
  );
  const dataBinding = hasData ? " .data=${data}" : "";
  return `&lt;${component.tag}${dataBinding}&gt;&lt;/${component.tag}&gt;`;
}

function toFieldReference(field: ManifestField): FieldReference {
  return {
    name: field.name,
    type: field.type?.text,
    default: field.default,
    description: field.description,
    inheritedFrom: field.inheritedFrom?.name,
  };
}

function fromWebTypeField(field: WebTypeField): FieldReference {
  return {
    name: field.name,
    type: field.value?.type ?? field.type,
    default: field.value?.default,
    description: field.description,
  };
}

function mergeFields(
  manifestFields: FieldReference[],
  webTypeFields: FieldReference[],
): FieldReference[] {
  const fields = new Map<string, FieldReference>();
  for (const field of manifestFields) fields.set(field.name, field);
  for (const field of webTypeFields) {
    const existing = fields.get(field.name);
    fields.set(field.name, {
      name: field.name,
      type: existing?.type ?? field.type,
      default: existing?.default ?? field.default,
      description: existing?.description ?? field.description,
      inheritedFrom: existing?.inheritedFrom,
    });
  }
  return [...fields.values()]
    .filter((field) =>
      field.name && !field.name.startsWith("#") && !field.name.startsWith("_")
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

function fieldRows(fields: FieldReference[]): string {
  if (fields.length === 0) return "";
  return fields.map((field) =>
    `| ${code(field.name)} | ${
      tableCell(field.type ? code(field.type) : "")
    } | ${tableCell(field.default ? code(field.default) : "")} | ${
      tableCell(field.inheritedFrom ? code(field.inheritedFrom) : "")
    } | ${tableCell(field.description ?? "")} |`
  ).join("\n");
}

function fieldTable(title: string, fields: FieldReference[]): string {
  if (fields.length === 0) {
    return `## ${title}

No generated ${title.toLowerCase()} metadata.
`;
  }

  return `## ${title}

| Name | Type | Default | Inherited from | Description |
| ---- | ---- | ------- | -------------- | ----------- |
${fieldRows(fields)}
`;
}

function eventTable(events: FieldReference[]): string {
  if (events.length === 0) {
    return `## Events

No generated event metadata.
`;
  }

  return `## Events

| Event | Description |
| ----- | ----------- |
${
    events.map((event) =>
      `| ${code(event.name)} | ${tableCell(event.description ?? "")} |`
    ).join("\n")
  }
`;
}

function attributeRows(components: ComponentReference[]): string {
  const counts = new Map<string, number>();
  for (const component of components) {
    for (const attribute of component.attributes) {
      counts.set(attribute.name, (counts.get(attribute.name) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 24)
    .map(([attribute, count]) => `| ${code(attribute)} | ${count} |`)
    .join("\n");
}

function summaryRows(components: ComponentReference[]): string {
  return catalogOrder
    .map((catalog) => {
      const count = components.filter((component) =>
        component.catalog === catalog
      ).length;
      return count > 0
        ? `| ${catalogLink(catalog, "../")} | ${count} | ${
          tableCell(catalogDescriptions[catalog])
        } |`
        : "";
    })
    .filter(Boolean)
    .join("\n");
}

function dependencyRows(pkg: PackageJson): string {
  return Object.entries(pkg.dependencies ?? {})
    .filter(([name]) =>
      [
        "lit",
        "@lit/context",
        "@shoelace-style/shoelace",
        "jsonpath-plus",
        "axios",
      ].includes(name)
    )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, version]) => `| ${code(name)} | ${code(version)} |`)
    .join("\n");
}

function catalogRows(
  components: ComponentReference[],
  linkPrefix = "./",
): string {
  return components.map((component) =>
    `| ${componentLink(component, linkPrefix)} | ${
      code(component.className)
    } | ${tableCell(formatNotableAttributes(component.attributes))} | ${
      tableCell(sourceLink(component.sourcePath))
    } |`
  ).join("\n");
}

function catalogCategorySections(
  components: ComponentReference[],
  linkPrefix = "./",
): string {
  return categoryOrder
    .map((category) => {
      const items = components.filter((component) =>
        component.category === category
      );
      if (items.length === 0) return "";
      return `## ${category}

| Element | Class | Notable attributes | Source |
| ------- | ----- | ------------------ | ------ |
${catalogRows(items, linkPrefix)}
`;
    })
    .filter(Boolean)
    .join("\n");
}

function componentReferences(
  customElements: CustomElementsManifest,
  webTypes: WebTypes,
): ComponentReference[] {
  const webTypeByTag = new Map(
    (webTypes.contributions?.html?.elements ?? []).map((element) => [
      element.name,
      element,
    ]),
  );

  const components: ComponentReference[] = [];
  for (const module of customElements.modules ?? []) {
    for (const declaration of module.declarations ?? []) {
      const tag = declaration.tagName;
      if (!tag?.startsWith("fhir-")) continue;
      const webType = webTypeByTag.get(tag);
      const superclass = declaration.superclass?.name;
      components.push({
        tag,
        className: declaration.name ?? "",
        catalog: catalogFor({
          sourcePath: module.path,
          tag,
          superclass,
        }),
        category: categoryFor(module.path),
        sourcePath: module.path,
        superclass,
        attributes: mergeFields(
          (declaration.attributes ?? []).map(toFieldReference),
          (webType?.attributes ?? []).map(fromWebTypeField),
        ),
        properties: mergeFields(
          [],
          (webType?.js?.properties ?? []).map(fromWebTypeField),
        ),
        events: mergeFields(
          (declaration.events ?? []).map((event) => ({
            name: event.name,
            description: event.description,
          })),
          (webType?.js?.events ?? []).map((event) => ({
            name: event.name,
            description: event.description,
          })),
        ),
      });
    }
  }

  return components.sort((a, b) =>
    catalogOrder.indexOf(a.catalog) - catalogOrder.indexOf(b.catalog) ||
    categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category) ||
    a.tag.localeCompare(b.tag)
  );
}

function renderLibraryReference(args: {
  pkg: PackageJson;
  webTypes: WebTypes;
  components: ComponentReference[];
  changelogVersions: string[];
}): string {
  const { pkg, webTypes, components, changelogVersions } = args;
  return `---
layout: layouts/base.vto
title: Library Reference
order: 1
---

# Library Reference

This page is generated from the fhir-beacon package metadata, custom elements
manifest, web-types metadata, and changelog. Run
\`deno task reference:generate\` after updating the library source or package
version.

## Source Inputs

| Source | Value |
| ------ | ----- |
| Package metadata | ${sourceLink("package.json")} |
| Custom elements manifest | ${sourceLink("build/custom-elements.json")} |
| Web types metadata | ${sourceLink("build/web-types.json")} |
| Changelog | ${sourceLink("CHANGELOG.md")} |
| Storybook | [fhir-beacon.deno.dev](https://fhir-beacon.deno.dev) |
| GitHub releases | [github.com/zenwork/fhir-beacon/releases](https://github.com/zenwork/fhir-beacon/releases) |

## Package and Compatibility

| Item | Value |
| ---- | ----- |
| Package | ${code(pkg.name)} |
| Source package version | ${code(pkg.version)} |
| Docs import target | ${code(docsImportTarget())} |
| Module type | ${code(pkg.type ?? "module")} |
| Web types package | ${code(webTypes.name ?? pkg.name)} ${
    code(webTypes.version ?? "unknown")
  } |
| Published files | ${formatList(pkg.files ?? [])} |
| Recent changelog versions | ${formatList(changelogVersions)} |

| Runtime dependency | Version |
| ------------------ | ------- |
${dependencyRows(pkg)}

## Component Summary

The generated catalogs group entries by FHIR Beacon surface. Each catalog entry
has its own page with generated attributes, properties, events, source file, and
a usage skeleton.

| Catalog | Elements | Scope |
| ------- | -------- | ----- |
${summaryRows(components)}

## Common Element Inputs

Most FHIR model elements share inherited rendering inputs. Use property binding
for complex values such as \`data\`; use attributes for string and boolean
configuration.

| Attribute | Components |
| --------- | ---------- |
${attributeRows(components)}

## API Surface

| Area | Exports | Use |
| ---- | ------- | --- |
| Display configuration | \`DisplayMode\`, \`DisplayConfig\`, \`Shell\` | Configure render mode and shared display behavior. |
| Element extension | \`BaseElement\`, \`FhirContextElement\` | Build custom renderers or template-aware custom elements. |
| FHIR definitions | \`PrimitiveDef\`, \`DatatypeDef\`, \`ResourceDef\` | Work with generated FHIR type and resource definitions. |
| Terminology helpers | \`Codes\`, \`useSystem\`, \`systemChoices\` | Read packaged code-system choices. |
| Profiling | \`profile\`, profiling builders, definition helpers | Build StructureDefinition-like profile definitions and constraints. |
| Styling | \`hostStyles\`, \`textHostStyles\` | Reuse base Lit CSS helpers when extending components. |
| Utilities | \`hasAll\`, \`hasOnly\`, \`hasNone\`, \`toDisplayMode\`, \`when\` | Use internal-adjacent helpers exported by the package. |

## Update Workflow

1. Build or update the fhir-beacon library so \`build/custom-elements.json\` and
   \`build/web-types.json\` are current.
2. Run \`deno task reference:generate\` from this docs repository.
3. Review the generated diff for component, package, dependency, and changelog
   changes.
4. Run \`deno task build\` before publishing.
`;
}

function renderCatalogPage(
  catalog: string,
  components: ComponentReference[],
): string {
  return `---
layout: layouts/base.vto
title: ${catalog}
order: ${catalogOrder.indexOf(catalog) + 3}
---

# ${catalog}

${catalogDescriptions[catalog]}

${
    catalogCategorySections(
      components.filter((component) => component.catalog === catalog),
      "./",
    )
  }
`;
}

function renderComponentPage(
  component: ComponentReference,
  order: number,
): string {
  return `---
layout: layouts/base.vto
title: ${component.tag}
order: ${order}
---

# ${component.tag}

| Item | Value |
| ---- | ----- |
| Catalog | [${component.catalog}](../) |
| Category | ${component.category} |
| Class | ${code(component.className)} |
| Superclass | ${component.superclass ? code(component.superclass) : ""} |
| Source | ${sourceLink(component.sourcePath)} |
| Storybook | [Open Storybook](https://fhir-beacon.deno.dev) |

## Usage Skeleton

<code-example language="html">
${htmlUsageExample(component)}
</code-example>

${fieldTable("Attributes", component.attributes)}
${fieldTable("Properties", component.properties)}
${eventTable(component.events)}
## Source Metadata

| Source | Value |
| ------ | ----- |
| Custom elements manifest | ${sourceLink("build/custom-elements.json")} |
| Web types metadata | ${sourceLink("build/web-types.json")} |
| Catalog | [${component.catalog}](../) |
`;
}

async function cleanCatalogDirs(): Promise<void> {
  for (const catalog of catalogOrder) {
    await Deno.mkdir(catalogDir(catalog), { recursive: true });
    await removeMarkdownFiles(catalogDir(catalog));
  }
  await removeDirectoryIfExists(legacyComponentCatalogDir);
}

async function removeMarkdownFiles(dir: URL): Promise<void> {
  for await (const entry of Deno.readDir(dir)) {
    const path = new URL(entry.name, dir);
    if (entry.isDirectory) {
      await removeMarkdownFiles(new URL(`${entry.name}/`, dir));
      continue;
    }
    if (entry.isFile && entry.name.endsWith(".md")) {
      await Deno.remove(path);
    }
  }
}

async function removeDirectoryIfExists(dir: URL): Promise<void> {
  try {
    await Deno.remove(dir, { recursive: true });
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return;
    }
    throw error;
  }
}

async function writeGeneratedPages(args: {
  pkg: PackageJson;
  webTypes: WebTypes;
  components: ComponentReference[];
  changelogVersions: string[];
}): Promise<void> {
  await Deno.writeTextFile(libraryReferencePath, renderLibraryReference(args));
  await cleanCatalogDirs();
  await Promise.all(
    catalogOrder.map(async (catalog) => {
      await Deno.mkdir(catalogDir(catalog), { recursive: true });
      const catalogComponents = args.components.filter((component) =>
        component.catalog === catalog
      );
      await Deno.writeTextFile(
        catalogPagePath(catalog),
        renderCatalogPage(catalog, catalogComponents),
      );
      await Promise.all(
        catalogComponents.map((component, index) =>
          Deno.writeTextFile(
            componentPagePath(component),
            renderComponentPage(component, index + 20),
          )
        ),
      );
    }),
  );
}

const [pkg, customElements, webTypes, changelog] = await Promise.all([
  readJson<PackageJson>("package.json"),
  readJson<CustomElementsManifest>("build/custom-elements.json"),
  readJson<WebTypes>("build/web-types.json"),
  Deno.readTextFile(new URL("CHANGELOG.md", libraryDir)),
]);

const components = componentReferences(customElements, webTypes);
await writeGeneratedPages({
  pkg,
  webTypes,
  components,
  changelogVersions: latestVersions(changelog),
});

console.info(`Generated ${libraryReferencePath.pathname}`);
console.info(
  `Generated ${
    components.length + catalogOrder.length
  } catalog page(s) in ${catalogRootDir.pathname}`,
);
