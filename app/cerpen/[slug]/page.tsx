import { notFound } from "next/navigation";
import { getAllPostsMeta, getPostBySlug } from "@/lib/content";
import { MDXContent } from "@/components/ui/MDXContent";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPostsMeta("cerpen").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug("cerpen", params.slug);
    return { title: post.title, description: post.description };
  } catch { return {}; }
}

export default function CerpenDetailPage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug("cerpen", params.slug);
  } catch { notFound(); }

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/cerpen"
        className="inline-flex items-center gap-1.5 text-[13px] text-ink-400 hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        semua cerpen
      </Link>

      <header className="mb-10 pb-6 border-b border-ink-100 dark:border-ink-800 text-center">
        <div className="flex justify-center gap-2 mb-4">
          <span className="tag-accent">cerpen</span>
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <h1 className="text-[28px] sm:text-[34px] font-medium text-ink-900 dark:text-ink-50 leading-tight mb-3" style={{ fontFamily: "Georgia, serif" }}>
          {post.title}
        </h1>
        {post.description && (
          <p className="text-[14px] text-ink-500 dark:text-ink-400 italic mb-4">
            {post.description}
          </p>
        )}
        <div className="flex items-center justify-center gap-3 text-[12px] text-ink-400 dark:text-ink-500">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readingTime} menit baca
          </span>
        </div>
      </header>

      {/* Cerpen uses serif body */}
      <article className="prose max-w-none prose-lg dark:prose-invert" style={{ fontFamily: "Georgia, Cambria, serif", lineHeight: "1.9" }}>
        <MDXContent source={post.content} />
      </article>

      <div className="mt-12 pt-6 border-t border-ink-100 dark:border-ink-800">
        <Link href="/cerpen" className="inline-flex items-center gap-1.5 text-[13px] text-accent hover:underline">
          <ArrowLeft size={14} />
          kembali ke cerpen
        </Link>
      </div>
    </div>
  );
}
