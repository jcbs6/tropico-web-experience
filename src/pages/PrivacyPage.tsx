import { motion } from "framer-motion";
import { Shield, User, Database, Eye, Mail, Phone, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

const PrivacyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/gallery-local.jpg')" }}>
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-6xl text-primary-foreground font-bold mb-6">
              {t('privacy_title')}
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              {t('privacy_intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center text-sm text-muted-foreground">
          <Link to="/" className="flex items-center hover:text-accent transition-colors">
            <Home className="w-4 h-4 mr-1" />
            {t('nav_inicio')}
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground font-medium">{t('privacy_title')}</span>
        </nav>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            
            {/* Introduction Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    {t('privacy_purpose_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('privacy_purpose_text')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Data Collection Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    {t('privacy_data_title')}
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">{t('privacy_contact_subtitle')}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t('privacy_contact_text')}
                      </p>
                    </div>
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">{t('privacy_navigation_subtitle')}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t('privacy_navigation_text')}
                      </p>
                    </div>
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">{t('privacy_reservations_subtitle')}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t('privacy_reservations_text')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Usage Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    Cómo Usamos Tu Información
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Gestión de Reservas:</span> Confirmar y gestionar tus reservas en el restaurante.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Comunicaciones:</span> Enviar información relevante sobre tus reservas y eventos especiales.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Mejora del Servicio:</span> Analizar datos para ofrecer una mejor experiencia en Trópico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rights Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    Tus Derechos
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Acceso:</span> Solicitar una copia de tus datos personales.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Rectificación:</span> Corregir datos incorrectos o incompletos.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Eliminación:</span> Solicitar la eliminación de tus datos personales.
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
                  Contacta con Nosotros
                </h2>
                <p className="text-primary-foreground/90">
                  ¿Tienes dudas sobre tu privacidad? Estamos aquí para ayudarte.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
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
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;