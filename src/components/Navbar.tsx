import { useState, useEffect } from "react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Carta", href: "#carta" },
  { label: "Galería", href: "#galeria" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary/95 backdrop-blur-md shadow-card" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#hero" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Trópico" 
            className="h-20 w-auto object-contain block"
          />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/tropico.restobar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/34633549686?text=¡Hola!%20Quisiera%20hacer%20una%20reserva%20en%20Trópico%20Restobar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="rounded-lg bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:bg-lemon transition-colors"
            >
              Reservar
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-primary/95 backdrop-blur-md"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/tropico.restobar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/60 hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/34633549686?text=¡Hola!%20Quisiera%20hacer%20una%20reserva%20en%20Trópico%20Restobar"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/60 hover:text-green-400 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold"
                >
                  Reservar mesa
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
