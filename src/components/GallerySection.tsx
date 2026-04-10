import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import galleryTapas from "@/assets/gallery-tapas.jpg";
import galleryDrinks from "@/assets/gallery-drinks.jpg";
import galleryBreakfast from "@/assets/gallery-breakfast.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import foodSardinas from "@/assets/food-sardinas.jpg";
import foodBocadillo from "@/assets/food-bocadillo.jpg";

const images = [
  { src: galleryTapas, alt: "Tapas variadas", span: "md:col-span-2 md:row-span-2" },
  { src: galleryDrinks, alt: "Cócteles y bebidas", span: "" },
  { src: galleryBreakfast, alt: "Desayuno mediterráneo", span: "" },
  { src: aboutInterior, alt: "Interior del local", span: "md:col-span-2" },
  { src: foodSardinas, alt: "Sardinas a la plancha", span: "" },
  { src: foodBocadillo, alt: "Bocadillo artesano", span: "" },
];

const GallerySection = () => {
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
            Galería
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold">
            Entra con los ojos
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`overflow-hidden rounded-xl group ${img.span}`}
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
