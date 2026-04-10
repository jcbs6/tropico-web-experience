import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("¡Solicitud enviada! Te responderemos en menos de 24 h.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="contacto" className="section-padding bg-deep-section text-primary-foreground">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3 block">
            Reservas y contacto
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4 font-bold">
            Te esperamos
          </h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto">
            Reserva tu mesa o escríbenos para cualquier consulta. Respondemos en menos de 24 h.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent mt-1" />
              <div>
                <h4 className="font-display text-lg mb-1 font-semibold">Teléfono</h4>
                <a href="tel:+34966961972" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  966 96 19 72
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent mt-1" />
              <div>
                <h4 className="font-display text-lg mb-1 font-semibold">Email</h4>
                <a href="mailto:tropicobar102@gmail.com" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  tropicobar102@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent mt-1" />
              <div>
                <h4 className="font-display text-lg mb-1 font-semibold">Dirección</h4>
                <a 
                  href="https://maps.google.com/?q=Trópico+Restobar+Avinguda+Costa+Blanca+110+Playa+San+Juan+Alicante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Avinguda de la Costa Blanca, 110<br />
                  Playa de San Juan, Alicante
                </a>
                <p className="text-primary-foreground/40 text-xs mt-1">
                  Click para ver en Google Maps
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-accent mt-1" />
              <div>
                <h4 className="font-display text-lg mb-1 font-semibold">Horario</h4>
                <p className="text-primary-foreground/70 text-sm">
                  Lunes a Domingo<br />
                  08:00 – 16:00 · 20:00 – cierre
                </p>
                <p className="text-primary-foreground/40 text-xs mt-1">
                  Consulta horarios actualizados en Google Maps
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden mt-4 shadow-card">
              <iframe
                title="Ubicación de Trópico Restobar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.5!2d-0.4204!3d38.3714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDIyJzE3LjAiTiAwwrAyNScxMy40Ilc!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 md:p-8 space-y-5 backdrop-blur-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-1.5 block">Nombre</label>
                <input type="text" required maxLength={100}
                  className="w-full rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tu nombre" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-1.5 block">Email</label>
                <input type="email" required maxLength={255}
                  className="w-full rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="tu@email.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-1.5 block">Teléfono</label>
                <input type="tel" maxLength={20}
                  className="w-full rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="600 000 000" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-1.5 block">Nº personas</label>
                <input type="number" min={1} max={20}
                  className="w-full rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="2" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-1.5 block">Fecha</label>
                <input type="date"
                  className="w-full rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-1.5 block">Hora</label>
                <input type="time"
                  className="w-full rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground focus:outline-none focus:border-accent transition-colors" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-1.5 block">Mensaje</label>
              <textarea rows={3} maxLength={1000}
                className="w-full rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Alergias, peticiones especiales..." />
            </div>
            <button type="submit" disabled={sending}
              className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground rounded-lg px-6 py-4 font-semibold hover:brightness-110 transition-all disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {sending ? "Enviando..." : "Reservar ahora"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
