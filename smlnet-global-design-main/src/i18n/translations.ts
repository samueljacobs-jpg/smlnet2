/**
 * translations.ts
 *
 * All website copy in English and Dutch. Organised by section so
 * it's easy to find and update text without touching components.
 *
 * Usage:  t(translations.hero.cta)  →  returns the string for
 *         whichever language is currently active.
 */

export type Language = "en" | "nl";

export const translations = {

  /* ── Navigation ─────────────────────────────────────────── */
  nav: {
    home:       { en: "Home",     nl: "Home" },
    services:   { en: "Services", nl: "Diensten" },
    about:      { en: "About",    nl: "Over Ons" },
    contact:    { en: "Contact",  nl: "Contact" },
    contactCta: { en: "Get In Touch", nl: "Neem Contact Op" },
  },

  /* ── Hero section (homepage) ────────────────────────────── */
  hero: {
    heading1:    { en: "We Build",      nl: "Wij Bouwen" },
    heading2:    { en: "Your Website",  nl: "Jouw Website" },
    description: {
      en: "SMLnet is a web development agency based in Rotterdam, the Netherlands, crafting stunning, high-performance websites for businesses everywhere.",
      nl: "SMLnet is een webontwikkelingsbureau gevestigd in Rotterdam, Nederland. Wij bouwen prachtige, snelle websites voor bedrijven overal ter wereld.",
    },
    cta:      { en: "Start Your Project",    nl: "Start Jouw Project" },
    services: { en: "View Our Services",     nl: "Bekijk Onze Diensten" },
  },

  /* ── Services ───────────────────────────────────────────── */
  services: {
    label:    { en: "What We Do",    nl: "Wat Wij Doen" },
    title:    { en: "Our Services",  nl: "Onze Diensten" },
    subtitle: {
      en: "We build, host, and maintain your website — that's what we do best.",
      nl: "Wij bouwen, hosten en onderhouden jouw website — dat is wat wij het beste doen.",
    },
    items: [
      {
        title: { en: "Website Development", nl: "Website Ontwikkeling" },
        desc: {
          en: "We design and build custom, high-performance websites tailored to your business — from concept to launch.",
          nl: "Wij ontwerpen en bouwen op maat gemaakte, snelle websites voor jouw bedrijf — van concept tot lancering.",
        },
      },
      {
        title: { en: "Web Hosting", nl: "Webhosting" },
        desc: {
          en: "Reliable, secure hosting that keeps your website online 24/7 with fast load times and enterprise-grade infrastructure.",
          nl: "Betrouwbare, veilige hosting die jouw website 24/7 online houdt met snelle laadtijden en professionele infrastructuur.",
        },
      },
      {
        title: { en: "Maintenance & Support", nl: "Onderhoud & Support" },
        desc: {
          en: "Ongoing updates, security patches, and technical support to keep your site running smoothly at all times.",
          nl: "Doorlopende updates, beveiligingspatches en technische ondersteuning om jouw website altijd soepel te laten draaien.",
        },
      },
    ],
  },

  /* ── About ──────────────────────────────────────────────── */
  about: {
    label:   { en: "About Us", nl: "Over Ons" },
    heading: { en: "We're",    nl: "Wij Zijn" },
    description: {
      en: "We're a passionate team of developers and designers based in Rotterdam, the Netherlands, building world-class websites for companies worldwide. We believe every business deserves a powerful online presence — one that's fast, beautiful, and built to grow.",
      nl: "Wij zijn een gepassioneerd team van ontwikkelaars en ontwerpers gevestigd in Rotterdam, Nederland. Wij bouwen websites van wereldklasse voor bedrijven wereldwijd. Wij geloven dat elk bedrijf een krachtige online aanwezigheid verdient — snel, mooi en gebouwd om te groeien.",
    },
    extendedDescription: {
      en: "SMLnet is a professional web development agency based in Rotterdam, the Netherlands. We design and build custom websites for businesses worldwide — with the reliability, quality, and attention to detail the Netherlands is known for.",
      nl: "SMLnet is een professioneel webontwikkelingsbureau gevestigd in Rotterdam, Nederland. Wij ontwerpen en bouwen op maat gemaakte websites voor bedrijven over de hele wereld — met de betrouwbaarheid, kwaliteit en oog voor detail waar Nederland bekend om staat.",
    },
    points: {
      en: [
        "Custom-built solutions, never templates",
        "Transparent communication & timelines",
        "Ongoing support & maintenance",
        "Based in Rotterdam, serving worldwide",
      ],
      nl: [
        "Op maat gemaakte oplossingen, nooit templates",
        "Transparante communicatie & planning",
        "Doorlopende ondersteuning & onderhoud",
        "Gevestigd in Rotterdam, wereldwijd actief",
      ],
    },
    card1title: { en: "Dutch Roots",         nl: "Nederlandse Roots" },
    card1desc: {
      en: "Our team works from Rotterdam and combines local expertise with an international vision. We understand the European market and build websites that perform globally.",
      nl: "Ons team werkt vanuit Rotterdam en combineert lokale expertise met een internationale blik. We begrijpen de Europese markt en bouwen websites die wereldwijd presteren.",
    },
    card2title: { en: "Websites Only",       nl: "Alleen Websites" },
    card2desc: {
      en: "We specialize in building, hosting, and maintaining websites — and that's what we focus on 100%. From simple business websites to complex web applications, we deliver quality.",
      nl: "Wij zijn gespecialiseerd in het bouwen, hosten en onderhouden van websites — en dat is waar we 100% op focussen. Van eenvoudige bedrijfswebsites tot complexe webapplicaties, wij leveren kwaliteit.",
    },
    card3title: { en: "Personal Approach",   nl: "Persoonlijke Aanpak" },
    card3desc: {
      en: "At SMLnet you won't get a standard template. Every project receives personal attention, direct communication, and a solution that fits your business.",
      nl: "Bij SMLnet krijg je geen standaard template. Elk project krijgt persoonlijke aandacht, directe communicatie en een oplossing die past bij jouw bedrijf.",
    },
  },

  /* ── Contact form ───────────────────────────────────────── */
  contact: {
    label:    { en: "Get In Touch",        nl: "Neem Contact Op" },
    title:    { en: "Let's Work Together", nl: "Laten We Samenwerken" },
    subtitle: {
      en: "Tell us about your project. No data is stored — your message goes directly to our inbox.",
      nl: "Vertel ons over jouw project. Er worden geen gegevens opgeslagen — je bericht gaat direct naar onze inbox.",
    },
    name:             { en: "Name",            nl: "Naam" },
    namePlaceholder:  { en: "Your name",       nl: "Jouw naam" },
    email:            { en: "Email",           nl: "E-mail" },
    service:          { en: "Service",         nl: "Dienst" },
    selectService:    { en: "Select a service", nl: "Selecteer een dienst" },
    serviceOptions: {
      en: ["Web Development", "Web Hosting", "Maintenance & Support", "Other"],
      nl: ["Website Ontwikkeling", "Webhosting", "Onderhoud & Support", "Anders"],
    },
    message:            { en: "Message",                        nl: "Bericht" },
    messagePlaceholder: { en: "Tell us about your project...",  nl: "Vertel ons over jouw project..." },
    send:               { en: "Send Message",                   nl: "Verstuur Bericht" },
    privacy: {
      en: "Opens your email client — we never store your data",
      nl: "Opent je e-mailclient — wij slaan nooit gegevens op",
    },
    errorFields: { en: "Please fill in all required fields.", nl: "Vul alstublieft alle verplichte velden in." },
    success: {
      en: "Your email client has been opened. Send the email to reach us!",
      nl: "Je e-mailclient is geopend. Verstuur de e-mail om ons te bereiken!",
    },
    phone: { en: "Phone", nl: "Telefoon" },
  },

  /* ── Pricing ────────────────────────────────────────────── */
  pricing: {
    label:    { en: "Pricing",              nl: "Prijzen" },
    title:    { en: "Transparent Pricing",  nl: "Transparante Prijzen" },
    subtitle: {
      en: "Every website is unique — and so is the price. Our pricing depends on your specific needs and requirements.",
      nl: "Elke website is uniek — en de prijs ook. Onze prijzen zijn afhankelijk van jouw specifieke wensen en eisen.",
    },
    factors: [
      {
        title: { en: "Website Complexity", nl: "Website Complexiteit" },
        desc: {
          en: "The design, layout, number of pages, and functionality all influence the final price.",
          nl: "Het ontwerp, de lay-out, het aantal pagina's en de functionaliteit bepalen mede de uiteindelijke prijs.",
        },
      },
      {
        title: { en: "Expected Visitors", nl: "Verwachte Bezoekers" },
        desc: {
          en: "Higher traffic requires more robust hosting infrastructure, which affects monthly costs.",
          nl: "Meer verkeer vereist een robuustere hostinginfrastructuur, wat de maandelijkse kosten beïnvloedt.",
        },
      },
      {
        title: { en: "Data & Storage", nl: "Data & Opslag" },
        desc: {
          en: "The amount of data storage, media files, and databases your website needs impacts pricing.",
          nl: "De hoeveelheid dataopslag, mediabestanden en databases die je website nodig heeft, beïnvloedt de prijs.",
        },
      },
      {
        title: { en: "Maintenance Level", nl: "Onderhoudsniveau" },
        desc: {
          en: "Ongoing updates, security monitoring, and support packages vary based on your needs.",
          nl: "Doorlopende updates, beveiligingsmonitoring en supportpakketten variëren op basis van jouw behoeften.",
        },
      },
    ],
    cta: {
      en: "Want to know what your website will cost? Contact us for a free, no-obligation estimate.",
      nl: "Wil je weten wat jouw website gaat kosten? Neem contact met ons op voor een gratis, vrijblijvende offerte.",
    },
    ctaEmail: { en: "Get a Free Estimate",       nl: "Vraag een Gratis Offerte Aan" },
    ctaPhone: { en: "Or Call Us",                 nl: "Of Bel Ons" },
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    tagline:  { en: "Building the web, worldwide.", nl: "Websites bouwen, wereldwijd." },
    services: { en: "Services", nl: "Diensten" },
    about:    { en: "About",    nl: "Over Ons" },
    contact:  { en: "Contact",  nl: "Contact" },
    pricing:  { en: "Pricing",  nl: "Prijzen" },
    cookiePolicy:    { en: "Cookie Policy",      nl: "Cookiebeleid" },
    privacyPolicy:   { en: "Privacy Policy",     nl: "Privacyverklaring" },
  },

  /* ── Cookie Policy page ────────────────────────────────── */
  cookiePolicy: {
    title:    { en: "Cookie Policy",  nl: "Cookiebeleid" },
    intro: {
      en: "SMLnet respects your privacy. This page explains how we handle cookies on our website.",
      nl: "SMLnet respecteert uw privacy. Op deze pagina leggen wij uit hoe wij omgaan met cookies op onze website.",
    },
    whatTitle: { en: "What are cookies?", nl: "Wat zijn cookies?" },
    whatText: {
      en: "Cookies are small text files stored on your device when you visit a website. They help the website function properly.",
      nl: "Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u een website bezoekt. Ze helpen de website goed te functioneren.",
    },
    ourUseTitle: { en: "Which cookies do we use?", nl: "Welke cookies gebruiken wij?" },
    ourUseText: {
      en: "We use strictly necessary (functional) cookies for the basic operation of the website — for example, remembering your language preference and cookie consent choice. Analytical and marketing cookies are only placed after your explicit consent.",
      nl: "Wij gebruiken strikt noodzakelijke (functionele) cookies voor de basisfunctionaliteit van de website — bijvoorbeeld het onthouden van uw taalvoorkeur en cookiekeuze. Analytische en marketing-cookies worden alleen geplaatst na uw uitdrukkelijke toestemming.",
    },
    noTrackingTitle: { en: "Your control", nl: "Uw controle" },
    noTrackingText: {
      en: "No tracking, analytical, or marketing scripts are loaded until you give explicit consent. You can change your preferences at any time via the \"Cookie settings\" link in the footer.",
      nl: "Er worden geen tracking-, analytische of marketing-scripts geladen totdat u uitdrukkelijk toestemming geeft. U kunt uw voorkeuren op elk moment aanpassen via de link \"Cookie-instellingen\" in de footer.",
    },
    consentTitle: { en: "Cookie consent", nl: "Cookietoestemming" },
    consentText: {
      en: "When you first visit our website, a cookie banner will ask for your preferences. Your choice is stored in a functional cookie for 12 months. You can update your preferences at any time.",
      nl: "Bij uw eerste bezoek aan onze website wordt via een cookiebanner om uw voorkeuren gevraagd. Uw keuze wordt opgeslagen in een functionele cookie voor 12 maanden. U kunt uw voorkeuren op elk moment wijzigen.",
    },
  },

  /* ── Privacy Policy page ───────────────────────────────── */
  privacyPolicy: {
    title:    { en: "Privacy Policy", nl: "Privacyverklaring" },
    intro: {
      en: "SMLnet takes your privacy seriously. This privacy policy explains what data we collect (spoiler: almost nothing) and how we handle it.",
      nl: "SMLnet neemt uw privacy serieus. Deze privacyverklaring legt uit welke gegevens wij verzamelen (spoiler: bijna niets) en hoe wij daarmee omgaan.",
    },
    noDataTitle: { en: "No data collection", nl: "Geen gegevensverzameling" },
    noDataText: {
      en: "This website does not collect, store, or process any personal data. We do not use contact forms that save data to a database. When you use our contact options, your email client or phone app opens directly — nothing passes through our servers.",
      nl: "Deze website verzamelt, bewaart of verwerkt geen persoonsgegevens. Wij gebruiken geen contactformulieren die gegevens opslaan in een database. Wanneer u onze contactopties gebruikt, opent uw e-mailclient of telefoon-app direct — er gaat niets via onze servers.",
    },
    noTrackingTitle: { en: "No tracking or profiling", nl: "Geen tracking of profilering" },
    noTrackingText: {
      en: "We do not use any analytics, tracking tools, or visitor profiling. No IP addresses, unique identifiers, or browsing behavior is recorded. There are no third-party scripts running on this website.",
      nl: "Wij gebruiken geen analytics, tracking-tools of bezoekersprofilering. Er worden geen IP-adressen, unieke identificatoren of surfgedrag vastgelegd. Er draaien geen scripts van derden op deze website.",
    },
    cookiesTitle: { en: "Cookies", nl: "Cookies" },
    cookiesText: {
      en: "We only use functional cookies that are strictly necessary for the website to work (such as your language preference). See our Cookie Policy for more details.",
      nl: "Wij gebruiken uitsluitend functionele cookies die strikt noodzakelijk zijn voor de werking van de website (zoals uw taalvoorkeur). Zie ons Cookiebeleid voor meer informatie.",
    },
    hostingTitle: { en: "Hosting", nl: "Hosting" },
    hostingText: {
      en: "Our website is hosted on infrastructure that does not add hidden tracking or analytics. We have verified that no external embeds or services collect visitor data.",
      nl: "Onze website wordt gehost op infrastructuur die geen verborgen tracking of analytics toevoegt. Wij hebben geverifieerd dat geen externe embeds of diensten bezoekersgegevens verzamelen.",
    },
    contactTitle: { en: "Questions?", nl: "Vragen?" },
    contactText: {
      en: "If you have any questions about our privacy practices, feel free to contact us.",
      nl: "Heeft u vragen over ons privacybeleid? Neem dan gerust contact met ons op.",
    },
  },

  /* ── Cookie consent banner ─────────────────────────────── */
  cookieBanner: {
    title: {
      en: "Cookie preferences",
      nl: "Cookievoorkeuren",
    },
    description: {
      en: "We use cookies to ensure our website functions properly and, with your consent, to analyse usage and support marketing purposes. You can adjust your preferences at any time.",
      nl: "Wij gebruiken cookies om onze website goed te laten functioneren en, indien u toestemming geeft, om het gebruik te analyseren en marketingdoeleinden te ondersteunen. U kunt uw voorkeuren op elk moment aanpassen.",
    },
    acceptAll:        { en: "Accept all",           nl: "Accepteer alles" },
    rejectAll:        { en: "Reject all",           nl: "Weiger alles" },
    customize:        { en: "Customise",            nl: "Voorkeuren aanpassen" },
    savePreferences:  { en: "Save preferences",     nl: "Voorkeuren opslaan" },
    functional:       { en: "Functional",           nl: "Functioneel" },
    functionalDesc: {
      en: "Required for the website to work properly (e.g. language preference).",
      nl: "Noodzakelijk voor de goede werking van de website (bijv. taalvoorkeur).",
    },
    alwaysActive:     { en: "Always active",        nl: "Altijd actief" },
    analytical:       { en: "Analytical",           nl: "Analytisch" },
    analyticalDesc: {
      en: "Help us understand how visitors use our website.",
      nl: "Helpen ons te begrijpen hoe bezoekers onze website gebruiken.",
    },
    marketing:        { en: "Marketing",            nl: "Marketing" },
    marketingDesc: {
      en: "Used to display relevant advertisements.",
      nl: "Worden gebruikt om relevante advertenties te tonen.",
    },
    cookiePolicyLink:  { en: "Cookie Policy",       nl: "Cookiebeleid" },
    privacyPolicyLink: { en: "Privacy Policy",      nl: "Privacyverklaring" },
    cookieSettings:    { en: "Cookie settings",     nl: "Cookie-instellingen" },
  },

} as const;
