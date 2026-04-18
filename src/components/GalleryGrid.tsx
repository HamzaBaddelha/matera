import Image from 'next/image';
import type { Locale, GalleryImage, Dictionary } from '@/types';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import FadeUpInView from './ui/FadeUpInView';

export default function GalleryGrid({
  locale,
  dict,
  images,
}: {
  locale: Locale;
  dict: Dictionary;
  images: GalleryImage[];
}) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          title={dict.gallery.title}
          subtitle={dict.gallery.subtitle}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <FadeUpInView
              key={img.id}
              index={i}
              className={`relative overflow-hidden group ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={img.src}
                alt={locale === 'ar' ? img.altAr : img.altEn}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes={
                  i === 0
                    ? '(max-width: 768px) 100vw, 66vw'
                    : '(max-width: 768px) 50vw, 33vw'
                }
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/5 transition-colors duration-500" />
            </FadeUpInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
