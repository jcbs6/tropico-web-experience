import { Instagram, Phone, MessageCircle, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary border-t border-primary-foreground/10 py-10 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <span className="font-display text-xl text-primary-foreground font-bold tracking-[0.15em] uppercase">Trópico</span>
          <p className="text-primary-foreground/50 text-xs mt-1">
            Tropicobar Alicante Hosteleria 102 S.L.
          </p>
          <p className="text-primary-foreground/40 text-xs mt-2">
            Sabor auténtico frente al Mediterráneo desde 2020
          </p>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h4 className="font-display text-sm text-primary-foreground font-semibold mb-3">Contacto</h4>
          <div className="space-y-2">
            <a href="tel:+34966961972" className="flex items-center justify-center md:justify-start gap-2 text-xs text-primary-foreground/50 hover:text-accent transition-colors">
              <Phone className="w-3 h-3" />
              966 96 19 72
            </a>
            <a href="https://wa.me/34966961972?text=¡Hola!%20Quisiera%20hacer%20una%20reserva%20en%20Trópico%20Restobar" 
               target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center md:justify-start gap-2 text-xs text-primary-foreground/50 hover:text-green-400 transition-colors">
              <MessageCircle className="w-3 h-3" />
              WhatsApp
            </a>
            <a href="mailto:tropicobar102@gmail.com" className="flex items-center justify-center md:justify-start gap-2 text-xs text-primary-foreground/50 hover:text-accent transition-colors">
              <Mail className="w-3 h-3" />
              tropicobar102@gmail.com
            </a>
          </div>
        </div>

        {/* Legal & Social */}
        <div className="text-center md:text-right">
          <h4 className="font-display text-sm text-primary-foreground font-semibold mb-3">Legal</h4>
          <div className="space-y-2 mb-4">
            <a href="#" className="block text-xs text-primary-foreground/50 hover:text-accent transition-colors">Aviso legal</a>
            <a href="#" className="block text-xs text-primary-foreground/50 hover:text-accent transition-colors">Privacidad</a>
            <a href="#" className="block text-xs text-primary-foreground/50 hover:text-accent transition-colors">Cookies</a>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a
              href="https://www.instagram.com/tropico.restobar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/34966961972?text=¡Hola!%20Quisiera%20hacer%20una%20reserva%20en%20Trópico%20Restobar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-primary-foreground/30 text-xs mt-6">
        © {new Date().getFullYear()} Trópico Restobar. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
