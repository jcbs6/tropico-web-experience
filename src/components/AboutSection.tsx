import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-interiorr.jpg";
import { Flame, Users, Heart } from "lucide-react";

const features = [
  { icon: Flame, title: "Producto fresco", desc: "Ingredientes de mercado, cocinados con alma mediterránea cada día." },
  { icon: Users, title: "Trato cercano", desc: "Aquí te conocemos por tu nombre. Ven una vez y vuelve siempre." },
  { icon: Heart, title: "Espacio para todos", desc: "Un lugar abierto, inclusivo y LGBTQ+ friendly. Orgullosos de serlo." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="Interior acogedor de Trópico Restobar"
              className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/5]"
              loading="lazy"
              width={800}
              height={1000}
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-6 py-3 shadow-card">
              <span className="font-display text-2xl font-bold">4.8 ⭐</span>
              <span className="text-sm ml-2 opacity-80">67 reseñas</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3 block">
              Sobre nosotros
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-tight font-bold">
              En Trópico no vienes solo a comer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Vienes a disfrutar, compartir y repetir. Ubicados en plena Playa de San Juan,
              combinamos el sabor de la cocina casera mediterránea con un ambiente que te hace
              sentir como en casa desde el primer momento.
            </p>

            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1 font-semibold">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
