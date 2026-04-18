import type { Metadata } from 'next';
import type { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import Hero from '@/components/Hero';
import MenuPreview from '@/components/MenuPreview';
import AboutPreview from '@/components/AboutPreview';
import BranchCard from '@/components/BranchCard';
import GalleryGrid from '@/components/GalleryGrid';
import TestimonialCard from '@/components/TestimonialCard';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeUpInView from '@/components/ui/FadeUpInView';
import { menuCategories } from '@/data/menu';
import { branches } from '@/data/branches';
import { testimonials } from '@/data/testimonials';
import { galleryImages } from '@/data/gallery';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.brand} — ${dict.hero.title}`,
    description: dict.hero.subtitle,
    openGraph: {
      title: `${dict.brand} — ${dict.hero.title}`,
      description: dict.hero.subtitle,
      type: 'website',
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'MATIRA',
    description: dict.hero.subtitle,
    servesCuisine: 'International',
    priceRange: '$$$$',
    address: branches.map((b) => ({
      '@type': 'PostalAddress',
      streetAddress: locale === 'ar' ? b.addressAr : b.addressEn,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero locale={locale as Locale} dict={dict} />

      <MenuPreview
        locale={locale as Locale}
        dict={dict}
        categories={menuCategories}
      />

      <AboutPreview locale={locale as Locale} dict={dict} />

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            title={dict.branches.title}
            subtitle={dict.branches.subtitle}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {branches.map((branch, index) => (
              <FadeUpInView key={branch.id} index={index}>
                <BranchCard
                  branch={branch}
                  locale={locale as Locale}
                  dict={dict}
                />
              </FadeUpInView>
            ))}
          </div>
        </Container>
      </section>

      <GalleryGrid
        locale={locale as Locale}
        dict={dict}
        images={galleryImages}
      />

      <section className="py-24 md:py-32 bg-brand-coffee/5">
        <Container>
          <SectionHeading
            title={dict.testimonials.title}
            subtitle={dict.testimonials.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <FadeUpInView key={t.id} index={index}>
                <TestimonialCard
                  testimonial={t}
                  locale={locale as Locale}
                />
              </FadeUpInView>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
