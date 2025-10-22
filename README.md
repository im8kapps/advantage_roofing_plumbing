# Advantage Roofing & Plumbing

Marketing site for **Robert Robbins Advantage Company LLC** built with Vite, React, TypeScript, Tailwind CSS, Framer Motion, MDX, and React Router.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to view the site during development.

## Available scripts

- `npm run dev` – start Vite dev server with hot reload.
- `npm run build` – type-check and generate a production build in `dist/`.
- `npm run preview` – preview the production build locally.
- `npm run lint` – run ESLint against the project source.

## Blog authoring (Git-based Markdown/MDX)

- Posts live in `src/content/blog/*.mdx`. File name becomes the slug (`2024-10-01-fall-roof-ready.mdx` → `/blog/2024-10-01-fall-roof-ready`).
- Each post must export a `meta` object:

  ```mdx
  export const meta = {
    title: 'Post title',
    date: '2024-10-01',
    excerpt: 'Short teaser that appears in cards.',
    tags: ['Roofing', 'Maintenance'],
    cover: 'https://...optional-image.jpg'
  };
  ```

- Write content below the meta block using regular Markdown/MDX. You can embed images and links; typography is handled automatically.
- Optional: add `draft: true` to the meta object to exclude a post from production builds.
- To publish a post, commit the `.mdx` file to the repository (GitHub web editor works great) and Netlify will rebuild automatically.

## Adding a new post quickly

1. Duplicate an existing file in `src/content/blog/`.
2. Update the filename, meta, and body content.
3. Commit the change (directly to `main` or via PR).  
   Deploy previews will show the new content before merging.

## Notes

- The `/blog` route lists all posts, and the homepage surfaces the three most recent entries.
- Map and live Google Reviews embeds are located in `Contact` and `Testimonials` sections; ensure the business listing remains public.
- Configure Netlify with build command `npm run build` and publish directory `dist/`.
