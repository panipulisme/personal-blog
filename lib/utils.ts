import { clsx, type ClassValue } from "clsx";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateStr: string, fmt = "d MMMM yyyy"): string {
  try {
    return format(parseISO(dateStr), fmt, { locale: id });
  } catch {
    return dateStr;
  }
}

export const TYPE_LABELS: Record<string, string> = {
  blog: "tulisan",
  projects: "proyek",
  cerpen: "cerpen",
};

export const TYPE_COLORS: Record<string, string> = {
  blog: "text-ink-500 border-ink-200 dark:border-ink-700",
  projects: "text-accent border-accent/30",
  cerpen: "text-ink-500 border-ink-200 dark:border-ink-700",
};
