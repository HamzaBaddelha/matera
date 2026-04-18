'use client';

import { useEffect, useState, useCallback } from 'react';
import type { Locale, MenuCategory } from '@/types';

export default function MenuNav({
  categories,
  locale,
}: {
  categories: MenuCategory[];
  locale: Locale;
}) {
  const [active, setActive] = useState(categories[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="sticky top-20 z-30 bg-brand-black/95 backdrop-blur-md border-b border-brand-creamy/10 py-4">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className={`px-4 py-2 text-xs tracking-wider uppercase whitespace-nowrap border transition-all duration-300 ${
              active === cat.id
                ? 'bg-brand-creamy text-brand-black border-brand-creamy'
                : 'bg-transparent text-brand-concrete border-brand-concrete/20 hover:border-brand-creamy/40 hover:text-brand-beige'
            }`}
          >
            {locale === 'ar' ? cat.nameAr : cat.nameEn}
          </button>
        ))}
      </div>
    </div>
  );
}
