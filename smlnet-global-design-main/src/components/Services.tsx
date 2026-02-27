/**
 * Services.tsx
 *
 * Displays the three core services SMLnet offers:
 * development, hosting, and maintenance.
 * Each one gets an icon, title, and short description.
 */
import { motion } from "framer-motion";
import { Globe, Server, Wrench } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

// Icons match the order of items in translations.services.items
const serviceIcons = [Globe, Server, Wrench];

function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            {t(translations.services.label)}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t(translations.services.title)}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(translations.services.subtitle)}
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {translations.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-xl glass hover:glow-border transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t(service.title)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(service.desc)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
