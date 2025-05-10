import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/eng.json';
import ur from './locales/urdu.json';
import chi from './locales/china.json';
import arb from './locales/arbi.json';

i18n
  .use(initReactI18next) // connect to React
  .init({
    resources: {
      eng: { translation: en },
      urdu: { translation: ur },
      china: { translation: chi },
      arbi: { translation: arb }
    },
    lng: 'eng',             // Default language
    fallbackLng: 'eng',     // Agar koi missing word ho
    interpolation: {
      escapeValue: false   // React already escapes things
    }
  });

export default i18n;
