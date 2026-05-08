import rest from "@/assets/rest2.jpg";

const items = [
  { t: "Sueño profundo", d: "El cuerpo se reconstruye en la oscuridad. Dormir es entrenar." },
  { t: "Ritmo circadiano", d: "Luz solar al despertar, calma al anochecer. Vivir con el sol." },
  { t: "Cortisol en calma", d: "Regular el estrés es la base de la composición corporal." },
  { t: "Caminar a diario", d: "El movimiento más subestimado y el más sanador." },
  { t: "Yoga & respiración", d: "Sistema nervioso parasimpático: descansar para crecer." },
  { t: "Sol & naturaleza", d: "Luz, vitamina D, suelo bajo los pies. Lo simple cura." },
];

export function Rest() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <img
        src={rest}
        alt="Mujer meditando en luz suave"
        width={1280}
        height={1024}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-120"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal max-w-2xl">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">Descanso & Emociones</p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
            Lo que no descansa, no <em className="text-gold not-italic">florece</em>.
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            La recuperación, el sueño y el sistema nervioso son tan importantes como cualquier
            entrenamiento. Aquí entrenamos también la pausa.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {items.map((i) => (
            <div key={i.t} className="reveal glass-strong p-8">
              <p className="font-display text-2xl text-foreground">{i.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
