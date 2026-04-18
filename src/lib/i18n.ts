export type Locale = 'en' | 'ar';

export const locales: Locale[] = ['en', 'ar'];
export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'ar';
}

export function isRTL(locale: Locale): boolean {
  return locale === 'ar';
}

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
  ar: () => import('@/dictionaries/ar.json').then((m) => m.default),
};

const cache = new Map<Locale, Awaited<ReturnType<typeof dictionaries.en>>>();

export async function getDictionary(locale: string) {
  const key: Locale = isLocale(locale) ? locale : defaultLocale;
  const cached = cache.get(key);
  if (cached) return cached;
  const dict =
    key === 'ar' ? await dictionaries.ar() : await dictionaries.en();
  cache.set(key, dict);
  return dict;
}
