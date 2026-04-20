import translations from '../locales/translations.json';

export const languages = {
  ru: 'Русский',
  en: 'English',
  cn: '中文',
  be: 'Белорусский',
};

export const defaultLang = 'ru';

export type Language = keyof typeof languages;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const [, , ...rest] = pathname.split('/');
  return rest.join('/') || 'index';
}

export function translatePath(path: string, lang: Language): string {
  return `/${lang}${path === '/' ? '' : path}`;
}