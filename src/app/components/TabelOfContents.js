export default function TableOfContents({ headings }) {
  return (
    <aside className="w-full md:w-1/4 lg:w-1/5 p-4 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-2">目录</h2>
      <ul className="text-sm space-y-1">
        {headings.map(heading => {
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="hover:underline"></a>
          </li>;
        })}
      </ul>
    </aside>
  );
}
