import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-200 bg-zinc-950 text-white dark:border-zinc-800"
    >
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 py-20 sm:px-8 md:flex-row md:items-end lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Get in touch
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Have a project in mind?
            <br />
            Let&apos;s build something useful together.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Open for new opportunities and collaborations.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/Thanujan72"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-zinc-700 p-4 text-xl transition hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-900"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/Thanujandev"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-zinc-700 p-4 text-xl transition hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-900"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
