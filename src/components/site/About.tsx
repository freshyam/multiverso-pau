import paulina from "@/assets/paulinaIbarra.jpg";

const creds = [
  "Entrenamiento funcional",
  "Movilidad articular",
  "Kettlebell sport",
  "Acompañamiento holístico",
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="reveal md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
            <img
              src={paulina}
              alt="Paulina Ibarra, entrenadora funcional"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover grayscale-[15%]"
              style={{ boxShadow: "var(--shadow-luxe)" }}
            />
            <div className="glass absolute -bottom-6 -right-6 hidden rounded-2xl px-6 py-4 md:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Desde</p>
              <p className="font-display text-3xl text-foreground">2018</p>
            </div>
          </div>
        </div>

        <div className="reveal md:col-span-7 md:pl-8">
          <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-accent">
            <span className="inline-block h-px w-10 bg-accent" />
            Conoce a Paulina
          </p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
            Movimiento como <em className="text-gold not-italic">forma</em> de regresar a casa.
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Soy <span className="text-foreground">Paulina Ibarra</span>, entrenadora funcional e
              híbrida. Comencé en la universidad del deporte a los 18 años, entrenando en gimnasios
              y aprendiendo que el cuerpo es mucho más que estética.
            </p>
            <p>
              Mi enfoque integra <span className="text-foreground">movimiento, nutrición intuitiva y
              equilibrio emocional</span>. Acompaño a mujeres a reconectar con su cuerpo, construir
              disciplina sin castigo y encontrar fuerza desde la calma.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {creds.map((c) => (
              <div key={c} className="bg-card px-5 py-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Certificación</p>
                <p className="mt-2 font-display text-lg text-foreground">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
