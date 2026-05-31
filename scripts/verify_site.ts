const siteRoot = new URL("../_site/", import.meta.url);

const requiredPages = [
  "index.html",
  "learn/index.html",
  "learn/overview/index.html",
  "learn/getting-started/index.html",
  "learn/concepts/index.html",
  "learn/project-status/index.html",
  "learn/examples/index.html",
  "learn/guides/index.html",
  "fhir-data/index.html",
  "fhir-data/core/index.html",
  "fhir-data/fhir-igs/index.html",
  "fhir-data/advanced-topics/index.html",
  "customization/index.html",
  "customization/themes-and-css/index.html",
  "customization/presentation-primitives/index.html",
  "customization/type-and-resource-rendering/index.html",
  "reference/index.html",
  "reference/fhir-reference/index.html",
  "reference/library-reference/index.html",
  "play/index.html",
];

const draftPages: string[] = [];

const includeDrafts = Deno.env.get("LUME_DRAFTS") === "true";
const errors: string[] = [];

async function exists(path: string): Promise<boolean> {
  try {
    const stat = await Deno.stat(new URL(path, siteRoot));
    return stat.isFile;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    }
    throw error;
  }
}

for (const page of requiredPages) {
  if (!await exists(page)) {
    errors.push(`Missing required page: ${page}`);
  }
}

for (const page of draftPages) {
  const pageExists = await exists(page);
  if (includeDrafts && !pageExists) {
    errors.push(`Missing draft page in draft build: ${page}`);
  } else if (!includeDrafts && pageExists) {
    errors.push(`Draft page should not be present in public build: ${page}`);
  }
}

const htmlFiles: string[] = [];

async function collectHtmlFiles(dir: URL, prefix = "") {
  for await (const entry of Deno.readDir(dir)) {
    const childPath = `${prefix}${entry.name}`;
    if (entry.isDirectory) {
      await collectHtmlFiles(new URL(`${entry.name}/`, dir), `${childPath}/`);
    } else if (entry.isFile && entry.name.endsWith(".html")) {
      htmlFiles.push(childPath);
    }
  }
}

await collectHtmlFiles(siteRoot);

function localPathFromHref(
  href: string,
  fromHtmlPath: string,
): string | undefined {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return undefined;
  }

  const url = new URL(href, `https://fhir-beacon.local${fromHtmlPath}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname.endsWith("/")) {
    pathname += "index.html";
  } else if (!pathname.split("/").at(-1)?.includes(".")) {
    pathname += "/index.html";
  }

  return pathname.replace(/^\//, "");
}

for (const htmlPath of htmlFiles) {
  const htmlUrl = new URL(htmlPath, siteRoot);
  const html = await Deno.readTextFile(htmlUrl);
  const relativeHtmlPath = `/${htmlPath}`;
  const hrefs = html.matchAll(/\bhref=(["'])(.*?)\1/g);

  for (const match of hrefs) {
    const href = match[2];
    const localPath = localPathFromHref(href, relativeHtmlPath);
    if (!localPath) {
      continue;
    }
    if (!await exists(localPath)) {
      errors.push(
        `Broken internal link in ${relativeHtmlPath}: ${href} -> ${localPath}`,
      );
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  Deno.exit(1);
}

console.log(
  `Verified ${requiredPages.length} required pages, ${draftPages.length} draft pages, and ${htmlFiles.length} built HTML files.`,
);
