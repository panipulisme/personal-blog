import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  // Custom callout blocks
  Callout: ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" | "tip" }) => {
    const styles = {
      info: "border-l-accent bg-accent/5 text-ink-700 dark:text-ink-300",
      warning: "border-l-amber-500 bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200",
      tip: "border-l-green-500 bg-green-50 dark:bg-green-950/20 text-green-900 dark:text-green-200",
    };
    return (
      <div className={`border-l-2 pl-4 py-1 my-4 rounded-r text-[14px] ${styles[type]}`}>
        {children}
      </div>
    );
  },

  // Math block (display)
  Math: ({ children }: { children: string }) => (
    <div className="my-4 p-4 bg-ink-100 dark:bg-ink-800 rounded-lg text-center font-mono text-[13px] text-ink-700 dark:text-ink-300 overflow-x-auto">
      {children}
    </div>
  ),

  // Image with caption
  Figure: ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
    <figure className="my-6">
      <img src={src} alt={alt} className="rounded-lg w-full border border-ink-100 dark:border-ink-800" />
      {caption && (
        <figcaption className="text-center text-[12px] text-ink-400 dark:text-ink-500 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  ),
};

export function MDXContent({ source }: { source: string }) {
  return (
    <article className="prose prose-ink max-w-none dark:prose-dark prose-headings:font-medium prose-a:text-accent prose-code:text-accent dark:prose-invert">
      <MDXRemote source={source} components={components} />
    </article>
  );
}
