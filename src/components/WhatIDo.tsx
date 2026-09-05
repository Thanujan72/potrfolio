const services = [
  { title: "Web Development", copy: "Building responsive web applications with a focus on clarity and usability." },
  { title: "Frontend Development", copy: "Creating approachable interfaces that work smoothly across screen sizes." },
  { title: "Backend Integration", copy: "Connecting interface needs with practical application logic and data flows." },
  { title: "Problem Solving", copy: "Turning real-world needs into focused, useful digital solutions." },
];

export default function WhatIDo() {
  return <section id="what-i-do" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="flex max-w-2xl flex-col gap-4"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">What I do</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Practical development, thoughtfully delivered.</h2></div><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 dark:border-zinc-800 dark:bg-zinc-800">{services.map((service, index) => <article key={service.title} className="bg-zinc-50 p-7 transition-colors hover:bg-white dark:bg-zinc-950 dark:hover:bg-zinc-900"><span className="text-sm font-semibold text-zinc-400">0{index + 1}</span><h3 className="mt-7 text-xl font-bold">{service.title}</h3><p className="mt-3 max-w-sm leading-7 text-zinc-600 dark:text-zinc-400">{service.copy}</p></article>)}</div></section>;
}
