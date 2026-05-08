import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  { q: "¿Cómo funcionan las rutinas?", a: "Cada plan está diseñado por bloques de 4 a 8 semanas con progresiones medibles. Combinamos fuerza, movilidad y trabajo cardiovascular según tu objetivo y energía." },
  { q: "Entrenamiento de fuerza", a: "Construimos masa muscular y densidad ósea con cargas progresivas. La fuerza es el pilar de la longevidad femenina y la base de un metabolismo sano." },
  { q: "Pérdida de grasa", a: "No buscamos déficits extremos. Trabajamos composición corporal con entrenamiento, descanso, NEAT y nutrición intuitiva sostenible." },
  { q: "Movilidad y recuperación", a: "Articulaciones libres, tejido elástico y sistema nervioso regulado. La movilidad es lo que te permite seguir entrenando 30 años más." },
  { q: "Ganancia muscular", a: "Estímulo, nutrición y descanso. Volumen progresivo, técnica impecable y respeto por los ciclos hormonales." },
  { q: "Si soy principiante", a: "Empezamos por la base: respiración, postura y patrones fundamentales. Sin prisa, con método. El cuerpo aprende cuando se siente seguro." },
];

export function Education() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="reveal md:col-span-4">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">Educación</p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-5xl">
            Entender lo que <em className="text-gold not-italic">haces</em> con tu cuerpo.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Información clara, sin mitos ni promesas vacías. Para que entrenes con criterio.
          </p>
        </div>
        <div className="reveal md:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {items.map((it, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-7 text-left font-display text-xl text-foreground hover:no-underline hover:text-accent md:text-2xl">
                  <span className="flex items-center gap-6">
                    <span className="text-xs tracking-[0.3em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {it.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-7 pl-14 pr-6 text-base leading-relaxed text-muted-foreground">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
