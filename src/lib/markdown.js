import { marked } from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();

renderer.code = (code, lang) => {
  if (lang === 'mermaid') {
    return `<div class="mermaid">${code}</div>`;
  }

  if (lang && hljs.getLanguage(lang)) {
    const highlighted = hljs.highlight(code, { language: lang }).value;
    return `<pre><code class="hljs ${lang}">${highlighted}</code></pre>`;
  }

  return `<pre><code>${code}</code></pre>`;
};

marked.setOptions({
  renderer,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
});

/**
 * 解析Markdown 为HTML
 * @param {string} content
 * @returns {string}
 */
export function parseMarkdown(content) {
  return marked(content);
}
