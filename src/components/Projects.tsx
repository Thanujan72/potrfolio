import Image from "next/image";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  image?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "AGRI தமிழா",
    description:
      "A digital agriculture platform that brings together real-time weather updates, market insights, and AI-driven farming recommendations.",
    technologies: ["Angular", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://agritamizha.com/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          Selected projects
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Work built around real needs.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:shadow-black/20"
          >
            <div className="relative flex aspect-[16/8] items-end bg-zinc-100 p-6 dark:bg-zinc-900">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
                  Project image ready
                </span>
              )}
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-sm text-zinc-500 dark:text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-zinc-950 transition group-hover:text-zinc-500 dark:text-white dark:group-hover:text-zinc-300"
                >
                  View project <span aria-hidden="true">↗</span>
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
