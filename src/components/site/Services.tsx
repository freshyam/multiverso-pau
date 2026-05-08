const inPerson = {
  title: "Entrenamiento presencial",
  intro: "Estudio privado · sesiones íntimas · presencia plena.",
  items: [
    { name: "3 sesiones / semana", desc: "Funcional, movilidad y fuerza adaptados a tu ciclo y energía." },
    { name: "5 sesiones / semana", desc: "Inmersión completa con seguimiento de hábitos y recuperación." },
    { name: "Paquete personalizado", desc: "Diseñado a la medida de tus objetivos y agenda." },
  ],
};

const online = {
  title: "Entrenamiento online",
  intro: "Para acompañarte donde estés, sin perder cercanía.",
  plans: [
    {
      name: "Comunidad WhatsApp",
      tag: "Esencial",
      points: ["Rutinas semanales", "Tips de movilidad", "Comunidad activa de mujeres"],
    },
    {
      name: "Rutinas personalizadas",
      tag: "Más elegido",
      points: ["Programa adaptado a ti", "Ajustes mensuales", "Soporte directo"],
      featured: true,
    },
    {
      name: "Coaching 1:1",
      tag: "Premium",
      points: ["Videollamadas semanales", "Plan integral cuerpo y mente", "Acompañamiento nutricional"],
    },
  ],
};

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">Programas</p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
            Una experiencia <em className="text-gold not-italic">a tu medida</em>.
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Elige el formato que se adapta a tu vida. Mismo cuidado, misma profundidad.
          </p>
        </div>

        {/* In person */}
        <div className="reveal mt-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">01 · Presencial</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">{inPerson.title}</h3>
            <p className="mt-4 text-muted-foreground">{inPerson.intro}</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:col-span-8 md:grid-cols-3">
            {inPerson.items.map((i) => (
              <div key={i.name} className="group bg-card p-7 transition-colors hover:bg-secondary">
                <p className="font-display text-xl text-foreground">{i.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
                <span className="mt-6 inline-block text-[10px] uppercase tracking-[0.3em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Consultar →
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="my-20 hairline" />

        {/* Online */}
        <div className="reveal grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">02 · Online</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">{online.title}</h3>
            <p className="mt-4 text-muted-foreground">{online.intro}</p>
          </div>
          <div className="grid gap-6 md:col-span-8 md:grid-cols-3">
            {online.plans.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl p-7 transition-all duration-500 ${
                  p.featured
                    ? "border border-accent/40 bg-gradient-to-b from-card to-background"
                    : "glass hover:border-accent/30"
                }`}
                style={p.featured ? { boxShadow: "var(--shadow-glow)" } : undefined}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent">{p.tag}</span>
                <p className="mt-3 font-display text-2xl">{p.name}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2 inline-block h-px w-3 shrink-0 bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 text-xs uppercase tracking-[0.25em] transition-colors ${
                    p.featured
                      ? "bg-accent text-accent-foreground hover:bg-foreground hover:text-background"
                      : "border border-border text-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  Quiero este plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
