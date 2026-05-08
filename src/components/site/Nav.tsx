import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Sobre Paulina" },
  { href: "#services", label: "Programas" },
  { href: "#philosophy", label: "Filosofía" },
  { href: "#nutrition", label: "Nutrición" },
  { href: "#doshas", label: "Doshas" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-lg tracking-[0.25em] text-foreground">
          MULTIVERSO<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-border px-5 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent"
        >
          Comenzar
        </a>
        <button
          aria-label="Menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-7 bg-foreground" />
          <span className="mt-1.5 block h-px w-7 bg-foreground" />
          <span className="mt-1.5 block h-px w-5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-strong border-t border-border">
          <nav className="flex flex-col gap-5 px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center rounded-full border border-accent px-5 py-2 text-xs uppercase tracking-[0.2em] text-accent"
            >
              Comenzar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
