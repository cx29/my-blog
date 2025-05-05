export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 p-4 space-y-6">
      <section className="bg-white p-4 rounded shadow dark:bg-zinc-900 dark:text-white">
        <h2 className="text-xl font-semibold mb-2">二九</h2>
        <p>开发爱好者</p>
      </section>

      <section className="bg-white p-4 rounded shadow dark:bg-zinc-900 dark:text-white">
        <h2 className="text-xl font-semibold mb-2">标签</h2>
      </section>
    </aside>
  );
}
