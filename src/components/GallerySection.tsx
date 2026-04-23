import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import galleryTapas from "@/assets/gallery-tapas.jpg";
import galleryDrinks from "@/assets/gallery-drinks.jpg";
import galleryBreakfast from "@/assets/gallery-breakfast.jpg";
import foodTortilla from "@/assets/food-tortilla.jpg";
import foodSardinas from "@/assets/food-sardinas.jpg";
import foodCallos from "@/assets/food-callos.jpg";
import foodPaella from "@/assets/food-paella.jpg";
import foodBocadillo from "@/assets/food-bocadillo.jpg";
import foodLomo from "@/assets/food-lomo.jpg";
import foodZamburiñas from "@/assets/food-zamburiñas.jpg";
import foodBatido from "@/assets/food-batido.jpg";
import foodCake from "@/assets/food-cake.jpg";
import { useLanguage } from "../hooks/useLanguage";

const images = [
  { src: galleryTapas, alt: "Tapas variadas" },
  { src: galleryDrinks, alt: "Cócteles y bebidas" },
  { src: galleryBreakfast, alt: "Desayuno mediterráneo" },
  { src: foodTortilla, alt: "Tortilla francesa" },
  { src: foodSardinas, alt: "Sardinas a la plancha" },
  { src: foodCallos, alt: "Callos a la madrileña" },
  { src: foodBocadillo, alt: "Bocadillo artesano" },
  { src: foodPaella, alt: "Paella valenciana" },
  { src: foodLomo, alt: "Lomo de cerdo" },
  { src: foodZamburiñas, alt: "Zamburiñas al ajillo" },
  { src: foodBatido, alt: "Batido de chocolate" },
  { src: foodCake, alt: "Postre tradicional" },
];

const GallerySection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            {t('gallery_title')}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold">
            {t('gallery_subtitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-xl group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={640}
                height={640}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
