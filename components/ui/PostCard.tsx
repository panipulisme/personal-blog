import Link from "next/link";
import type { PostMeta } from "@/lib/content";
import { formatDate, cn } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";

interface PostCardProps {
  post: PostMeta;
  variant?: "default" | "featured" | "compact";
  index?: number;
}

const TYPE_HREF: Record<string, string> = {
  blog: "/blog",
  projects: "/projects",
  cerpen: "/cerpen",
};

const TYPE_LABEL: Record<string, string> = {
  blog: "tulisan",
  projects: "proyek",
  cerpen: "cerpen",
};

export function PostCard({ post, variant = "default", index }: PostCardProps) {
  const href = `${TYPE_HREF[post.type]}/${post.slug}`;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="group flex items-start gap-3 py-3 border-b border-ink-100 dark:border-ink-800 last:border-b-0 hover:bg-ink-100/50 dark:hover:bg-ink-900/50 -mx-3 px-3 rounded-md transition-colors"
      >
        {index !== undefined && (
          <span className="text-accent font-medium text-[13px] min-w-[20px] mt-0.5">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-medium text-ink-800 dark:text-ink-100 group-hover:text-accent dark:group-hover:text-accent transition-colors truncate">
            {post.title}
          </p>
          <p className="text-[11px] text-ink-400 dark:text-ink-500 mt-0.5">
            {formatDate(post.date)} · {TYPE_LABEL[post.type]}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={href}
        className="group block border border-ink-100 dark:border-ink-800 rounded-xl p-6 hover:border-ink-300 dark:hover:border-ink-600 transition-all bg-white dark:bg-ink-900"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="tag-accent">{TYPE_LABEL[post.type]}</span>
          {post.status && (
            <span className={cn("tag", post.status === "ongoing" ? "text-accent border-accent/30" : "")}>
              {post.status}
            </span>
          )}
        </div>
        <h2 className="text-[18px] font-medium text-ink-900 dark:text-ink-50 group-hover:text-accent transition-colors leading-snug mb-2">
          {post.title}
        </h2>
        <p className="text-[13px] text-ink-500 dark:text-ink-400 line-clamp-2 leading-relaxed mb-4">
          {post.description}
        </p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between text-[12px] text-ink-400 dark:text-ink-500">
          <div className="flex items-center gap-3">
            <span>{formatDate(post.date)}</span>
            {post.readingTime && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {post.readingTime} mnt
                </span>
              </>
            )}
          </div>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-accent" />
        </div>
      </Link>
    );
  }

  // default card
  return (
    <Link
      href={href}
      className="group block border border-ink-100 dark:border-ink-800 rounded-lg p-4 hover:border-accent/30 dark:hover:border-accent/30 transition-all"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="tag">{TYPE_LABEL[post.type]}</span>
      </div>
      <h3 className="text-[15px] font-medium text-ink-800 dark:text-ink-100 group-hover:text-accent transition-colors leading-snug mb-1.5">
        {post.title}
      </h3>
      <p className="text-[13px] text-ink-500 dark:text-ink-400 line-clamp-2 mb-3 leading-relaxed">
        {post.description}
      </p>
      <div className="flex items-center gap-2 text-[11px] text-ink-400 dark:text-ink-500">
        <span>{formatDate(post.date)}</span>
        {post.readingTime && (
          <>
            <span>·</span>
            <span>{post.readingTime} mnt baca</span>
          </>
        )}
      </div>
    </Link>
  );
}
