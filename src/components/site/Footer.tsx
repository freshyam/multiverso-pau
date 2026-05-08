export function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-2xl tracking-[0.2em]">
            MULTIVERSO<span className="text-accent">.</span>
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Movimiento consciente, fuerza femenina y bienestar holístico.
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            <li><a href="https://instagram.com" className="hover:text-accent">Instagram · @multiversofitness</a></li>
            <li><a href="https://wa.me/0000000000" className="hover:text-accent">WhatsApp · Reservar</a></li>
            <li><a href="mailto:hola@multiverso.fit" className="hover:text-accent">hola@multiverso.fit</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Estudio</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Sesiones íntimas presenciales y entrenamiento online a nivel global.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border px-6 pt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:px-10">
        <p>© {new Date().getFullYear()} Multiverso Fitness · Paulina Ibarra</p>
        <p>Diseñado con presencia</p>
      </div>
    </footer>
  );
}
