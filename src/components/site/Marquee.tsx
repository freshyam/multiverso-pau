const words = [
  "Movimiento Consciente",
  "Disciplina",
  "Movilidad",
  "Equilibrio",
  "Fuerza Femenina",
  "Hábitos",
  "Energía Vital",
  "Presencia",
];

export function Marquee() {
  const all = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-border py-7">
      <div className="marquee whitespace-nowrap">
        {all.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-16 font-display text-3xl italic text-muted-foreground md:text-4xl"
          >
            {w}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
