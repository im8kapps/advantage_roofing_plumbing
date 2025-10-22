import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-slate-950 px-6 py-24 text-center text-white">
      <p className="text-sm uppercase tracking-[0.4em] text-brand-light">
        404
      </p>
      <h1 className="font-display text-4xl uppercase tracking-[0.2em]">
        Page not found
      </h1>
      <p className="max-w-xl text-white/70">
        The page you were looking for does not exist. You can head back to our latest
        updates or return to the homepage to explore services.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white hover:border-brand hover:text-brand"
        >
          Go home
        </Link>
        <Link
          to="/blog"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white hover:border-brand hover:text-brand"
        >
          View blog
        </Link>
      </div>
    </div>
  );
}
