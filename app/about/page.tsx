import type { Metadata } from "next";
import { Mail, Github, BookOpen, Code2, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang",
  description: "Siapa saya, kenapa blog ini ada, dan apa yang bisa kamu harapkan dari sini.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[11px] font-medium tracking-widest uppercase text-ink-400 mb-3">tentang</p>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-ink-100 dark:bg-ink-800 flex items-center justify-center text-[20px] font-medium text-ink-400 dark:text-ink-500 flex-shrink-0">
            NK
          </div>
          <div>
            <h1 className="text-[24px] font-medium text-ink-900 dark:text-ink-50 mb-1">
              Nama Kamu
            </h1>
            <p className="text-[14px] text-ink-500 dark:text-ink-400">
              Digital Marketer · Mahasiswa Statistika · Calon Data Scientist
            </p>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="prose prose-ink dark:prose-invert max-w-none mb-10 text-[15px] leading-relaxed">
        <p>
          Halo! Saya seorang <strong>digital marketing staff</strong> yang sedang dalam perjalanan
          panjang belajar statistika dan machine learning. Saat ini sedang mengambil kembali
          gelar sarjana di jurusan Statistika lewat Universitas Terbuka,
          sambil mempersiapkan diri untuk S2 Computational Statistics & Machine Learning.
        </p>
        <p>
          Blog ini lahir dari keputusan untuk <em>keluar dari sosial media</em> — LinkedIn dan Instagram.
          Saya merasa dokumentasi perjalanan belajar saya lebih bermakna kalau tidak dikontrol
          oleh algoritma yang menentukan siapa yang bisa melihatnya.
        </p>
        <p>
          Di sini saya menulis tentang apa yang sedang saya pelajari, opini saya tentang berbagai hal,
          proyek data yang sedang saya kerjakan, dan sesekali cerita pendek. Semua konten
          bebas dibaca dan disebarluaskan — ilmu harusnya gratis.
        </p>
      </div>

      {/* Now / learning */}
      <section className="mb-10 border border-ink-100 dark:border-ink-800 rounded-xl divide-y divide-ink-100 dark:divide-ink-800">
        <div className="p-4">
          <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-3">
            Saat ini
          </h2>
          <div className="space-y-3">
            {[
              { icon: TrendingUp, label: "Bekerja sebagai digital marketing staff" },
              { icon: BookOpen, label: "S1 Statistika — Universitas Terbuka (sedang berjalan)" },
              { icon: Code2, label: "Belajar R, Python, dan dasar-dasar ML secara mandiri" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-3">
                <Icon size={14} className="text-accent flex-shrink-0" />
                <span className="text-[14px] text-ink-600 dark:text-ink-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-3">
            Tujuan
          </h2>
          <p className="text-[14px] text-ink-500 dark:text-ink-400 leading-relaxed">
            S2 Computational Statistics & Machine Learning — dan pada akhirnya,
            berkarya di persimpangan antara data, komunikasi, dan sistem yang benar-benar berguna bagi orang banyak.
          </p>
        </div>
      </section>

      {/* Tech / tools */}
      <section className="mb-10">
        <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-3">
          Tools yang saya pakai
        </h2>
        <div className="flex flex-wrap gap-2">
          {["R", "Python", "ggplot2", "tidyverse", "pandas", "scikit-learn", "SQL", "Next.js", "Figma"].map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border border-ink-100 dark:border-ink-800 rounded-xl p-5">
        <h2 className="text-[11px] font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-4">
          Kontak
        </h2>
        <div className="space-y-3">
          <a
            href="mailto:msyaifulaldiansyah@gmail.com"
            className="flex items-center gap-3 text-[14px] text-ink-600 dark:text-ink-400 hover:text-accent transition-colors"
          >
            <Mail size={15} className="text-accent" />
            msyaifulaldiansyah@gmail.com
          </a>
          <a
            href="https://github.com/panipulisme"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[14px] text-ink-600 dark:text-ink-400 hover:text-accent transition-colors"
          >
            <Github size={15} className="text-accent" />
            github.com/panipulisme
          </a>
        </div>
      </section>
    </div>
  );
}
