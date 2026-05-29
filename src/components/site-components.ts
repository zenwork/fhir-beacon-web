// deno-lint-ignore-file
import 'https://raw.githubusercontent.com/zenwork/theme-webawesome/v1.1.1/src/components/index.ts'
import 'https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.7.0/dist-cdn/components/badge/badge.js'
import DOMPurify       from 'dompurify'
import * as fhirBeacon from 'fhir-beacon'




const SHOELACE_THEME_URL =
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/themes/light.css";

function ensureShoelaceTheme(): void {
  if (typeof document === "undefined") {
    return;
  }
  const existing = document.querySelector<HTMLLinkElement>(
    `link[href="${SHOELACE_THEME_URL}"]`,
  );
  if (existing) {
    return;
  }
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = SHOELACE_THEME_URL;
  document.head.appendChild(link);
}

ensureShoelaceTheme();

const runtime = globalThis as typeof globalThis & {
  fhirBeacon?: typeof fhirBeacon;
};
runtime.fhirBeacon = fhirBeacon;

const originalSanitize = DOMPurify.sanitize.bind(DOMPurify);

DOMPurify.sanitize = ((
  dirty: string | Node,
  options?: Parameters<typeof DOMPurify.sanitize>[1],
) => {
  if (!options || typeof options !== "object") {
    return originalSanitize(dirty, options);
  }

  const nextOptions = { ...options };
  const custom = {
    ...(nextOptions.CUSTOM_ELEMENT_HANDLING ?? {}),
  };

  const originalTagNameCheck = custom.tagNameCheck;
  custom.tagNameCheck = (tagName: string) => {
    if (tagName.toLowerCase().startsWith("fhir-")) {
      return true;
    }
    if (originalTagNameCheck instanceof RegExp) {
      return originalTagNameCheck.test(tagName);
    }
    if (typeof originalTagNameCheck === "function") {
      return originalTagNameCheck(tagName);
    }
    return false;
  };

  const originalAttributeNameCheck = custom.attributeNameCheck;
  custom.attributeNameCheck = (attributeName: string) => {
    if (/^[a-z][a-z0-9_.:-]*$/i.test(attributeName)) {
      return true;
    }
    if (originalAttributeNameCheck instanceof RegExp) {
      return originalAttributeNameCheck.test(attributeName);
    }
    if (typeof originalAttributeNameCheck === "function") {
      return originalAttributeNameCheck(attributeName);
    }
    return false;
  };

  nextOptions.CUSTOM_ELEMENT_HANDLING = custom;
  return originalSanitize(dirty, nextOptions);
}) as typeof DOMPurify.sanitize;
