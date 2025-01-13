"use client"

import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  markdown: string; // Markdown content as a string
}


const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <article className="prose prose-lg prose-indigo dark:prose-dark">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </div>
  );
};

export default MarkdownRenderer;
