import Link from "next/link";
import { ArrowRight, BookOpen, Code2, ImageIcon, PenLine } from "lucide-react";
import { getAllPostsMeta, getFeaturedPosts, getRecentPosts } from "@/lib/content";
import { PostCard } from "@/components/ui/PostCard";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function Home() {
  const featuredProjects = getAllPostsMeta("projects").filter((p) => p.featured).slice(0, 3);
  const recentPosts = getRecentPosts(5).filter((p) => p.type !== "projects");
  const featuredPost = getFeaturedPosts().find((p) => p.type !== "projects");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">

      {/* HERO */}
      <section className="pt-16 pb-12 border-b border-ink-100 dark:border-ink-800">
        <p className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-4">
          Digital Marketer · Statistika · Machine Learning
        </p>
        <h1 className="text-[32px] sm:text-[40px] font-medium text-ink-900 dark:text-ink-50 leading-tight mb-4 tracking-tight">
          Halo, saya{" "}
          <span className="text-accent">Syaiful.</span>
        </h1>
        <p className="text-[16px] text-ink-500 dark:text-ink-400 leading-relaxed max-w-xl mb-6">
          Ini adalah ruang berpikir saya — catatan perjalanan belajar statistika dan machine learning,
          opini tentang hal-hal yang saya pedulikan, dan sesekali cerpen.
          Gratis, terbuka, bebas dari algoritma sosial media.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Statistika", "Machine Learning", "R Language", "Digital Marketing", "Cerpen"].map((chip) => (
            <span
              key={chip}
              className="text-[12px] px-3 py-1 rounded-full border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-400"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-ink-100 dark:border-ink-800">
        {[
          { href: "/blog", icon: BookOpen, label: "Tulisan", desc: "Opini & catatan belajar" },
          { href: "/projects", icon: Code2, label: "Proyek", desc: "Data & visualisasi" },
          { href: "/cerpen", icon: PenLine, label: "Cerpen", desc: "Fiksi pendek" },
          { href: "/gallery", icon: ImageIcon, label: "Galeri", desc: "Foto & video" },
        ].map(({ href, icon: Icon, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col gap-2 p-4 rounded-xl border border-ink-100 dark:border-ink-800 hover:border-accent/30 dark:hover:border-accent/30 transition-all"
          >
            <Icon size={16} className="text-accent" />
            <div>
              <p className="text-[13px] font-medium text-ink-800 dark:text-ink-100">{label}</p>
              <p className="text-[11px] text-ink-400 dark:text-ink-500">{desc}</p>
            </div>
          </Link>
        ))}
      </section>

      <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* MAIN: PROJECTS */}
        <div className="lg:col-span-2 space-y-10">

          {/* Featured project */}
          {featuredProjects.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500">
                  Proyek Unggulan
                </h2>
                <Link href="/projects" className="text-[12px] text-accent hover:underline flex items-center gap-1">
                  semua proyek <ArrowRight size={11} />
                </Link>
              </div>
              {featuredProjects[0] && (
                <ProjectCard post={featuredProjects[0]} featured />
              )}
              {featuredProjects.length > 1 && (
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {featuredProjects.slice(1, 3).map((p) => (
                    <ProjectCard key={p.slug} post={p} />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Featured article */}
          {featuredPost && (
            <section>
              <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-4">
                Tulisan Pilihan
              </h2>
              <PostCard post={featuredPost} variant="featured" />
            </section>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Recent posts */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500">
                Terbaru
              </h2>
              <Link href="/blog" className="text-[12px] text-accent hover:underline">
                semua
              </Link>
            </div>
            <div>
              {recentPosts.map((post, i) => (
                <PostCard key={post.slug} post={post} variant="compact" index={i} />
              ))}
            </div>
          </div>

          {/* About blurb */}
          <div className="border border-ink-100 dark:border-ink-800 rounded-xl p-4">
            <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-2">
              Tentang Blog
            </h2>
            <p className="text-[13px] text-ink-500 dark:text-ink-400 leading-relaxed mb-3">
              Blog ini adalah pengganti LinkedIn dan Instagram saya. Dokumentasi perjalanan belajar,
              dan tempat berbagi ilmu secara gratis kepada siapa saja yang minat.
            </p>
            <Link
              href="/about"
              className="text-[12px] text-accent hover:underline flex items-center gap-1"
            >
              baca selengkapnya <ArrowRight size={11} />
            </Link>
          </div>

          {/* Topics */}
          <div>
            <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-3">
              Topik
            </h2>
            <div className="flex flex-wrap gap-2">
              {["statistika", "machine learning", "r language", "python", "marketing", "opini", "cerpen", "galeri"].map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="tag hover:border-accent/40 hover:text-accent transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
