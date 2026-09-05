export default function Footer() {
  return <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-500"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm sm:flex-row sm:justify-between sm:px-8 lg:px-10"><p>© {new Date().getFullYear()} ThanujanDev.</p><a href="#top" className="transition hover:text-zinc-200">Back to top ↑</a></div></footer>;
}
