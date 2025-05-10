import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

export const supportedLanguages = {
  fr: 'FR',
  en: 'EN'
}

i18n
  .use(HttpApi)
  .use(LanguageDetector) // detects the current language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'fr', // default language
    supportedLngs: Object.keys(supportedLanguages),
    detection: {
      checkWhitelist: true,
    },
    debug: true,
    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
    // backend: { loadPath: '/locales/{{lng}}/translation.json' }
  });

export default i18n;