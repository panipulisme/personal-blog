import { notFound } from "next/navigation";
import { getAllPostsMeta, getPostBySlug } from "@/lib/content";
import { MDXContent } from "@/components/ui/MDXContent";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPostsMeta("projects").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug("projects", params.slug);
    return { title: post.title, description: post.description };
  } catch { return {}; }
}

const STATUS_LABEL: Record<string, string> = {
  completed: "Selesai",
  ongoing: "Sedang berjalan",
  archived: "Diarsipkan",
};

export default function ProjectPage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug("projects", params.slug);
  } catch { notFound(); }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-[13px] text-ink-400 hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        semua proyek
      </Link>

      <header className="mb-8 pb-6 border-b border-ink-100 dark:border-ink-800">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="tag-accent">proyek</span>
          {post.status && (
            <span className={`tag ${post.status === "ongoing" ? "text-accent border-accent/30" : ""}`}>
              {STATUS_LABEL[post.status] ?? post.status}
            </span>
          )}
        </div>
        <h1 className="text-[26px] sm:text-[32px] font-medium text-ink-900 dark:text-ink-50 leading-tight mb-3">
          {post.title}
        </h1>
        <p className="text-[15px] text-ink-500 dark:text-ink-400 leading-relaxed mb-4">
          {post.description}
        </p>

        {/* Tech stack */}
        {post.tech && post.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 text-[12px] text-ink-400 dark:text-ink-500">
          <span>{formatDate(post.date)}</span>
          {post.repoUrl && (
            <a
              href={post.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Github size={12} /> GitHub
            </a>
          )}
          {post.demoUrl && (
            <a
              href={post.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <ExternalLink size={12} /> Demo
            </a>
          )}
        </div>
      </header>

      <MDXContent source={post.content} />

      <div className="mt-12 pt-6 border-t border-ink-100 dark:border-ink-800">
        <Link href="/projects" className="inline-flex items-center gap-1.5 text-[13px] text-accent hover:underline">
          <ArrowLeft size={14} />
          kembali ke proyek
        </Link>
      </div>
    </div>
  );
}
