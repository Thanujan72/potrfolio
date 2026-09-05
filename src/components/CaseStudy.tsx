const details = [
  {
    label: "Problem",
    content:
      "Farmers struggled to access market prices and crop-management information.",
  },
  {
    label: "My role",
    content:
      "Contributed to building a centralized web platform for accessing relevant farming information.",
  },
  {
    label: "Solution",
    content:
      "A digital platform designed to bring real-time data and useful resources into one place.",
  },
  {
    label: "Result",
    content:
      "Simplified the information workflow for farmers and supported better engagement.",
  },
];
const technologies = [
  "Angular",
  "HTML",
  "TypeScript",
  "Tailwind CSS",
  "CSS",
  "C#",
];

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="border-y border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Featured case study
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              AGRI தமிழா
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Digital agriculture platform
            </p>
          </div>
          <a
            href="https://agritamizha.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950"
          >
            Visit live project{" "}
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </a>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="relative flex min-h-80 flex-col justify-end overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-8 text-white dark:border-zinc-800">
            <div className="absolute inset-6 rounded-xl border border-white/15" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Project preview
              </p>
              <p className="mt-3 text-4xl font-bold tracking-tight">
                AGRI
                <br />
                தமிழா
              </p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-300">
                A space reserved for a future product screenshot or mockup.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {details.map((detail) => (
              <article
                key={detail.label}
                className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                  {detail.label}
                </h3>
                <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
                  {detail.content}
                </p>
              </article>
            ))}
            <article className="rounded-xl border border-zinc-200 p-6 sm:col-span-2 dark:border-zinc-800">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                Technology stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
