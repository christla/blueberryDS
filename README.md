# Vue 3 + Tailwind CSS Design System Monorepo

Packages
- `@acme/ui`: Vue 3 component library (atoms, molecules, organisms, meta, a11y)
- `@acme/playground`: Vite app demonstrating components and patterns

Quickstart
1. Install: `corepack enable && pnpm i`
2. Dev: `pnpm dev` (playground at http://localhost:5173)
3. Build UI: `pnpm -r --filter @acme/ui build`

Atomic structure
- Atoms: `packages/ui/src/atoms/*`
- Molecules: `packages/ui/src/molecules/*`
- Organisms: `packages/ui/src/organisms/*`
- Meta/A11y: wrappers and utilities

Theming
- CSS variables in `packages/ui/src/styles/tokens.css`
- Tailwind consumes tokens via `apps/playground/tailwind.config.cjs`
- Dark mode class on `html` toggles theme

Notes
- Complex components (tables, rich text, date range) can build atop headless primitives used here.