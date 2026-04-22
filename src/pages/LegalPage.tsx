import { motion } from "framer-motion";
import { Scale, Building, FileText, Shield, MapPin, Mail, Phone, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/gallery-tapas.jpg')" }}>
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-6xl text-primary-foreground font-bold mb-6">
              Aviso Legal
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Información legal sobre Trópico Restobar. Cumplimos con la normativa para ofrecerte un servicio transparente y seguro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center text-sm text-muted-foreground">
          <Link to="/" className="flex items-center hover:text-accent transition-colors">
            <Home className="w-4 h-4 mr-1" />
            Inicio
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground font-medium">Aviso Legal</span>
        </nav>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            
            {/* Company Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    Datos del Titular
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Nombre Comercial</h3>
                      <p className="text-muted-foreground">Trópico Restobar</p>
                    </div>
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Actividad Principal</h3>
                      <p className="text-muted-foreground">Restaurante y bar especializado en tapas mediterráneas</p>
                    </div>
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
                      <p className="text-muted-foreground">España - Comunidad Valenciana</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Purpose Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    Finalidad del Sitio Web
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Información Comercial:</span> Presentar nuestros servicios, carta y especialidades.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Gestión de Reservas:</span> Facilitar el proceso de reserva de mesas online.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Contacto Directo:</span> Proporcionar canales de comunicación con nuestros clientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Terms Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    Condiciones de Uso
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Uso Adecuado</h3>
                      <p className="text-muted-foreground text-sm">
                        El usuario se compromete a utilizar el sitio web de manera responsable, respetando la normativa vigente y los derechos de terceros.
                      </p>
                    </div>
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Propiedad Intelectual</h3>
                      <p className="text-muted-foreground text-sm">
                        Todos los contenidos (textos, imágenes, diseños) son propiedad de Trópico Restobar y están protegidos por la ley de propiedad intelectual.
                      </p>
                    </div>
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Limitación de Responsabilidad</h3>
                      <p className="text-muted-foreground text-sm">
                        Trópico Restobar no se responsabiliza por el uso inadecuado del sitio web ni por los contenidos de enlaces externos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Legal Framework Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    Marco Legal
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Legislación Aplicable:</span> Ley de Servicios de la Sociedad de la Información (LSSI) y Reglamento General de Protección de Datos (RGPD).
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Jurisdicción:</span> Para cualquier controversia, las partes se someten a los tribunales de España.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Actualización:</span> Nos reservamos el derecho de modificar este aviso legal en cualquier momento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl shadow-card p-8 md:p-12 text-primary-foreground"
            >
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold mb-4">
                  Información de Contacto Legal
                </h2>
                <p className="text-primary-foreground/90">
                  Para cualquier consulta legal sobre nuestro sitio web, contacta con nosotros.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email Legal</p>
                    <p className="text-primary-foreground/80">tropicobar102@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-primary-foreground/80">966 96 19 72</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-primary-foreground/80">Comunidad Valenciana, España</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Scale className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Asuntos Legales</p>
                    <p className="text-primary-foreground/80">Consultas jurídicas</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;