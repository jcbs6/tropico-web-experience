import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "María L.", text: "De los mejores sitios de la zona. Las sardinas a la plancha están de otro nivel.", rating: 5 },
  { name: "Carlos R.", text: "Comida casera brutal. Venimos siempre que podemos. El trato es inmejorable.", rating: 5 },
  { name: "Ana & Pedro", text: "Desayunos perfectos con vistas al mar. Un sitio al que volver siempre.", rating: 5 },
  { name: "Laura G.", text: "Servicio impecable, perfecto para una tarde de tapas. Las bravas están buenísimas.", rating: 5 },
  { name: "David M.", text: "Relación calidad-precio inmejorable. Te hacen sentir en casa desde el primer momento.", rating: 4 },
  { name: "Sophie B.", text: "Best tapas in San Juan beach! Great atmosphere and very friendly staff.", rating: 5 },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="opiniones" className="section-padding bg-sand-gradient">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            Opiniones
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 font-bold">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-display text-2xl text-foreground font-bold">4.8</span>
          </div>
          <p className="text-muted-foreground text-sm">Basado en 67 reseñas en Google</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-soft border border-border relative hover:shadow-card transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
              <div className="flex mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
              <span className="text-muted-foreground text-xs font-semibold tracking-wide">{r.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
