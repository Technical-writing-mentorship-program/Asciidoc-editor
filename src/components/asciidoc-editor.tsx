'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Split, Maximize2, Minimize2 } from 'lucide-react';

interface AsciiDocEditorProps {}

const convertAsciiDocToHtml = (asciidoc: string): string => {
  let html = asciidoc;

  // Convert headers
  html = html.replace(/^=\s+(.+)$/gm, '<h1 class="text-3xl font-bold my-4">$1</h1>');
  html = html.replace(/^==\s+(.+)$/gm, '<h2 class="text-2xl font-bold my-3">$1</h2>');
  html = html.replace(/^===\s+(.+)$/gm, '<h3 class="text-xl font-bold my-2">$1</h3>');
  html = html.replace(/^====\s+(.+)$/gm, '<h4 class="text-lg font-bold my-2">$1</h4>');

  // Convert bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Convert italic
  html = html.replace(/\/\/(.+?)\/\//g, '<em>$1</em>');

  // Convert monospace
  html = html.replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>');

  // Convert unordered lists
  html = html.replace(/^\*\s+(.+)$/gm, '<li class="ml-4">$1</li>');
  html = html.replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc my-2">$&</ul>');

  // Convert ordered lists
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li class="ml-4">$1</li>');
  html = html.replace(/(<li.*<\/li>\n?)+/g, '<ol class="list-decimal my-2">$&</ol>');

  // Convert paragraphs
  html = html.replace(/^(?!(<[^>]+>|\s*$))(.+)$/gm, '<p class="my-2">$2</p>');

  // Convert horizontal rules
  html = html.replace(/^'''$/gm, '<hr class="my-4 border-t border-gray-300">');

  return html;
};

const AsciiDocEditor: React.FC<AsciiDocEditorProps> = () => {
  const initialContent = [
    "= AsciiDoc Comprehensive Guide",
    "",
    "A complete example showing various AsciiDoc formatting features.",
    "",
    "== Text Formatting",
    "",
    "You can make text *bold*, //italic//, or `monospace`.", 
    "You can also combine them like **//bold italic//** or *`bold code`*.",
    "",
    "== Headers",
    "",
    "=== Level 3 Header",
    "==== Level 4 Header",
    "",
    "== Lists",
    "",
    "=== Unordered Lists",
    "* First level",
    "* Another first level",
    "* First level with more content",
    "  that spans multiple lines",
    "  like this",
    "* Another point",
    "",
    "=== Ordered Lists",
    "1. First item",
    "2. Second item",
    "3. Third item with",
    "   multiple lines",
    "4. Fourth item",
    "",
    "== Code Examples",
    "",
    "Here's an example of inline code: `console.log('Hello World!')`",
    "",
    "== Horizontal Rule",
    "",
    "Below is a horizontal rule:",
    "",
    "'''",
    "",
    "== Document Sections",
    "",
    "=== Technical Documentation",
    "This section could contain technical details.",
    "",
    "=== User Guide",
    "This section could contain user instructions.",
    "",
    "=== API Reference",
    "This section could contain API documentation.",
    "",
    "Feel free to edit this content and see the live preview!"
  ].join('\n');

  const [content, setContent] = useState(initialContent);
  const [fullscreen, setFullscreen] = useState<'editor' | 'preview' | null>(null);

  return (
    <div className="w-full h-screen max-h-screen p-4 bg-gray-100">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AsciiDoc Editor</h1>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFullscreen(fullscreen === 'editor' ? null : 'editor')}
          >
            {fullscreen === 'editor' ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />} Editor
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFullscreen(fullscreen === 'preview' ? null : 'preview')}
          >
            {fullscreen === 'preview' ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />} Preview
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFullscreen(null)}
          >
            <Split className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 h-[calc(100vh-5rem)]">
        <Card className={`p-4 ${fullscreen === 'preview' ? 'hidden' : fullscreen === 'editor' ? 'col-span-2' : ''}`}>
          <div className="mb-2 font-semibold">Editor</div>
          <textarea
            className="w-full h-[calc(100%-2rem)] p-4 font-mono text-base border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            spellCheck="false"
          />
        </Card>

        <Card className={`p-4 ${fullscreen === 'editor' ? 'hidden' : fullscreen === 'preview' ? 'col-span-2' : ''}`}>
          <div className="mb-2 font-semibold">Preview</div>
          <div 
            className="w-full h-[calc(100%-2rem)] p-4 border rounded overflow-auto prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: convertAsciiDocToHtml(content) }}
          />
        </Card>
      </div>
    </div>
  );
};

export { AsciiDocEditor };