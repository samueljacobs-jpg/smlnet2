/**
 * Contact.tsx
 *
 * Contact form that opens the visitor's email client via mailto:.
 * IMPORTANT: No data is stored anywhere — not in a database,
 * not in localStorage, not on any server. The form simply builds
 * a mailto: link and hands it off to the browser. This is
 * intentional for privacy and legal reasons.
 */
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

// Where contact messages are sent — opens the visitor's own email client
const CONTACT_EMAIL = "samueljacobsmaart@gmail.com";
const CONTACT_PHONE = "+31614129527";

function Contact() {
  const { lang, t } = useLanguage();

  // Form state — lives only in memory while the page is open
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error(t(translations.contact.errorFields));
      return;
    }

    // Build a mailto: link — the browser does the rest
    const subject = encodeURIComponent(
      `Website Inquiry from ${name.trim()} — ${service || "General"}`
    );
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\nService: ${service || "Not specified"}\n\nMessage:\n${message.trim()}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    toast.success(t(translations.contact.success));

    // Clear the form (nothing was saved anywhere)
    setName("");
    setEmail("");
    setService("");
    setMessage("");
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              {t(translations.contact.label)}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t(translations.contact.title)}
            </h2>
            <p className="text-muted-foreground">
              {t(translations.contact.subtitle)}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <a href={`tel:${CONTACT_PHONE}`} className="text-sm hover:text-primary transition-colors">
                +31 6 14129527
              </a>
            </div>
          </motion.div>

          {/* Contact form — opens mailto:, stores nothing */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5 glass p-8 md:p-10 rounded-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary-foreground">
                  {t(translations.contact.name)} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t(translations.contact.namePlaceholder)}
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  required
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary-foreground">
                  {t(translations.contact.email)} <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* Service dropdown */}
            <div>
              <label className="block text-sm font-medium mb-2 text-secondary-foreground">
                {t(translations.contact.service)}
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
              >
                <option value="">{t(translations.contact.selectService)}</option>
                {translations.contact.serviceOptions[lang].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Message textarea */}
            <div>
              <label className="block text-sm font-medium mb-2 text-secondary-foreground">
                {t(translations.contact.message)} <span className="text-primary">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t(translations.contact.messagePlaceholder)}
                rows={5}
                maxLength={2000}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
                required
              />
            </div>

            {/* Submit — triggers mailto: */}
            <Button type="submit" variant="hero" size="lg" className="w-full py-6 text-base">
              <Send className="w-4 h-4 mr-2" /> {t(translations.contact.send)}
            </Button>

            {/* Privacy notice */}
            <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
              <Mail className="w-3 h-3" />
              {t(translations.contact.privacy)}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
