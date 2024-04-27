import i18n from "i18next";                      
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    // Config options

    // Specifies the default language (locale) used
    // when a user visits our site for the first time.
    // We use English here, but feel free to use
    // whichever locale you want.                   
    lng: "de",

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
            header: "header"
        },
      },
      pl: {
        translation: {
            car: "samochód",
            footer: "stopka",
            header: "nagłówek"
        },
      },
      de: {
        translation: {
            car: "Auto",
            footer: "Fusszeile",
            header: "Überschrift"
        },
      },
    },
  });

export default i18n;