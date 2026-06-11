import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentType = "blog" | "projects" | "cerpen";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  type: ContentType;
  featured?: boolean;
  readingTime?: number;
  coverImage?: string;
  tech?: string[];       // for projects
  status?: string;       // for projects: "completed" | "ongoing" | "archived"
  demoUrl?: string;      // for projects
  repoUrl?: string;      // for projects
}

export interface Post extends PostMeta {
  content: string;
}

const contentDir = path.join(process.cwd(), "content");

export function getPostSlugs(type: ContentType): string[] {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

export function getPostBySlug(type: ContentType, slug: string): Post {
  const dir = path.join(contentDir, type);
  const mdxPath = path.join(dir, `${slug}.mdx`);
  const mdPath = path.join(dir, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? new Date().toISOString().split("T")[0],
    description: data.description ?? "",
    tags: data.tags ?? [],
    type,
    featured: data.featured ?? false,
    readingTime,
    coverImage: data.coverImage,
    tech: data.tech,
    status: data.status,
    demoUrl: data.demoUrl,
    repoUrl: data.repoUrl,
    content,
  };
}

export function getAllPosts(type: ContentType): Post[] {
  const slugs = getPostSlugs(type);
  return slugs
    .map((slug) => getPostBySlug(type, slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostsMeta(type: ContentType): PostMeta[] {
  return getAllPosts(type).map(({ content: _c, ...meta }) => meta);
}

export function getFeaturedPosts(): PostMeta[] {
  const allTypes: ContentType[] = ["blog", "projects", "cerpen"];
  return allTypes
    .flatMap((t) => getAllPostsMeta(t))
    .filter((p) => p.featured)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);
}

export function getRecentPosts(limit = 5): PostMeta[] {
  const allTypes: ContentType[] = ["blog", "projects", "cerpen"];
  return allTypes
    .flatMap((t) => getAllPostsMeta(t))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}
