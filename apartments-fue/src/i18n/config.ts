import i18n from "i18next";                      
import { initReactI18next } from "react-i18next";


const userLocale = navigator.language;

i18n
  .use(initReactI18next)
  .init({
    // Config options

    // Specifies the default language (locale) used
    // when a user visits our site for the first time.
    // We use English here, but feel free to use
    // whichever locale you want.                   
    lng: `${userLocale}`,

    // Fallback locale used when a translation is
    // missing in the active locale. Again, use your
    // preferred locale here. 
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },

    // Translation messages. Add any languages
    // you want here.
    resources: {
      en: {
        translation: {
            car: "car",
            footer: "footer",
            header: "header",
            About_us: "About us",
            Our_offer: "Our offer",
            Furnishings: "Furnishings",
        },
      },
      pl: {
        translation: {
            car: "samochód",
            footer: "stopka",
            header: "nagłówek",
            About_us: "O nas",
            Our_offer: "Nasza oferta",
            Furnishings: "Wyposażenie",
        },
      },
      de: {
        translation: {
            car: "Auto",
            footer: "Fusszeile",
            header: "Überschrift",
            About_us: "Über uns",
            Our_offer: "Unser Angebot",
            Furnishings: "Einrichtung",
        },
      },
      es: {
        translation: {
            car: "coche",
            footer: "pie de página",
            header: "encabezado",
            About_us: "Sobre nosotros",
            Our_offer: "Nuestra oferta",
            Furnishings: "Mobiliario",
        },
      },
    },
  });

export default i18n;