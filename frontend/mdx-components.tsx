import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 text-2xl font-bold tracking-tight text-ink"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-10 text-xl font-bold tracking-tight text-ink" {...props} />
  ),
  p: (props) => <p className="mt-6 leading-8 text-muted" {...props} />,
  ul: (props) => (
    <ul className="mt-6 list-disc space-y-2 pl-6 leading-8 text-muted" {...props} />
  ),
  ol: (props) => (
    <ol
      className="mt-6 list-decimal space-y-2 pl-6 leading-8 text-muted"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  a: (props) => (
    <a
      className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-deep"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-8 border-l-2 border-accent pl-6 text-lg leading-8 font-medium text-ink"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-ink"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-8 overflow-x-auto border border-border bg-surface p-5 font-mono text-sm leading-7 text-ink"
      {...props}
    />
  ),
  hr: () => <hr className="mt-12 border-border" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
