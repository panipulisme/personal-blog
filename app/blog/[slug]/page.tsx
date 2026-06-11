import { notFound } from "next/navigation";
import { getAllPostsMeta, getPostBySlug } from "@/lib/content";
import { MDXContent } from "@/components/ui/MDXContent";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostsMeta("blog").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug("blog", params.slug);
    return { title: post.title, description: post.description };
  } catch {
    return {};
  }
}

export default function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug("blog", params.slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-[13px] text-ink-400 hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        semua tulisan
      </Link>

      {/* Post header */}
      <header className="mb-8 pb-6 border-b border-ink-100 dark:border-ink-800">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="tag-accent">tulisan</span>
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <h1 className="text-[26px] sm:text-[32px] font-medium text-ink-900 dark:text-ink-50 leading-tight mb-3">
          {post.title}
        </h1>
        <p className="text-[15px] text-ink-500 dark:text-ink-400 leading-relaxed mb-4">
          {post.description}
        </p>
        <div className="flex items-center gap-3 text-[12px] text-ink-400 dark:text-ink-500">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readingTime} menit baca
          </span>
        </div>
      </header>

      {/* Content */}
      <MDXContent source={post.content} />

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-ink-100 dark:border-ink-800">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-[13px] text-accent hover:underline"
        >
          <ArrowLeft size={14} />
          kembali ke tulisan
        </Link>
      </div>
    </div>
  );
}
