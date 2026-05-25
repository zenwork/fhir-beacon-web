# Design Tokens

This document defines the first design token direction for the FHIR Beacon docs
site. The goal is to keep the site visually consistent while still letting the
theme and Web Awesome provide most of the component-level styling.

Tokens should describe intent before implementation. When a value is promoted
into CSS, use the `--fb-*` prefix for site-owned tokens and map those tokens
into Web Awesome variables where appropriate.

## Principles

- The site should feel technical, clear, and direct.
- The visual system should support reading, scanning, examples, and status
  comparison before decoration.
- FHIR data examples should be visually distinct from prose without feeling like
  a separate product.
- Status labels must be easy to distinguish by meaning, not only by color.
- The palette should use brand green as an accent, not as the whole interface.

## Token Layers

- `--fb-*`: FHIR Beacon site tokens owned by this repository.
- `--wa-*`: Web Awesome tokens supplied by the theme/component system.
- Component-local tokens: narrow overrides for a specific custom component or
  demo surface.

Site tokens should be mapped into `--wa-*` only when the value is meant to
change Web Awesome component behavior globally.

## Color

### Brand

The current brand direction is a clear green. It should be used for identity,
primary actions, selected states, and subtle emphasis.

| Token                          | Value                      | Use                                           |
|--------------------------------|----------------------------|-----------------------------------------------|
| `--fb-color-brand`             | `oklch(0.76 0.131 151.27)` | Primary brand accent                          |
| `--fb-color-brand-strong`      | `oklch(0.41 0.105 158.4)`  | Brand text and strong marks on light surfaces |
| `--fb-color-brand-dark`        | `oklch(0.69 0.122 153.71)` | Primary brand accent in dark mode             |
| `--fb-color-brand-dark-strong` | `oklch(0.85 0.128 153.71)` | Brand text and strong marks on dark surfaces  |

Initial Web Awesome mapping:

```css
:root,
.wa-light {
  --wa-color-brand-fill-normal: var(--fb-color-brand);
  --wa-color-brand-text-loud: var(--fb-color-brand-strong);
}

.wa-dark {
  --wa-color-brand-fill-normal: var(--fb-color-brand-dark);
  --wa-color-brand-text-loud: var(--fb-color-brand-dark-strong);
}
```

### Surfaces

Surface tokens should keep content readable and avoid a one-color UI.

| Token                       | Use                                              |
|-----------------------------|--------------------------------------------------|
| `--fb-color-surface-page`   | Main page background                             |
| `--fb-color-surface-panel`  | Repeated cards, callouts, and contained examples |
| `--fb-color-surface-raised` | Floating menus, popovers, and overlays           |
| `--fb-color-surface-code`   | Code blocks and editable code examples           |
| `--fb-color-border-subtle`  | Low-emphasis boundaries                          |
| `--fb-color-border-strong`  | Focused or selected boundaries                   |

### Text

| Token                     | Use                                        |
|---------------------------|--------------------------------------------|
| `--fb-color-text`         | Primary prose and UI text                  |
| `--fb-color-text-muted`   | Secondary copy, metadata, captions         |
| `--fb-color-text-subtle`  | Low-emphasis helper text                   |
| `--fb-color-text-inverse` | Text on strong brand or status backgrounds |

### Status

Status tokens are used for coverage tables, release state, and implementation
labels.

Use Web Awesome `wa-badge` in pill format for all status labels. Status labels
should not be hand-styled as arbitrary inline spans; the badge component is the
shared status-label primitive for the site.

| Status                                                 | Token                            | Meaning                                       |
|--------------------------------------------------------|----------------------------------|-----------------------------------------------|
| <wa-badge variant="success" pill>available</wa-badge>  | `--fb-color-status-available`    | Available and expected to work                |
| <wa-badge variant="warning" pill>partial</wa-badge>    | `--fb-color-status-partial`      | Implemented but incomplete                    |
| <wa-badge variant="neutral" pill>planned</wa-badge>    | `--fb-color-status-planned`      | Not implemented yet                           |
| <wa-badge variant="brand" pill>experimental</wa-badge> | `--fb-color-status-experimental` | Implemented but unstable or subject to change |
| <wa-badge variant="neutral" pill>unknown</wa-badge>    | `--fb-color-status-unknown`      | Not yet classified                            |

Each status should also have a background and border token:

- `--fb-color-status-available-bg`
- `--fb-color-status-available-border`
- `--fb-color-status-partial-bg`
- `--fb-color-status-partial-border`
- `--fb-color-status-planned-bg`
- `--fb-color-status-planned-border`
- `--fb-color-status-experimental-bg`
- `--fb-color-status-experimental-border`
- `--fb-color-status-unknown-bg`
- `--fb-color-status-unknown-border`

## Typography

The docs should use a restrained documentation scale. Large type belongs on
page-level introductions, not inside tables, code surfaces, navigation, or
compact panels.

