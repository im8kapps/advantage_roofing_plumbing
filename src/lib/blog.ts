export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  heroImage?: string;
  date: string;
  formattedDate: string;
  body: string;
}

interface FrontMatterResult {
  data: Record<string, string>;
  content: string;
}

function parseFrontMatter(raw: string): FrontMatterResult {
  const normalized = raw.replace(/\r\n/g, '\n').trimStart();

  if (!normalized.startsWith('---')) {
    return { data: {}, content: raw.trim() };
  }

  const match = /^---\s*\n([\s\S]*?)\n---\s*/.exec(normalized);

  if (!match) {
    return { data: {}, content: raw.trim() };
  }

  const frontMatterRaw = match[1];
  const content = normalized.slice(match[0].length).trim();
  const data: Record<string, string> = {};

  for (const line of frontMatterRaw.split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) {
      continue;
    }

    const [key, ...rest] = line.split(':');
    if (!key || rest.length === 0) {
      continue;
    }

    const value = rest.join(':').trim();
    data[key.trim()] = value.replace(/^"|"$/g, '');
  }

  return { data, content };
}

const rawPosts = import.meta.glob('../content/blog/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>;

function parseDate(value: unknown): string {
  if (typeof value === 'string') {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.valueOf())) {
      return parsed.toISOString();
    }
  }

  return new Date().toISOString();
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function parsePost(entry: [string, string]): BlogPost {
  const [path, fileContent] = entry;
  const { data, content } = parseFrontMatter(fileContent);
  const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? 'post';

  const isoDate = parseDate(data.date);

  return {
    slug,
    title: typeof data.title === 'string' ? data.title : slug,
    summary: typeof data.summary === 'string' ? data.summary : '',
    heroImage: typeof data.heroImage === 'string' ? data.heroImage : undefined,
    date: isoDate,
    formattedDate: formatDate(isoDate),
    body: content.trim(),
  };
}

const postsCache: BlogPost[] = Object.entries(rawPosts)
  .map(parsePost)
  .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

export function getAllPosts(): BlogPost[] {
  return postsCache;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return postsCache.find((post) => post.slug === slug);
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  return postsCache.slice(0, limit);
}
