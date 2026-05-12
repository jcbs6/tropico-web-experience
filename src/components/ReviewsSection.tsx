import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useGoogleReviews } from "../hooks/useGoogleReviews";



const ReviewsSection = () => {
  const { t } = useLanguage();
  const { data, loading, error } = useGoogleReviews();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {loading ? (
            // Skeleton loading
            [...Array(6)].map((_, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="animate-pulse">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-4 h-4 bg-muted rounded" />
                    ))}
                  </div>
                  <div className="h-16 bg-muted rounded mb-4" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-full" />
                    <div className="flex-1">
                      <div className="h-4 bg-muted rounded mb-1 w-24" />
                      <div className="h-3 bg-muted rounded w-16" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Show reviews or fallback
            (error ? fallbackReviews : data?.reviews || []).slice(0, 6).map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft border border-border relative hover:shadow-card transition-shadow duration-300"
              >
                <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />

                <div className="flex mb-3">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-foreground text-sm leading-relaxed mb-4 italic">
                  "{r.text}"
                </p>

                <div className="flex items-center gap-3 mt-4">
                  {r.profile_photo_url && (
                    <img
                      src={r.profile_photo_url}
                      alt={r.author_name}
                      className="w-10 h-10 rounded-full"
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
      </div>
    </section>
  );
};

export default ReviewsSection;
