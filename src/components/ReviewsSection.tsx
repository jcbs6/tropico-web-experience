import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const reviews = [
  { name: "María L.", text: "De los mejores sitios de la zona. Las sardinas a la plancha están de otro nivel.", rating: 5 },
  { name: "Carlos R.", text: "Comida casera brutal. Venimos siempre que podemos. El trato es inmejorable.", rating: 5 },
  { name: "Carmen Ramirez", text: "Mi experiencia fue mágica, definitivamente todo lo que uno quiere en un solo sitio se puede encontrar en este restaurante. La mejor atención y sobretodo sus menú. Los recomiendo todos, cada sabor es más divino que otro. Felicitaciones por ser ese lugar especial al cual se puede ir en cualquier ocasión.", rating: 5 },
  { name: "Frank Bernard.", text: "Un restaurante de tapas muy bueno con una cálida bienvenida y camareras sonrientes. Mención especial merece el Magro con Tomate, que estaba absolutamente delicioso. Excelente relación calidad-precio.", rating: 5 },
  { name: "David M.", text: "Relación calidad-precio inmejorable. Te hacen sentir en casa desde el primer momento.", rating: 5 },
  { name: "Miguel Ángel V.M.", text: "Excelente atención. Y muy buena la comida. 10 de 10", rating: 5 },
];

const ReviewsSection = () => {
  const { t } = useLanguage();
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
            {t('reviews_title')}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 font-bold">
            {t('reviews_subtitle')}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-display text-2xl text-foreground font-bold">4.8</span>
          </div>
          <p className="text-muted-foreground text-sm">Basado en 68 reseñas en Google</p>
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
