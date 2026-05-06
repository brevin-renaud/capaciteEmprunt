import { marked } from 'marked';

marked.use({ gfm: true, breaks: true });

interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  const html = marked.parse(content) as string;

  return (
    <div
      className="prose-article"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