| Token                     | Use                                              |
|---------------------------|--------------------------------------------------|
| `--fb-font-family-sans`   | Prose and interface text                         |
| `--fb-font-family-mono`   | Code, FHIR paths, package names, and identifiers |
| `--fb-font-size-0`        | Captions, metadata, compact labels               |
| `--fb-font-size-1`        | Small UI text                                    |
| `--fb-font-size-2`        | Default body text                                |
| `--fb-font-size-3`        | Section lead text                                |
| `--fb-font-size-4`        | H3 and compact page headings                     |
| `--fb-font-size-5`        | H2                                               |
| `--fb-font-size-6`        | H1                                               |
| `--fb-line-height-tight`  | Headings and compact controls                    |
| `--fb-line-height-normal` | Body copy                                        |
| `--fb-line-height-code`   | Code blocks and editable examples                |

## Space

Spacing should make documentation easy to scan without turning every section
into a separate card.

| Token          | Use                                        |
|----------------|--------------------------------------------|
| `--fb-space-1` | Tight inline gaps                          |
| `--fb-space-2` | Compact control gaps                       |
| `--fb-space-3` | Small component padding                    |
| `--fb-space-4` | Standard component padding                 |
| `--fb-space-5` | Section spacing inside constrained content |
| `--fb-space-6` | Page-section spacing                       |
| `--fb-space-7` | Large intro spacing                        |

## Radius

The current site should keep radii compact. Cards and component frames should
not exceed 8px unless a Web Awesome component requires it.

| Token            | Value     | Use                             |
|------------------|-----------|---------------------------------|
| `--fb-radius-sm` | `0.2rem`  | Inputs, labels, code chips      |
| `--fb-radius-md` | `0.35rem` | Buttons, callouts, small panels |
| `--fb-radius-lg` | `0.45rem` | Demo panes and repeated cards   |

Initial Web Awesome mapping:

```css
:root,
.wa-light {
  --wa-border-radius-s: var(--fb-radius-sm);
  --wa-border-radius-m: var(--fb-radius-md);
  --wa-border-radius-l: var(--fb-radius-lg);
}
```

## Borders And Focus

| Token                       | Use                                |
|-----------------------------|------------------------------------|
| `--fb-border-width-default` | Standard component border          |
| `--fb-border-width-focus`   | Focus ring or selected state       |
| `--fb-focus-ring`           | Keyboard focus outline             |
| `--fb-shadow-focus`         | Optional focus shadow for controls |

Focus states must remain visible on both light and dark backgrounds.

## Code And Demo Surfaces

The docs should favor the theme's `code-example` and `demo-pane` components for
interactive or inspectable examples.

When examples use Lit bindings (for example `.data=${data}`), the whole snippet
must be wrapped in a render function using `html\`\``. Do not show Lit binding
syntax in plain HTML snippets.

| Token                          | Use                                 |
|--------------------------------|-------------------------------------|
| `--fb-code-background`         | Code editor and static code surface |
| `--fb-code-text`               | Code text                           |
| `--fb-code-border`             | Code surface boundary               |
| `--fb-demo-background`         | Rendered demo preview background    |
| `--fb-demo-border`             | Demo pane boundary                  |
| `--fb-demo-toolbar-background` | Example toolbar or header           |

FHIR JSON examples should use monospace type, preserve indentation, and avoid
wrapping unless the component explicitly supports a responsive code layout.

## Data Display

FHIR rendering uses repeated key/value, error, and contextual presentation
patterns. These tokens support those primitives.

| Token                     | Use                                           |
|---------------------------|-----------------------------------------------|
| `--fb-data-label-color`   | Field labels and FHIR element names           |
| `--fb-data-value-color`   | Rendered FHIR values                          |
| `--fb-data-meta-color`    | Type names, paths, codes, and system metadata |
| `--fb-data-error-color`   | Invalid, missing, or unsupported values       |
| `--fb-data-warning-color` | Partial or uncertain rendering                |
| `--fb-data-row-gap`       | Vertical spacing between rendered fields      |
| `--fb-data-column-gap`    | Horizontal spacing between label/value pairs  |

## Breakpoints

Breakpoints should describe layout behavior, not device classes.

| Token                            | Use                                    |
|----------------------------------|----------------------------------------|
| `--fb-breakpoint-content-narrow` | Single-column reading layout           |
| `--fb-breakpoint-content-wide`   | Navigation plus content layout         |
| `--fb-breakpoint-demo-split`     | Side-by-side code and preview examples |

Avoid viewport-scaled font sizes. Use breakpoints to change layout density,
column count, and visibility instead.

## First Implementation Step

- [ ] Add the `--fb-*` variables to `src/styles/webawesome-theme.css`.
- [ ] Map brand and radius tokens into existing `--wa-*` variables.
- [ ] Add status tokens before expanding coverage tables.
- [ ] Use code/demo tokens when refining `code-example` and `demo-pane`
      presentation.
