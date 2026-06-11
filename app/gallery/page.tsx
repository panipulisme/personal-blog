import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Foto dan video — momen, tempat, dan hal-hal yang layak diingat.",
};

// Ganti dengan data galeri kamu yang sesungguhnya.
// Bisa diintegrasikan dengan Cloudinary, S3, atau folder lokal.
const GALLERY_ITEMS = [
  {
    id: 1,
    type: "photo" as const,
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    caption: "Dashboard analytics pertama saya",
    date: "2024-11",
    tags: ["data", "kerja"],
  },
  {
    id: 2,
    type: "photo" as const,
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    caption: "Belajar coding malam hari",
    date: "2024-10",
    tags: ["belajar"],
  },
  {
    id: 3,
    type: "photo" as const,
    src: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&q=80",
    caption: "Sore di Jakarta",
    date: "2024-09",
    tags: ["kota", "jakarta"],
  },
  {
    id: 4,
    type: "photo" as const,
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    caption: "Visualisasi data pertama di R",
    date: "2024-08",
    tags: ["r", "statistika"],
  },
  {
    id: 5,
    type: "photo" as const,
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    caption: "Setup belajar di rumah",
    date: "2024-07",
    tags: ["setup", "belajar"],
  },
  {
    id: 6,
    type: "photo" as const,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    caption: "Kopi dan buku statistika",
    date: "2024-06",
    tags: ["kehidupan"],
  },
];

export default function GalleryPage() {
  const allTags = Array.from(new Set(GALLERY_ITEMS.flatMap((i) => i.tags))).sort();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10 border-b border-ink-100 dark:border-ink-800 pb-8">
        <p className="text-[11px] font-medium tracking-widest uppercase text-ink-400 mb-2">galeri</p>
        <h1 className="text-[28px] font-medium text-ink-900 dark:text-ink-50 mb-2">
          Foto & Video
        </h1>
        <p className="text-[14px] text-ink-500 dark:text-ink-400 max-w-lg">
          Momen, tempat, dan hal-hal yang layak diingat.
          Tanpa filter algoritma, tanpa likes counter.
        </p>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="tag tag-accent cursor-pointer">semua</span>
        {allTags.map((tag) => (
          <span key={tag} className="tag cursor-pointer hover:border-accent/40 hover:text-accent transition-colors">
            {tag}
          </span>
        ))}
      </div>

      {/* Masonry-like grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {GALLERY_ITEMS.map((item, i) => (
          <div
            key={item.id}
            className="break-inside-avoid group border border-ink-100 dark:border-ink-800 rounded-xl overflow-hidden hover:border-ink-300 dark:hover:border-ink-600 transition-all"
          >
            {item.type === "photo" ? (
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  loading={i > 3 ? "lazy" : "eager"}
                />
              </div>
            ) : (
              <div className="bg-ink-900 aspect-video flex items-center justify-center">
                <span className="text-ink-400 text-[12px]">video</span>
              </div>
            )}
            <div className="p-3">
              <p className="text-[13px] font-medium text-ink-700 dark:text-ink-300 mb-1">
                {item.caption}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-ink-400 dark:text-ink-500">{item.date}</span>
                {item.tags.slice(0, 2).map((t) => (
                  <span key={t} className="tag text-[9px] px-1.5 py-0">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload note */}
      <div className="mt-12 p-4 border border-dashed border-ink-200 dark:border-ink-700 rounded-xl text-center">
        <p className="text-[13px] text-ink-400 dark:text-ink-500">
          Untuk menambah foto, edit <code className="text-accent text-[12px]">app/gallery/page.tsx</code> atau integrasikan dengan Cloudinary / S3.
        </p>
      </div>
    </div>
  );
}
