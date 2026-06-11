import Link from "next/link";
import { Github, Mail, Rss } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 dark:border-ink-800 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-[13px] text-ink-400 dark:text-ink-500">
            © {year}{" "}
            <span className="text-ink-600 dark:text-ink-300 font-medium">nama.dev</span>
            {" "}— dibuat sendiri, tanpa algoritma.
          </p>
          <p className="text-[12px] text-ink-300 dark:text-ink-600 mt-0.5">
            Semua tulisan bebas dibaca dan disebarluaskan dengan atribusi.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/rss.xml"
            className="text-ink-400 hover:text-accent dark:text-ink-500 dark:hover:text-accent transition-colors"
            title="RSS Feed"
          >
            <Rss size={16} />
          </Link>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-400 hover:text-accent dark:text-ink-500 dark:hover:text-accent transition-colors"
            title="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:kamu@email.com"
            className="text-ink-400 hover:text-accent dark:text-ink-500 dark:hover:text-accent transition-colors"
            title="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
