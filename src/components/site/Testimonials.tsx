const items = [
  {
    q: "Paulina cambió mi relación con el ejercicio. Por primera vez entreno desde el amor, no desde la culpa.",
    n: "Camila R.",
    r: "Programa online · 6 meses",
  },
  {
    q: "No es solo fuerza física. Es claridad mental, energía y reconectar con mi cuerpo. Una experiencia integral.",
    n: "Andrea M.",
    r: "Coaching 1:1",
  },
  {
    q: "Su mirada holística sobre el movimiento y la nutrición transformó mis hábitos para siempre.",
    n: "Valentina P.",
    r: "Estudio presencial",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal max-w-2xl">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">Testimonios</p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
            Mujeres que <em className="text-gold not-italic">regresaron</em> a sí mismas.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={i}
              className="reveal glass flex flex-col rounded-2xl p-8 transition-all duration-500 hover:border-accent/40"
            >
              <span className="font-display text-5xl text-accent/70">“</span>
              <blockquote className="-mt-3 font-display text-xl italic leading-snug text-foreground">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="text-sm text-foreground">{t.n}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{t.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
