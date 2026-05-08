import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Philosophy } from "@/components/site/Philosophy";
import { Education } from "@/components/site/Education";
import { Nutrition } from "@/components/site/Nutrition";
import { Doshas } from "@/components/site/Doshas";
import { Rest } from "@/components/site/Rest";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Multiverso Fitness — Entrenamiento funcional y bienestar holístico" },
      {
        name: "description",
        content:
          "Entrenamiento funcional, movilidad y nutrición intuitiva para mujeres. Una experiencia premium de cuerpo, mente y hábitos con Paulina Ibarra.",
      },
      { property: "og:title", content: "Multiverso Fitness — Bienestar y movimiento consciente" },
      {
        property: "og:description",
        content:
          "Transforma tu cuerpo, mente y hábitos con un enfoque holístico, elegante y femenino.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Philosophy />
      <Education />
      <Nutrition />
      <Doshas />
      <Rest />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
