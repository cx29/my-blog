export default function ContentLayout({ left, right }) {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-8 gap-6 animate-fade-in-down ease-in-out">
      <div className="flex-1 min-w-0">{left}</div>
      <div className="w-full md:w-[300px] lg:w-[360px] shrink-0">{right}</div>
    </div>
  );
}
