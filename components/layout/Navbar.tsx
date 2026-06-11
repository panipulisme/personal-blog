"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "beranda" },
  { href: "/blog", label: "tulisan" },
  { href: "/projects", label: "proyek" },
  { href: "/cerpen", label: "cerpen" },
  { href: "/gallery", label: "galeri" },
  { href: "/about", label: "tentang" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink-50/90 dark:bg-ink-950/90 backdrop-blur-sm border-b border-ink-100 dark:border-ink-800">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[15px] font-medium tracking-tight text-ink-900 dark:text-ink-50 hover:opacity-80 transition-opacity"
        >
          nama<span className="text-accent">.</span>dev
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.slice(1).map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-[13px] transition-colors",
                  active
                    ? "text-accent font-medium"
                    : "text-ink-500 dark:text-ink-400 hover:text-ink-800 dark:hover:text-ink-200"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-ink-500 hover:text-ink-800 dark:hover:text-ink-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-ink-100 dark:border-ink-800 bg-ink-50 dark:bg-ink-950 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-md text-[14px] transition-colors",
                  active
                    ? "text-accent font-medium bg-accent/5"
                    : "text-ink-500 hover:text-ink-800 hover:bg-ink-100 dark:hover:text-ink-200 dark:hover:bg-ink-800"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
