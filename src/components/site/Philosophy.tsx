const pillars = [
  { n: "I", t: "Hábitos", d: "Pequeñas decisiones diarias que construyen una vida en equilibrio." },
  { n: "II", t: "Disciplina amable", d: "Constancia sin castigo. Compromiso desde el amor propio." },
  { n: "III", t: "Conciencia corporal", d: "Escuchar antes de exigir. Sentir antes de medir." },
  { n: "IV", t: "Movimiento intuitivo", d: "Entrenar con el cuerpo de hoy, no con el de ayer." },
  { n: "V", t: "Equilibrio emocional", d: "Regular el sistema nervioso es entrenar también." },
  { n: "VI", t: "Sin burnout", d: "Cambios reales, sostenibles, integrados a tu vida." },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal max-w-4xl">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">Filosofía</p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-7xl">
            El cuerpo no es un proyecto. <br />
            Es una <em className="text-gold not-italic">conversación</em>.
          </h2>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="reveal group bg-background p-10 transition-colors hover:bg-card">
              <p className="font-display text-5xl italic text-accent/60 transition-colors group-hover:text-accent">
                {p.n}
              </p>
              <h3 className="mt-6 font-display text-2xl text-foreground">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
