import nutrition from "@/assets/nutrition.jpg";

const flavors = ["Dulce", "Ácido", "Salado", "Picante", "Amargo", "Astringente"];

export function Nutrition() {
  return (
    <section id="nutrition" className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="reveal relative md:col-span-6">
            <img
              src={nutrition}
              alt="Especias ayurvédicas en bowl dorado"
              width={1280}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
              style={{ boxShadow: "var(--shadow-luxe)" }}
            />
            <div className="glass-strong absolute bottom-6 left-6 right-6 rounded-xl p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Agni · Fuego digestivo</p>
              <p className="mt-2 font-display text-xl">Comer es un acto sagrado de transformación.</p>
            </div>
          </div>
          <div className="reveal md:col-span-6 md:pl-8">
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">Nutrición intuitiva</p>
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
              Inspirado en el <em className="text-gold not-italic">Ayurveda</em>.
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Dejar de contar calorías para empezar a sentir. La digestión, el equilibrio y la
              salud holística comienzan en la forma en que te relacionas con la comida.
            </p>

            <div className="mt-10 space-y-5">
              {[
                ["Digestión", "Cuidar el Agni: comer presente, sin prisa, con calidez."],
                ["Equilibrio", "Alimentos según tu constitución y momento del año."],
                ["Salud holística", "Comer es nutrir cuerpo, emociones y energía vital."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-5 border-b border-border pb-5">
                  <span className="font-display text-xl text-accent">✦</span>
                  <div>
                    <p className="font-display text-xl">{t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Los seis sabores</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {flavors.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-border px-4 py-2 text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
