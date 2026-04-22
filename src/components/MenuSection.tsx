import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { QrCode } from "lucide-react";

const MenuSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="carta" className="section-padding bg-sand-gradient">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            Nuestra carta
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 font-bold">
            Descubre la carta
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Descubre nuestra selección de desayunos, tapas y platos caseros elaborados al momento.
            Consulta la carta completa online en un solo clic.
          </p>
          
          <a
            href="https://menu.qamarero.com/mesa/Bxb3WGmYRbay8UpaIRM8NQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-lg px-10 py-5 text-base font-semibold shadow-lg hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300 hover:scale-105"
          >
            Ver carta completa
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <p className="text-muted-foreground text-sm mt-8 max-w-md mx-auto">
            Reserva tu mesa y descubre toda nuestra carta en el local
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
