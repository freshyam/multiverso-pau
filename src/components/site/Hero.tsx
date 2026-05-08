import hero from "@/assets/2.png";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden grain">
      <img
        src={hero}
        alt="Mujer entrenando en un estudio minimalista de lujo"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
        <p className="reveal in mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <span className="inline-block h-px w-10 bg-accent" />
          Bienestar · Movimiento · Conciencia
        </p>
        <h1 className="reveal in font-display text-5xl leading-[1.02] text-foreground sm:text-6xl md:text-7xl lg:text-[88px]">
          Transforma tu <em className="text-gold not-italic">cuerpo</em>,<br />
          tu <em className="italic font-light">mente</em> y tus hábitos.
        </h1>
        <p className="reveal in mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Entrenamiento funcional, movilidad y bienestar holístico para mujeres que
          quieren reconectar con su cuerpo desde la elegancia y la disciplina.
        </p>
        <div className="reveal in mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-accent hover:text-accent-foreground"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Comienza tu camino
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Explorar programas
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        <div className="mx-auto mb-3 h-10 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
        Scroll
      </div>
    </section>
  );
}
