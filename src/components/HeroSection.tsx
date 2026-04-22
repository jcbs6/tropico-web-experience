import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Terraza del restaurante Trópico Restobar"
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-body font-semibold tracking-[0.25em] uppercase text-accent mb-6">
            Playa de San Juan · Alicante
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 tracking-tight">
            Sabor auténtico en
            <br />
            <span className="text-accent">Playa de San Juan</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/75 max-w-xl mx-auto mb-10 leading-relaxed">
            Desayunos, tapas y platos caseros que se disfrutan de verdad
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
            href="https://menu.qamarero.com/mesa/Bxb3WGmYRbay8UpaIRM8NQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-lg px-10 py-5 text-base font-semibold shadow-lg hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300 hover:scale-105"
            >
              Ver carta
            </a>
            <a
              href="#contacto"
              className="rounded-lg border-2 border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors w-full sm:w-auto"
            >
              Reservar mesa
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
