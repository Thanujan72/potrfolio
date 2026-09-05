import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:py-32"
    >
      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          Software Developer
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.055em] text-zinc-950 sm:text-6xl lg:text-7xl dark:text-white">
          Hi, I&apos;m Thanujan.
        </h1>
        <p className="mt-5 text-2xl font-medium tracking-tight text-zinc-700 sm:text-3xl dark:text-zinc-200">
          Building practical digital products.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg dark:text-zinc-400">
          I build responsive, user-focused web applications and turn real-world
          problems into useful digital solutions through thoughtful design and
          clean code.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-950 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-100"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="relative mx-auto flex w-full justify-center lg:justify-end">
        <div className="h-40 w-40 rounded-full border-2 border-zinc-200 bg-zinc-100 p-1 shadow-xl shadow-zinc-300/40 sm:h-52 sm:w-52 lg:h-64 lg:w-64 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-black/20">
          <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src="/thanu.png"
            alt="Thanujan"
            fill
            priority
            sizes="(min-width: 1024px) 256px, (min-width: 640px) 208px, 160px"
            className="object-cover object-center"
          />
          </div>
        </div>
      </div>
    </section>
  );
}
