import { getAllPostsMeta } from "@/lib/content";
import { PostCard } from "@/components/ui/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cerpen",
  description: "Kumpulan cerita pendek — fiksi, imajinatif, dan kadang terlalu jujur.",
};

export default function CerpenPage() {
  const posts = getAllPostsMeta("cerpen");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10 border-b border-ink-100 dark:border-ink-800 pb-8">
        <p className="text-[11px] font-medium tracking-widest uppercase text-ink-400 mb-2">cerpen</p>
        <h1 className="text-[28px] font-medium text-ink-900 dark:text-ink-50 mb-2">
          Cerita Pendek
        </h1>
        <p className="text-[14px] text-ink-500 dark:text-ink-400 max-w-lg">
          Fiksi pendek. Mungkin tentang orang sungguhan, mungkin tidak.
          Dibaca dengan tenang, lebih baik.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-ink-400">
          <p className="text-[14px]">Belum ada cerpen. Segera hadir.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} variant="featured" />
          ))}
        </div>
      )}
    </div>
  );
}
