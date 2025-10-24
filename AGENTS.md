# Repository Guidelines

## Project Structure & Module Organization
The Vite + React app lives in `src/`. Use `components/` for shared UI atoms, `sections/` for homepage blocks, and `pages/` for routed views. Content-driven copy sits in `content/` and `data/`, while Tailwind-ready media files belong in `assets/`. Global setup resides in `main.tsx` and `App.tsx`. Static files are in `public/`, with deployment rules in `netlify.toml` and bundler settings across `vite.config.ts`, `tailwind.config.js`, and `postcss.config.js`.

## Build, Test, and Development Commands
Run `npm install` once to sync dependencies. Use `npm run dev` for the local Vite dev server. `npm run build` performs a TypeScript project build followed by the production bundle. `npm run lint` executes ESLint using the shared config in `eslint.config.js`. Preview the production build with `npm run preview` before shipping changes.

## Coding Style & Naming Conventions
Write TypeScript React components with 2-space indentation and prefer functional components. Name components and hooks in PascalCase (`SectionTitle`) and files in camel-case with `.tsx` or `.ts` extensions. Co-locate feature helpers in `lib/` and keep data constants in `data/`. Tailwind classes stay alphabetized where practical to ease diff review. Run `npm run lint` to autofix safe issues and keep imports sorted.

## Testing Guidelines
Automated tests are not yet configured; introduce `vitest` with `@testing-library/react` when adding coverage. Place specs alongside components as `<Component>.test.tsx` or in `src/__tests__/`. Target at least 80% coverage on new code paths and include accessibility assertions for interactive components. Until tests land, verify flows manually in `npm run dev` and capture regression notes in the PR.

## Commit & Pull Request Guidelines
Follow Conventional Commit prefixes (`feat:`, `fix:`, `chore:`) as seen in git history, keeping messages in the imperative mood. Each PR should summarize intent, enumerate major changes, and link related issues or Netlify deploy previews. Attach before/after screenshots or clips for UI adjustments. Confirm `npm run lint` and `npm run build` pass before requesting review. Tag reviewers who own the affected sections.
