const skillGroups = [
  { title: "Languages", items: ["C#", "JavaScript"] },
  { title: "Frontend", items: ["HTML5", "CSS"] },
  { title: "Backend", items: ["Node.js"] },
  { title: "Tools", items: ["Angular", "TypeScript", "Tailwind CSS"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          Technical skills
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tools I use to build for the web.
        </h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/30"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {group.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
