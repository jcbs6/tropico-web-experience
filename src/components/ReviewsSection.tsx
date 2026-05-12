import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ExternalLink, MessageSquare, MapPin } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useGoogleReviews } from "../hooks/useGoogleReviews";



const ReviewsSection = () => {
  const { t } = useLanguage();
  const { data, loading, error } = useGoogleReviews();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Filter reviews to prioritize Spanish ones
  const filterSpanishReviews = (reviews: any[]) => {
    if (!reviews || reviews.length === 0) return [];
    
    // Try to find Spanish reviews first
    const spanishReviews = reviews.filter(review => {
      const text = review.text?.toLowerCase() || '';
      const spanishKeywords = ['excelente', 'buen', 'perfecto', 'delicioso', 'recomiendo', 'sitio', 'ambiente', 'personal', 'atento'];
      return spanishKeywords.some(keyword => text.includes(keyword));
    });
    
    // If we have at least 3 Spanish reviews, use them
    if (spanishReviews.length >= 3) {
      return spanishReviews.slice(0, 6);
    }
    
    // Otherwise, use all reviews
    return reviews.slice(0, 6);
  };

  // Fallback reviews for error case
  const fallbackReviews = [
    {
      author_name: "María García",
      rating: 5,
      text: "Excelente ambiente y comida de calidad. El personal muy atento.",
      relative_time_description: "hace 1 semana",
      profile_photo_url: undefined
    },
    {
      author_name: "Juan Pérez",
      rating: 4,
      text: "Muy buen sitio para disfrutar de tapas auténticas.",
      relative_time_description: "hace 2 semanas",
      profile_photo_url: undefined
    },
    {
      author_name: "Ana López",
      rating: 5,
      text: "Perfecto para una comida familiar. Los platos están deliciosos.",
      relative_time_description: "hace 3 semanas",
      profile_photo_url: undefined
    }
  ];

  return (
    <section id="opiniones" className="section-padding bg-sand-gradient">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            {t('reviews_title')}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 font-bold">
            {t('reviews_subtitle')}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-display text-2xl text-foreground font-bold">
              {data?.rating || "4.8"}
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            Basado en {data?.user_ratings_total || 68} reseñas en Google
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {loading ? (
              // Premium skeleton loading
              [...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: i * 0.06,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="bg-card rounded-xl p-6 shadow-soft border border-border h-full"
                >
                  <div className="h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <motion.div
                          key={j}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            duration: 0.4,
                            delay: j * 0.08,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                          className="w-4 h-4 bg-muted rounded-full"
                        />
                      ))}
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted rounded-lg mb-4 h-20 animate-pulse" />
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded w-3/4 animate-pulse delay-75" />
                        <div className="h-3 bg-muted rounded w-1/2 animate-pulse delay-100" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 bg-muted rounded-full animate-pulse delay-125" />
                      <div className="flex-1 space-y-1">
                        <div className="h-2 bg-muted rounded animate-pulse delay-150" />
                        <div className="h-2 bg-muted rounded w-20 animate-pulse delay-175" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              // Show reviews or fallback
              (error ? fallbackReviews : filterSpanishReviews(data?.reviews || [])).map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.08,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="bg-card rounded-xl p-6 shadow-soft border border-border relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group"
                >
                  <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                  <div className="flex mb-3">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-accent text-accent transition-colors duration-200 group-hover:scale-110"
                      />
                    ))}
                  </div>

                  <p className="text-foreground text-sm leading-relaxed mb-4 italic line-clamp-5 group-hover:line-clamp-none transition-all duration-300">
                    "{r.text}"
                  </p>

                  <div className="flex items-center gap-3 mt-auto">
                    {r.profile_photo_url && (
                      <img
                        src={r.profile_photo_url}
                        alt={r.author_name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-background shadow-md group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}

                    <div>
                      <span className="text-muted-foreground text-xs font-semibold tracking-wide block">
                        {r.author_name}
                      </span>

                      <span className="text-[11px] text-muted-foreground/70">
                        {r.relative_time_description}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Premium Dual CTA Buttons */}
          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Primary CTA - Leave a Review */}
              <motion.button
                onClick={() => window.open('https://search.google.com/local/writereview?placeid=ChIJFSYgpDo5Yg0RMQy_HlZh-gY', '_blank')}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="group relative inline-flex items-center gap-3 bg-accent text-accent-foreground rounded-xl px-10 py-5 font-semibold hover:bg-accent/90 hover:-translate-y-2 hover:shadow-xl transition-all duration-400 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <MessageSquare className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-400" />
                <span className="relative z-10 group-hover:text-accent-foreground transition-colors duration-400">
                  {t('reviews_leave_review')}
                </span>
              </motion.button>

              {/* Secondary CTA - View All Reviews */}
              <motion.a
                href="https://www.google.com/maps/place/Trópico+Restobar/@38.362312,-0.414159,17z/data=!4m8!3m7!1s0xd62393aa4202615:0x6fa61561ebf0c31!8m2!3d38.362312!4d-0.414159!9m1!1b1!16s%2Fg%2F11wwv48ffr?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="group relative inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary-foreground rounded-xl px-10 py-5 font-semibold hover:bg-primary/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-400 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <MapPin className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-400" />
                <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-400">
                  {t('reviews_view_all')}
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
