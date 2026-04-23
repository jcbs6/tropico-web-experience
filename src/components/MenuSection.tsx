import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { QrCode } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const MenuSection = () => {
  const { t } = useLanguage();
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
            {t('menu_title')}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 font-bold">
            {t('menu_subtitle')}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            {t('menu_description')}
          </p>
          
          <a
            href="https://menu.qamarero.com/mesa/Bxb3WGmYRbay8UpaIRM8NQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-lg px-10 py-5 text-base font-semibold shadow-lg hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300 hover:scale-105"
          >
            {t('menu_button')}
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <p className="text-muted-foreground text-sm mt-8 max-w-md mx-auto">
            {t('menu_reserve')}
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
