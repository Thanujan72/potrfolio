import ThemeSwitcher from "./ThemeSwitcher";

const links = [{ label: "About", href: "#about" }, { label: "What I Do", href: "#what-i-do" }, { label: "Skills", href: "#skills" }, { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" }];

export default function Navbar() {
  return <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90"><nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10" aria-label="Main navigation"><a href="#top" className="text-lg font-bold tracking-tight text-zinc-950 dark:text-zinc-50" aria-label="Thanujan home">Thanujan<span className="text-zinc-500 dark:text-zinc-400">Dev</span></a><div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-6"><div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-xs font-medium text-zinc-600 sm:gap-x-5 sm:text-sm dark:text-zinc-300">{links.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-zinc-950 dark:hover:text-white">{link.label}</a>)}</div><ThemeSwitcher /></div></nav></header>;
}
