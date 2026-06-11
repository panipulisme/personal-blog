import { getAllPostsMeta } from "@/lib/content";
import { PostCard } from "@/components/ui/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tulisan",
  description: "Semua tulisan: opini, catatan belajar statistika, machine learning, dan hal-hal lain.",
};

export default function BlogPage() {
  const posts = getAllPostsMeta("blog");

  // collect unique tags
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10 border-b border-ink-100 dark:border-ink-800 pb-8">
        <p className="text-[11px] font-medium tracking-widest uppercase text-ink-400 mb-2">tulisan</p>
        <h1 className="text-[28px] font-medium text-ink-900 dark:text-ink-50 mb-2">
          Catatan & Opini
        </h1>
        <p className="text-[14px] text-ink-500 dark:text-ink-400 max-w-lg">
          Tulisan tentang statistika, machine learning, digital marketing, dan hal-hal yang saya temui di perjalanan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Posts */}
        <div className="lg:col-span-3">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-ink-400 dark:text-ink-500">
              <p className="text-[14px]">Belum ada tulisan. Segera hadir.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} variant="featured" />
              ))}
            </div>
          )}
        </div>

        {/* Tags sidebar */}
        <aside>
          <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-3">
            Topik
          </h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <span key={tag} className="tag cursor-pointer hover:border-accent/40 hover:text-accent transition-colors">
                {tag}
              </span>
            ))}
            {allTags.length === 0 && (
              <span className="text-[13px] text-ink-400">-</span>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
