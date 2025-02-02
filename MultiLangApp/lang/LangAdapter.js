import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './localization/en.json';
import ru from './localization/ru.json';

export const defaultNS = 'common';
export const resources = {
  en: { common: en.common },
  ru: { common: ru.common },
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: 'ru', // Язык по умолчанию
  compatibilityJSON: 'v3',
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
});

export const Localization = i18n;