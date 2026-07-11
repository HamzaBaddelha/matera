'use client';

import { useEffect } from 'react';
import type { Locale } from '@/types';

export default function LocaleDirectionSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return null;
}
