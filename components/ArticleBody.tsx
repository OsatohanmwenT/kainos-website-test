"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ArticleBody({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="font-dm-sans text-base font-bold text-text-header">
            {children}
          </h2>
        ),
        p: ({ children }) => <p>{children}</p>,
        ul: ({ children }) => (
          <ul className="list-disc space-y-2 pl-5">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal space-y-2 pl-5">{children}</ol>
        ),
        li: ({ children }) => <li>{children}</li>,
        strong: ({ children }) => (
          <strong className="font-bold text-text-header">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-text-label">
            {children}
          </blockquote>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
