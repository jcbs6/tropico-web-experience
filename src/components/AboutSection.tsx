import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import terraza1 from "@/assets/terraza1.jpg";
import terraza2 from "@/assets/terraza2.jpg";
import interior from "@/assets/interior.jpg";
import { Flame, Users, Heart } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import ImageCarousel from "./ImageCarousel";

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const restaurantImages = [
    terraza1,
    terraza2,
    interior
  ];

  const features = [
    { icon: Flame, title: t('about_producto'), desc: t('about_producto_desc') },
    { icon: Users, title: t('about_trato'), desc: t('about_trato_desc') },
    { icon: Heart, title: t('about_espacio'), desc: t('about_espacio_desc') },
  ];

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
            <ImageCarousel
              images={restaurantImages}
              alt="Interior acogedor de Trópico Restobar"
              autoPlay={true}
              interval={3500}
              showDots={true}
              showArrows={true}
              className="shadow-elevated"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-6 py-3 shadow-card">
              <span className="font-display text-2xl font-bold">4.8 ⭐</span>
              <span className="text-sm ml-2 opacity-80">68 reseñas</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3 block">
              {t('about_title')}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-tight font-bold">
              {t('about_subtitle')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('about_description')}
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
