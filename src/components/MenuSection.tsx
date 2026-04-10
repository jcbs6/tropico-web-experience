import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import foodSardinas from "@/assets/food-sardinas.jpg";
import foodBocadillo from "@/assets/food-bocadillo.jpg";
import foodTortilla from "@/assets/food-tortilla.jpg";

type MenuItem = { name: string; desc: string; price: string; popular?: boolean; img?: string };

const categories: Record<string, MenuItem[]> = {
  "Desayunos": [
    { name: "Tostada con tomate y AOVE", desc: "Pan artesano, tomate rallado y aceite virgen extra", price: "3,50 €" },
    { name: "Desayuno completo", desc: "Tostada, zumo natural, café y fruta de temporada", price: "7,50 €" },
    { name: "Churros con chocolate", desc: "Churros caseros con chocolate espeso", price: "4,50 €" },
    { name: "Yogur con granola", desc: "Yogur natural con granola artesana y miel", price: "5,00 €" },
  ],
  "Tapas": [
    { name: "Sardinas a la plancha", desc: "Sardinas frescas del día con limón y perejil", price: "9,00 €", popular: true, img: foodSardinas },
    { name: "Patatas bravas", desc: "Patatas crujientes con salsa brava y alioli casero", price: "5,50 €" },
    { name: "Croquetas de jamón", desc: "Croquetas cremosas de jamón ibérico", price: "7,00 €" },
    { name: "Tortilla española", desc: "Tortilla jugosa de patata con cebolla", price: "6,50 €", popular: true, img: foodTortilla },
  ],
  "Bocadillos": [
    { name: "Bocadillo de lomo", desc: "Lomo a la plancha con pimientos asados", price: "6,50 €", popular: true, img: foodBocadillo },
    { name: "Bocadillo de calamares", desc: "Calamares fritos en pan crujiente", price: "7,00 €" },
    { name: "Vegetal completo", desc: "Lechuga, tomate, huevo, atún, maíz y mayonesa", price: "5,50 €" },
    { name: "Serranito", desc: "Lomo, jamón serrano, pimiento verde y tomate", price: "7,50 €" },
  ],
  "Platos": [
    { name: "Plato del día", desc: "Consulta nuestra sugerencia diaria", price: "10,00 €" },
    { name: "Pollo a la plancha", desc: "Con ensalada mixta y patatas", price: "9,50 €" },
    { name: "Pescado del día", desc: "Pieza fresca con guarnición de temporada", price: "12,00 €" },
  ],
  "Bebidas": [
    { name: "Café solo / cortado", desc: "Café de especialidad", price: "1,50 €" },
    { name: "Zumo natural", desc: "Naranja, piña o combinado", price: "3,00 €" },
    { name: "Cerveza caña", desc: "Caña bien fría", price: "2,00 €" },
    { name: "Copa de vino", desc: "Tinto, blanco o rosado", price: "3,50 €" },
  ],
};

const catKeys = Object.keys(categories);

const MenuSection = () => {
  const [active, setActive] = useState(catKeys[0]);
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
            Sabores que enamoran
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Platos caseros, ingredientes frescos y recetas de toda la vida con un toque especial.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {catKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {categories[active].map((item) => (
            <div
              key={item.name}
              className="group relative bg-card rounded-xl p-5 shadow-soft hover:shadow-card transition-all duration-300 border border-border overflow-hidden hover:-translate-y-1"
            >
              {item.img && (
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-36 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={640}
                />
              )}
              {item.popular && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent mb-2">
                  <Star className="w-3 h-3 fill-accent text-accent" /> Popular
                </span>
              )}
              <h4 className="font-display text-lg text-foreground mb-1 font-semibold">{item.name}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">{item.desc}</p>
              <span className="font-semibold text-primary text-sm">{item.price}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
