'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Locale, MenuCategory, Dictionary } from '@/types';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import MenuItemCard from './MenuItemCard';
import Button from './ui/Button';
import FadeUpInView from './ui/FadeUpInView';

export default function MenuPreview({
  locale,
  dict,
  categories,
}: {
  locale: Locale;
  dict: Dictionary;
  categories: MenuCategory[];
}) {
  const withItems = categories.filter((c) => c.items.length > 0);
  const tabs = withItems.slice(0, 6);

  const [activeId, setActiveId] = useState(tabs[0]?.id);

  const current = tabs.find((c) => c.id === activeId);
  const items = current?.items.slice(0, 5) || [];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-4 flex justify-center">
          <Image
            src="/images/logo/Matera-Icon.png"
            alt="Matera-Icon"
            width={90}
            height={90}
            className="h-auto w-20 md:w-24"
            priority={false}
          />
        </div>
        <SectionHeading
          title={dict.menuSection.title}
          subtitle={dict.menuSection.subtitle}
        />

        <div className="flex gap-2 overflow-x-auto pb-4 mb-12 scrollbar-hide justify-start md:justify-center">
          {tabs.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`px-5 py-2.5 text-xs tracking-wider uppercase whitespace-nowrap border transition-all duration-300 ${
                activeId === cat.id
                  ? 'bg-brand-creamy text-brand-black border-brand-creamy'
                  : 'bg-transparent text-brand-concrete border-brand-concrete/20 hover:border-brand-creamy/40 hover:text-brand-beige'
              }`}
            >
              {locale === 'ar' ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          {items.map((item, index) => (
            <FadeUpInView key={item.id} index={index}>
              <MenuItemCard
                item={item}
                locale={locale}
                dict={dict}
              />
            </FadeUpInView>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={`/${locale}/menu`} variant="outline">
            {dict.menuSection.viewFull}
          </Button>
        </div>
      </Container>
    </section>
  );
}
