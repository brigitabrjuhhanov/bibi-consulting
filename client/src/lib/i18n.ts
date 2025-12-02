import { create } from 'zustand';

export type Language = 'en' | 'et';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      switchLang: 'EST'
    },
    hero: {
      title: 'Clarity. Structure. Growth.',
      subtitle: 'We combine decades of financial expertise with modern digital strategy to help your business thrive.',
      cta: 'Contact Us'
    },
    services: {
      title: 'Our Services',
      accounting: {
        title: 'Accounting & Financial Support',
        desc: 'From daily bookkeeping to annual reports, we ensure your finances are in perfect order.',
        details: 'Comprehensive accounting services including VAT reporting, payroll, and compliance for small to medium businesses.'
      },
      it: {
        title: 'IT & Product Consulting',
        desc: 'We guide your digital journey, from product strategy and MVP development to AI readiness.',
        details: 'Expert guidance on product strategy, roadmap development, and workflow automation.'
      },
      business: {
        title: 'Business & Operations',
        desc: 'We help you optimize processes, improve efficiency, and lead your team through transformation.',
        details: 'Efficiency improvements, process redesign, and operational structure optimization.'
      },
      learnMore: 'Learn More'
    },
    about: {
      title: 'About BiBi Consulting',
      subtitle: 'Trust & Expertise',
      desc: 'We are a strategic partnership with a shared passion for helping businesses succeed. Our combined experience in accounting and digital innovation allows us to offer a unique and comprehensive consulting service.',
      values: {
        clarity: 'Clarity',
        trust: 'Trust',
        expertise: 'Expertise',
        collaboration: 'Collaboration'
      }
    },
    contact: {
      title: 'Contact Us',
      desc: 'Get in touch with us for expert advice on accounting, IT, and business operations.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message'
      },
      email: 'info@bibiconsulting.eu'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  et: {
    nav: {
      home: 'Avaleht',
      services: 'Teenused',
      about: 'Meist',
      contact: 'Kontakt',
      switchLang: 'ENG'
    },
    hero: {
      title: 'Selgus. Struktuur. Kasv.',
      subtitle: 'Ühendame aastakümnete pikkuse finantskogemuse kaasaegse digitaalse strateegiaga, et aidata teie ettevõttel õitseda.',
      cta: 'Võtke ühendust'
    },
    services: {
      title: 'Meie Teenused',
      accounting: {
        title: 'Raamatupidamine ja finantstugi',
        desc: 'Alates igapäevasest raamatupidamisest kuni aastaaruanneteni tagame, et teie finantsid on täiuslikus korras.',
        details: 'Laiaulatuslikud raamatupidamisteenused, sealhulgas käibemaksuaruandlus, palgaarvestus ja vastavus.'
      },
      it: {
        title: 'IT- ja tootealane nõustamine',
        desc: 'Juhime teie digitaalset teekonda alates tootestrateegiast ja MVP arendusest kuni tehisintellekti valmisolekuni.',
        details: 'Asjatundlik nõu tootestrateegia, tegevuskava arendamise ja töövoogude automatiseerimise kohta.'
      },
      business: {
        title: 'Äri- ja operatsioonide nõustamine',
        desc: 'Aitame teil optimeerida protsesse, parandada tõhusust ja juhtida oma meeskonda läbi muutuste.',
        details: 'Tõhususe parandamine, protsesside ümberkujundamine ja tegevusstruktuuri optimeerimine.'
      },
      learnMore: 'Loe lähemalt'
    },
    about: {
      title: 'BiBi Consultingust',
      subtitle: 'Usaldus ja Asjatundlikkus',
      desc: 'Oleme strateegiline partnerlus, kellel on ühine kirg aidata ettevõtetel edu saavutada. Meie kombineeritud kogemus raamatupidamises ja digitaalses innovatsioonis võimaldab meil pakkuda ainulaadset ja laiaulatuslikku nõustamisteenust.',
      values: {
        clarity: 'Selgus',
        trust: 'Usaldus',
        expertise: 'Asjatundlikkus',
        collaboration: 'Koostöö'
      }
    },
    contact: {
      title: 'Võtke meiega ühendust',
      desc: 'Võtke ühendust BiBi Consultinguga, et saada asjatundlikku nõu raamatupidamise, IT ja äritegevuse kohta.',
      form: {
        name: 'Nimi',
        email: 'E-post',
        message: 'Sõnum',
        submit: 'Saada sõnum'
      },
      email: 'info@bibiconsulting.eu'
    },
    footer: {
      rights: 'Kõik õigused kaitstud.'
    }
  }
};

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

export const useLanguage = create<LanguageState>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang, t: translations[lang] }),
  t: translations.en
}));
