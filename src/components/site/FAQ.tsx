import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "¿Necesito experiencia previa?", a: "No. Comenzamos por la base: postura, respiración y movimiento consciente. Cada plan se adapta a tu nivel actual." },
  { q: "¿Cuánto tiempo necesito ver resultados?", a: "Sentirás cambios en energía y postura desde la primera semana. Los cambios visibles toman entre 8 y 12 semanas con constancia." },
  { q: "¿Trabajan con mujeres con lesiones?", a: "Sí. Adaptamos cada movimiento a tu historia corporal y, cuando es necesario, coordinamos con tu fisioterapeuta o médico." },
  { q: "¿Qué incluye el plan online?", a: "Programa personalizado, seguimiento, ajustes mensuales y acceso directo por WhatsApp para resolver dudas." },
  { q: "¿Aceptan pagos mensuales?", a: "Sí. Ofrecemos planes mensuales y paquetes con descuento. Cada acuerdo se diseña a la medida." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="reveal text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">Preguntas</p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
            Lo que sueles <em className="text-gold not-italic">querer saber</em>.
          </h2>
        </div>
        <div className="reveal mt-16">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-border">
                <AccordionTrigger className="py-6 text-left font-display text-lg text-foreground hover:text-accent hover:no-underline md:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
