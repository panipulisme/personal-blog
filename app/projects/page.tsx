import { getAllPostsMeta } from "@/lib/content";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyek",
  description: "Kumpulan proyek data, visualisasi statistika, dan eksperimen machine learning.",
};

export default function ProjectsPage() {
  const projects = getAllPostsMeta("projects");
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const allTech = Array.from(new Set(projects.flatMap((p) => p.tech ?? []))).sort();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10 border-b border-ink-100 dark:border-ink-800 pb-8">
        <p className="text-[11px] font-medium tracking-widest uppercase text-ink-400 mb-2">proyek</p>
        <h1 className="text-[28px] font-medium text-ink-900 dark:text-ink-50 mb-2">
          Proyek & Portofolio
        </h1>
        <p className="text-[14px] text-ink-500 dark:text-ink-400 max-w-lg">
          Analisis data, visualisasi statistika, eksperimen machine learning, dan proyek digital marketing.
          Semuanya terdokumentasi di sini.
        </p>
      </div>

      {/* Tech filter chips */}
      {allTech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {allTech.map((t) => (
            <span key={t} className="tag cursor-pointer hover:border-accent/40 hover:text-accent transition-colors">
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Featured */}
      {featured.length > 0 && (
        <section className="mb-10">
          <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-4">
            Unggulan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map((p) => (
              <ProjectCard key={p.slug} post={p} featured />
            ))}
          </div>
        </section>
      )}

      {/* All others */}
      {others.length > 0 && (
        <section>
          <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-4">
            Semua Proyek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((p) => (
              <ProjectCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      {projects.length === 0 && (
        <div className="text-center py-20 text-ink-400">
          <p className="text-[14px]">Belum ada proyek. Segera hadir.</p>
        </div>
      )}
    </div>
  );
}
