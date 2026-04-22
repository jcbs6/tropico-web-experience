import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

// Analytics blocking system
let analyticsLoaded = false;

const loadAnalytics = () => {
  if (analyticsLoaded) return;
  
  console.log("Loading analytics scripts...");
  
  // Example: Load Google Analytics
  // const script1 = document.createElement('script');
  // script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  // script1.async = true;
  // document.head.appendChild(script1);
  
  // Example: Load other analytics
  // const script2 = document.createElement('script');
  // script2.innerHTML = `
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());
  //   gtag('config', 'GA_MEASUREMENT_ID');
  // `;
  // document.head.appendChild(script2);
  
  analyticsLoaded = true;
  console.log("Analytics loaded successfully");
};

const unloadAnalytics = () => {
  if (!analyticsLoaded) return;
  
  console.log("Removing analytics scripts...");
  
  // Remove analytics scripts if needed
  // This is more complex and might require page reload
  
  analyticsLoaded = false;
  console.log("Analytics unloaded");
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    // CRITICAL: Only show banner if NO consent exists
    if (!cookieConsent) {
      console.log("No cookie consent found - showing banner");
      setIsVisible(true);
    } else {
      console.log("Cookie consent found:", cookieConsent);
      // Show floating button if consent already exists
      setShowFloatingButton(true);
      // Load existing preferences
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (savedPreferences) {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
        console.log("Loaded preferences:", parsed);
        // Load scripts based on saved preferences
        if (parsed.analytics) {
          loadAnalytics();
        }
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    console.log("🍪 Accepting all cookies:", allPreferences);
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(allPreferences));
    setPreferences(allPreferences);
    loadAnalytics();
    setIsVisible(false);
    setShowFloatingButton(true);
  };

  const handleRejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    console.log("🚫 Rejecting all cookies:", minimalPreferences);
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookiePreferences', JSON.stringify(minimalPreferences));
    setPreferences(minimalPreferences);
    unloadAnalytics();
    setIsVisible(false);
    setShowFloatingButton(true);
  };

  const handleSavePreferences = () => {
    console.log("💾 Saving custom preferences:", preferences);
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    
    // Load/unload scripts based on new preferences
    if (preferences.analytics) {
      loadAnalytics();
    } else {
      unloadAnalytics();
    }
    
    setIsVisible(false);
    setShowSettings(false);
    setShowFloatingButton(true);
  };

  const handleOpenSettings = () => {
    console.log("Opening cookie settings");
    setIsVisible(true);  // Mostrar el banner
    setShowSettings(true);  // Mostrar el panel de configuración
  };

  const handleCloseSettings = () => {
    console.log("Closing cookie settings");
    setShowSettings(false);
    setIsVisible(false);  // Ocultar el banner después de cerrar configuración
  };

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    const newPreferences = { ...preferences, [type]: value };
    console.log(`🔄 Changing ${type} to ${value}:`, newPreferences);
    setPreferences(newPreferences);
  };

  // El componente siempre debe estar montado para poder reabrirse
  // Solo retornamos null si no hay consentimiento y no hay banner flotante que mostrar
  if (!showFloatingButton && !isVisible) return null;

  return (
    <>
      {/* Floating Settings Button */}
      <AnimatePresence>
        {showFloatingButton && !showSettings && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            onClick={() => {
              console.log("CLICK BOTÓN COOKIES");
              handleOpenSettings();
            }}
            className="fixed bottom-20 right-6 z-50 w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Configurar cookies"
          >
            <Cookie className="w-5 h-5" />
            <span className="absolute bottom-full mb-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Configurar cookies
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Banner */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
        {!showSettings ? (
          // Main Banner
          <div className="max-w-4xl mx-auto bg-primary/95 backdrop-blur-md rounded-2xl shadow-card border border-primary/20 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              {/* Icon and Content */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
                    Cookies en Trópico Restobar
                  </h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed mb-3">
                    Usamos cookies para mejorar tu experiencia, recordar tus preferencias y analizar el tráfico de nuestra web. 
                    Tu privacidad es importante para nosotros.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs">
                    <Link 
                      to="/cookies" 
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                    >
                      Política de cookies
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                    <Link 
                      to="/privacidad" 
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                    >
                      Privacidad
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 min-w-[200px]">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-primary-foreground/80 border border-primary-foreground/30 rounded-lg hover:bg-primary-foreground/10 hover:scale-105 hover:shadow-md transition-all duration-300"
                >
                  Rechazar
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-sm font-medium text-primary-foreground/80 border border-primary-foreground/30 rounded-lg hover:bg-primary-foreground/10 hover:scale-105 hover:shadow-md transition-all duration-300"
                >
                  Configurar
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:brightness-110 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  Aceptar todas
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Settings Panel
          <div className="max-w-2xl mx-auto bg-primary/95 backdrop-blur-md rounded-2xl shadow-card border border-primary/20 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary-foreground">
                  Configurar Cookies
                </h3>
              </div>
              <button
                onClick={handleCloseSettings}
                className="text-primary-foreground/60 hover:text-primary-foreground hover:scale-110 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="bg-primary-foreground/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <div>
                      <h4 className="font-semibold text-primary-foreground">Cookies Necesarias</h4>
                      <p className="text-xs text-primary-foreground/70">
                        Esenciales para el funcionamiento básico del sitio
                      </p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-accent rounded-full flex items-center px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  Permiten la navegación, acceso a áreas seguras y uso de funciones esenciales.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-primary-foreground/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Cookie className="w-5 h-5 text-primary-foreground/60" />
                    <div>
                      <h4 className="font-semibold text-primary-foreground">Cookies de Análisis</h4>
                      <p className="text-xs text-primary-foreground/70">
                        Nos ayudan a mejorar la web
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('analytics', !preferences.analytics)}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.analytics ? 'bg-accent' : 'bg-primary-foreground/30'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                    }`}></div>
                  </button>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  Recopilan información anónima sobre cómo usas nuestra web para mejorar nuestros servicios.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-primary-foreground/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Cookie className="w-5 h-5 text-primary-foreground/60" />
                    <div>
                      <h4 className="font-semibold text-primary-foreground">Cookies de Marketing</h4>
                      <p className="text-xs text-primary-foreground/70">
                        Para publicidad personalizada
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('marketing', !preferences.marketing)}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.marketing ? 'bg-accent' : 'bg-primary-foreground/30'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                    }`}></div>
                  </button>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  Nos permiten mostrarte publicidad relevante basada en tus intereses.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-primary-foreground/80 border border-primary-foreground/30 rounded-lg hover:bg-primary-foreground/10 hover:scale-105 hover:shadow-md transition-all duration-300"
              >
                Rechazar todas
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium text-primary-foreground/80 border border-primary-foreground/30 rounded-lg hover:bg-primary-foreground/10 hover:scale-105 hover:shadow-md transition-all duration-300"
              >
                Aceptar todas
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:brightness-110 hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        )}
      </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieBanner;
