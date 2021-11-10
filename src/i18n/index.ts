import { createI18n } from 'vue-i18n';
import en from './en';

const language = navigator.language?.toLowerCase();

const supported = ['en'];
const locale = language.split('-')?.[0];
const defaultLocale = supported.includes(locale) ? locale : 'en';

const i18n = createI18n({
  fallbackLocale: 'ch',
  globalInjection: true,
  legacy: false,
  locale: defaultLocale,
  messages: {
    en,
  },
});

export default i18n;
