import Link from "next/link";
import type { PostMeta } from "@/lib/content";
import { formatDate, cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  post: PostMeta;
  featured?: boolean;
}

const STATUS_STYLE: Record<string, string> = {
  completed: "bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400",
  ongoing: "bg-accent/10 text-accent",
  archived: "bg-ink-100 text-ink-400 dark:bg-ink-800",
};

export function ProjectCard({ post, featured = false }: ProjectCardProps) {
  const href = `/projects/${post.slug}`;

  return (
    <div
      className={cn(
        "group border border-ink-100 dark:border-ink-800 rounded-xl overflow-hidden",
        "hover:border-ink-300 dark:hover:border-ink-600 transition-all",
        "bg-white dark:bg-ink-900",
        featured && "ring-1 ring-accent/20"
      )}
    >
      {/* Visual header */}
      <div className="h-32 bg-ink-900 dark:bg-ink-950 relative flex items-center justify-center overflow-hidden">
        {featured && (
          <span className="absolute top-3 left-3 bg-accent text-white text-[10px] font-medium px-2 py-0.5 rounded tracking-wide">
            UNGGULAN
          </span>
        )}
        {/* Abstract data visualization as decoration */}
        <svg width="100%" height="100%" viewBox="0 0 400 128" className="absolute inset-0 opacity-20">
          <line x1="0" y1="40" x2="400" y2="40" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="80" x2="400" y2="80" stroke="white" strokeWidth="0.5" />
          <polyline
            points="20,100 70,75 120,80 180,45 230,55 280,25 330,35 390,15"
            stroke="#E85D26"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="280" cy="25" r="3" fill="#E85D26" />
          <circle cx="390" cy="15" r="3" fill="#E85D26" />
        </svg>
        <div className="relative text-ink-500 dark:text-ink-600 text-[11px] font-mono tracking-wider">
          {post.tech?.slice(0, 3).join(" · ") ?? "project"}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {post.status && (
            <span
              className={cn(
                "text-[10px] font-medium px-2 py-0.5 rounded-full",
                STATUS_STYLE[post.status] ?? STATUS_STYLE.completed
              )}
            >
              {post.status}
            </span>
          )}
          {post.tags.slice(0, 1).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <Link href={href}>
          <h3 className="text-[15px] font-medium text-ink-900 dark:text-ink-50 group-hover:text-accent transition-colors leading-snug mb-1.5">
            {post.title}
          </h3>
        </Link>

        <p className="text-[13px] text-ink-500 dark:text-ink-400 line-clamp-2 leading-relaxed mb-3">
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-ink-400 dark:text-ink-500">
            {formatDate(post.date, "MMM yyyy")}
          </span>
          <div className="flex items-center gap-2">
            {post.repoUrl && (
              <a
                href={post.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-400 hover:text-accent transition-colors"
                
              >
                <Github size={14} />
              </a>
            )}
            {post.demoUrl && (
              <a
                href={post.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-400 hover:text-accent transition-colors"
                
              >
                <ExternalLink size={14} />
              </a>
            )}
            <Link
              href={href}
              className="text-accent hover:text-accent-dark transition-colors"
            >
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
