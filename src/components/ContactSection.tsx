import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

// Constants for restaurant hours
const RESTAURANT_OPEN_TIME = "08:00";
const RESTAURANT_CLOSE_TIME = "15:30"; // Last reservation time (restaurant closes at 16:00)
const TIME_INTERVAL = 30; // minutes

// Generate available time slots between 08:00 and 16:00 with 30-minute intervals
const generateTimeSlots = () => {
  const slots = [];
  const [openHour, openMinute] = RESTAURANT_OPEN_TIME.split(":").map(Number);
  const [closeHour, closeMinute] = RESTAURANT_CLOSE_TIME.split(":").map(Number);
  
  let currentHour = openHour;
  let currentMinute = openMinute;
  
  while (currentHour < closeHour || (currentHour === closeHour && currentMinute <= closeMinute)) {
    const timeString = `${currentHour.toString().padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
    slots.push(timeString);
    
    // Add 30 minutes
    currentMinute += TIME_INTERVAL;
    if (currentMinute >= 60) {
      currentMinute = 0;
      currentHour++;
    }
  }
  
  return slots;
};

// Validate if time is within restaurant hours
const isValidTime = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  const [openHour, openMinute] = RESTAURANT_OPEN_TIME.split(":").map(Number);
  const [closeHour, closeMinute] = RESTAURANT_CLOSE_TIME.split(":").map(Number);
  
  const totalMinutes = hour * 60 + minute;
  const openTotalMinutes = openHour * 60 + openMinute;
  const closeTotalMinutes = closeHour * 60 + closeMinute;
  
  return totalMinutes >= openTotalMinutes && totalMinutes <= closeTotalMinutes;
};

// Check if time is in the past (for today)
const isPastTime = (time: string, date: string) => {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);
  
  // If selected date is not today, don't check past time
  if (selectedDate.getTime() !== today.getTime()) {
    return false;
  }
  
  const [hour, minute] = time.split(":").map(Number);
  const now = new Date();
  const selectedTime = new Date();
  selectedTime.setHours(hour, minute, 0, 0);
  
  return selectedTime.getTime() <= now.getTime();
};

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sending, setSending] = useState(false);
  const [timeError, setTimeError] = useState("");
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");

  // Generate time slots when component mounts
  useEffect(() => {
    setAvailableTimes(generateTimeSlots());
  }, []);

  // Check if there are available times for a given date
  const hasAvailableTimes = (date: string) => {
    if (!date) return false;
    
    const times = generateTimeSlots();
    const availableTimesForDate = times.filter(time => !isPastTime(time, date));
    
    return availableTimesForDate.length > 0;
  };

  // Handle date change to update available times
  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setTimeError(""); // Clear any previous time error
    
    // Check if there are available times for the selected date
    if (date && !hasAvailableTimes(date)) {
      setTimeError("No hay disponibilidad para este día. Por favor, selecciona otra fecha.");
    }
  };

  // Validate time input
  const validateTime = (time: string, date: string) => {
    if (!time) {
      setTimeError("");
      return;
    }

    // Check if time is within restaurant hours
    if (!isValidTime(time)) {
      setTimeError("Las reservas solo están disponibles entre las 08:00 y las 15:30");
      return;
    }

    // Check if time is in the past (only for today)
    if (isPastTime(time, date)) {
      setTimeError("No puedes reservar para una hora pasada");
      return;
    }

    setTimeError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const nombre = formData.get('nombre') as string || '';
    const fecha = formData.get('date') as string || '';
    const hora = formData.get('time') as string || '';
    const personas = formData.get('number') as string || '';
    const mensaje = formData.get('message') as string || '';
    
    // Validar campos obligatorios
    if (!nombre.trim() || !fecha || !hora || !personas) {
      alert("Por favor, completa todos los campos obligatorios");
      return;
    }

    // Validate time constraints
    if (!isValidTime(hora)) {
      alert("Las reservas solo están disponibles entre las 08:00 y las 15:30");
      return;
    }

    // Check if time is in the past
    if (isPastTime(hora, fecha)) {
      alert("No puedes reservar para una hora pasada");
      return;
    }
    
    const whatsappMessage = `Hola, quiero hacer una reserva en Trópico Restobar:

\u{2022} Nombre: ${nombre}
\u{2022} Fecha: ${fecha}
\u{2022} Hora: ${hora}
\u{2022} Personas: ${personas}
\u{2022} Mensaje: ${mensaje}`;
    
    const url = `https://wa.me/34633549686?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
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
                  08:00 – 16:00
                </p>
                <p className="text-primary-foreground/40 text-xs mt-1">
                  Consulta horarios actualizados en nuestro Restaurante
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
                <input type="text" name="nombre" required maxLength={100}
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
                <input type="number" name="number" min={1} max={20}
                  className="w-full rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="2" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-1.5 block">Fecha</label>
                <input 
                  type="date" 
                  name="date"
                  onChange={(e) => handleDateChange(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground focus:outline-none focus:border-accent transition-colors" 
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-1.5 block">Hora</label>
                <select 
                  name="time"
                  onChange={(e) => validateTime(e.target.value, selectedDate)}
                  className={`w-full rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground focus:outline-none focus:border-accent transition-colors cursor-pointer ${
                    timeError 
                      ? 'border-red-500 focus:border-red-500' 
                      : ''
                  }`}
                  style={{ color: '#9ca3af' }}
                  defaultValue=""
                >
                  <option value="" disabled style={{ color: '#9ca3af' }}>Selecciona hora</option>
                  {availableTimes.map((time) => {
                    const isPast = selectedDate && isPastTime(time, selectedDate);
                    return (
                      <option 
                        key={time} 
                        value={time}
                        disabled={isPast}
                        style={{ 
                          color: isPast ? '#9ca3af' : '#1f2937',
                          backgroundColor: 'white'
                        }}
                      >
                        {time} {isPast ? '(pasada)' : ''}
                      </option>
                    );
                  })}
                </select>
                {timeError && (
                  <p className="text-red-400 text-xs mt-1">{timeError}</p>
                )}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-1.5 block">Mensaje</label>
              <textarea rows={3} name="message" maxLength={1000}
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
