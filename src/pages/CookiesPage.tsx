import { motion } from "framer-motion";
import { Cookie, Settings, Shield, CheckCircle, XCircle, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

const CookiesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/gallery-drinks.jpg')" }}>
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-6xl text-primary-foreground font-bold mb-6">
              {t('cookies_title')}
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              {t('cookies_intro')}
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
          <span className="text-foreground font-medium">{t('cookies_title')}</span>
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
                  <Cookie className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    {t('cookies_what_are_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('cookies_what_are_text')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Types Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    {t('cookies_types_title')}
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <h3 className="font-semibold text-foreground">{t('cookies_technical_title')}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {t('cookies_technical_text')}
                      </p>
                    </div>
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold text-foreground">{t('cookies_analytics_title')}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {t('cookies_analytics_text')}
                      </p>
                    </div>
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <XCircle className="w-5 h-5 text-red-600" />
                        <h3 className="font-semibold text-foreground">{t('cookies_third_parties_title')}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {t('cookies_third_parties_text')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Purpose Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    ¿Para Qué Usamos las Cookies?
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Funcionalidad Básica:</span> Asegurar que el sitio web funcione correctamente.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Experiencia Personalizada:</span> Recordar tus preferencias durante la visita.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Mejora Continua:</span> Analizar el uso para optimizar nuestros servicios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Management Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    {t('cookies_management_title')}
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Configuración del Navegador</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Puedes configurar tu navegador para:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          Aceptar todas las cookies
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          Rechazar cookies no esenciales
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          Ser notificado antes de aceptar cookies
                        </li>
                      </ul>
                    </div>
                    <div className="bg-sand-gradient rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Navegadores Compatibles</h3>
                      <p className="text-muted-foreground text-sm">
                        Chrome, Firefox, Safari, Edge y otros navegadores modernos permiten gestionar cookies desde sus configuraciones de privacidad.
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
                  {t('cookies_contact_title')}
                </h2>
                <p className="text-primary-foreground/90">
                  {t('cookies_contact_text')}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Cookie className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Más Información</p>
                    <p className="text-primary-foreground/80">Consulta nuestra política de privacidad</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Settings className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Configuración</p>
                    <p className="text-primary-foreground/80">Ajusta tus preferencias de cookies</p>
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

export default CookiesPage;