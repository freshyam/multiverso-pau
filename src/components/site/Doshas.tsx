import { useState } from "react";

const doshas = [
  {
    name: "Vata",
    element: "Aire · Éter",
    color: "from-[oklch(0.78_0.04_260)] to-transparent",
    traits: "Creativa, ágil, intuitiva. Mente rápida y sensibilidad alta.",
    metabolism: "Variable e impredecible. Apetito irregular.",
    energy: "Energía en ráfagas, necesita rutina y calidez.",
    body: "Estructura ligera, articulaciones móviles, piel seca.",
  },
  {
    name: "Pitta",
    element: "Fuego · Agua",
    color: "from-[oklch(0.74_0.10_55)] to-transparent",
    traits: "Determinada, líder, enfocada. Mente analítica e intensa.",
    metabolism: "Fuerte y constante. Buena digestión, hambre marcada.",
    energy: "Estable y poderosa, tendencia a sobreexigirse.",
    body: "Estructura media, musculatura firme, piel cálida.",
  },
  {
    name: "Kapha",
    element: "Tierra · Agua",
    color: "from-[oklch(0.70_0.06_160)] to-transparent",
    traits: "Calmada, leal, contenedora. Memoria profunda y serenidad.",
    metabolism: "Lento y eficiente. Resistencia natural.",
    energy: "Constante y duradera, necesita movimiento que la encienda.",
    body: "Estructura sólida, fuerza natural, piel suave.",
  },
];

export function Doshas() {
  return (
    <section id="doshas" className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card to-background" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {doshas.map((d) => (
            <div
              key={d.name}
              className="
                group relative overflow-hidden rounded-2xl border p-8 text-left
                border-border bg-background
                transition-all duration-500
                hover:border-accent/50 hover:bg-card
                hover:shadow-[var(--shadow-glow)]
              "
            >
              <div
                className={`
                  pointer-events-none absolute -top-20 -right-20
                  h-64 w-64 rounded-full
                  bg-gradient-radial bg-gradient-to-br
                  blur-3xl transition-opacity duration-500
                  ${d.color}
                  opacity-20 group-hover:opacity-60
                `}
              />

              <p className="font-display text-6xl italic text-foreground">
                {d.name}
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-accent">
                {d.element}
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <Row label="Personalidad" value={d.traits} />
                <Row label="Metabolismo" value={d.metabolism} />
                <Row label="Energía" value={d.energy} />
                <Row label="Cuerpo" value={d.body} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border pt-3">
      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
      <p className="mt-1 leading-relaxed text-foreground/85">{value}</p>
    </div>
  );
}
