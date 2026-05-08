export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-48 grain">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px] float-slow" />

      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="reveal mb-8 text-[10px] uppercase tracking-[0.4em] text-accent">Tu próximo paso</p>
        <h2 className="reveal font-display text-5xl leading-[1.02] text-foreground md:text-7xl lg:text-[96px]">
          Tu cuerpo no es un castigo.
          <br />
          Es tu <em className="text-gold not-italic">hogar</em>.
        </h2>
        <p className="reveal mx-auto mt-10 max-w-xl text-muted-foreground md:text-lg">
          Si llegaste hasta aquí, algo dentro de ti ya lo sabe. Empecemos juntas.
        </p>
        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/0000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-accent hover:text-accent-foreground"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Reservar mi sesión
            <span>→</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Ver programas
          </a>
        </div>
      </div>
    </section>
  );
}
