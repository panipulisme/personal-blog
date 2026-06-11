# nama.dev — Personal Blog

Blog pribadi berbasis Next.js 14 dengan App Router. Desain monochrome + oranye, fokus portofolio dan tulisan.

## Fitur

- ✅ Halaman: Beranda, Tulisan (Blog), Proyek, Cerpen, Galeri, Tentang
- ✅ Konten via MDX (Markdown + JSX) — tulis di `content/`
- ✅ Custom MDX components: `<Callout>`, `<Math>`, `<Figure>`
- ✅ Reading time otomatis
- ✅ Tag dan filter per topik
- ✅ Responsive — mobile-first
- ✅ Galeri foto dengan masonry grid
- ✅ Dark mode ready (via Tailwind `dark:` classes)
- ✅ SEO metadata per halaman

## Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka di browser
# http://localhost:3000
```

## Tambah Konten Baru

### Tulisan baru
Buat file `.mdx` di `content/blog/`:

```md
---
title: "Judul Tulisan"
date: "2025-06-01"
description: "Deskripsi singkat."
tags: ["statistika", "opini"]
featured: false
---

Isi tulisan di sini...
```

### Proyek baru
Buat file `.mdx` di `content/projects/`:

```md
---
title: "Nama Proyek"
date: "2025-06-01"
description: "Deskripsi proyek."
tags: ["data", "ml"]
featured: true
status: "completed"          # completed | ongoing | archived
tech: ["R", "Python", "SQL"]
repoUrl: "https://github.com/..."
demoUrl: "https://..."
---
```

### Cerpen baru
Buat file `.mdx` di `content/cerpen/`.

### Galeri foto
Edit `app/gallery/page.tsx` — tambah item ke array `GALLERY_ITEMS`.
Untuk produksi, integrasikan dengan Cloudinary atau S3.

## Struktur Folder

```
personal-blog/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Beranda
│   ├── blog/             # Daftar & detail tulisan
│   ├── projects/         # Daftar & detail proyek
│   ├── cerpen/           # Daftar & detail cerpen
│   ├── gallery/          # Galeri foto & video
│   └── about/            # Halaman tentang
├── components/
│   ├── layout/           # Navbar, Footer
│   └── ui/               # PostCard, ProjectCard, MDXContent
├── content/              # File MDX (konten)
│   ├── blog/
│   ├── projects/
│   └── cerpen/
├── lib/
│   ├── content.ts        # Helper baca MDX
│   └── utils.ts          # Utility functions
└── styles/
    └── globals.css       # Design tokens & global styles
```

## Kustomisasi

### Ganti nama & identitas
Cari dan ganti `nama.dev`, `Nama Kamu`, `kamu@email.com`, `username` di:
- `app/layout.tsx` (metadata)
- `app/page.tsx` (hero)
- `app/about/page.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`

### Ganti warna aksen
Di `tailwind.config.ts`, ubah nilai `accent`:
```ts
accent: {
  DEFAULT: "#E85D26",  // ← ganti ini
  light: "#F2845A",
  dark: "#C44A18",
}
```
Jangan lupa update juga di `styles/globals.css` (variabel `--accent`).

## Deploy

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Self-hosted
```bash
npm run build
npm start
```

## Dependencies Utama

| Package | Kegunaan |
|---------|----------|
| `next` 14 | Framework |
| `next-mdx-remote` | Render MDX |
| `gray-matter` | Parse frontmatter |
| `tailwindcss` | Styling |
| `@tailwindcss/typography` | Prose styling |
| `lucide-react` | Icons |
| `date-fns` | Format tanggal |
