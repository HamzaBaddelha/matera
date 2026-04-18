import type { Metadata } from 'next';
import Image from 'next/image';
import type { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { menuCategories } from '@/data/menu';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import MenuNav from '@/components/MenuNav';
import MenuItemCard from '@/components/MenuItemCard';
import BlurText from '@/components/ui/BlurText';
import FadeUpInView from '@/components/ui/FadeUpInView';

import tomatoBg from '../../../../public/images/menu/tomato.png';
import soupBg from '../../../../public/images/menu/soup.png';
import crespyBg from '../../../../public/images/menu/crespy.png';
import pizzaBg from '../../../../public/images/menu/pizza.png';
import saladBg from '../../../../public/images/menu/CAESAR-SALAD.png';
import sandwichesBg from '../../../../public/images/menu/shrim-sandwitch.jpg';
import pastaBg from '../../../../public/images/menu/pasta.png';
import mainCourseBg from '../../../../public/images/menu/hamour.png';
import dessertsBg from '../../../../public/images/menu/dessert.png';
import bakeryBg from '../../../../public/images/menu/bakery.png';
import menuCornerBadge from '../../../../public/images/menu/Untitled design (14).png';

const categoryBackgrounds: Partial<Record<string, string>> = {
  'free-starters': tomatoBg.src,
  soups: soupBg.src,
  'hot-appetizer': crespyBg.src,
  pizza: pizzaBg.src,
  salad: saladBg.src,
  sandwiches: sandwichesBg.src,
  pasta: pastaBg.src,
  'main-course': mainCourseBg.src,
  desserts: dessertsBg.src,
  bakery: bakeryBg.src,
};

const decoratedSectionClass =
  'relative overflow-hidden rounded-2xl bg-no-repeat bg-center bg-cover';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  return {
    title: 'MATERA Menu',
    description: dict.menuSection.pageSubtitle,
    openGraph: {
      title: 'MATERA Menu | MATERA',
      description: dict.menuSection.pageSubtitle,
    },
  };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  const activeCategories = menuCategories.filter((category) => category.items.length > 0);

  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <div className="relative">
            <div className="mb-4 flex justify-center">
              <Image
                src="/images/logo/Matera-Icon.png"
                alt="Matera icon"
                width={90}
                height={90}
                className="h-auto w-20 md:w-24"
              />
            </div>

            <Image
              src={menuCornerBadge}
              alt=""
              aria-hidden
              className="pointer-events-none absolute right-0 top-1/2 h-auto w-40 -translate-y-1/2 md:w-44 lg:w-70"
            />
          </div>

          <SectionHeading
            title="MATERA Menu"
            subtitle={dict.menuSection.pageSubtitle}
          />
        </Container>
      </section>

      <MenuNav categories={activeCategories} locale={currentLocale} />

      <section className="py-12 pb-24">
        <Container>
          {activeCategories.map((category) => {
            const backgroundImage = categoryBackgrounds[category.id];
            const hasDecoration = Boolean(backgroundImage);

            return (
              <section
                key={category.id}
                id={category.id}
                className={`mb-16 last:mb-0 scroll-mt-36 ${
                  hasDecoration ? decoratedSectionClass : ''
                }`}
                style={
                  backgroundImage
                    ? { backgroundImage: `url("${backgroundImage}")` }
                    : undefined
                }
                aria-labelledby={`${category.id}-title`}
              >
                {hasDecoration && (
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl border border-brand-creamy/20 bg-brand-black/45 backdrop-blur-sm"
                    aria-hidden
                  />
                )}
                <div className={`relative z-10 ${hasDecoration ? 'p-6 md:p-8' : ''}`}>
                  <div className="mb-8">
                    <h3
                      id={`${category.id}-title`}
                      className="font-heading text-2xl text-brand-beige md:text-3xl"
                      dir="rtl"
                    >
                      <BlurText text={category.nameAr} delay={0.05} />
                    </h3>

                    <p
                      className="mt-1 text-sm uppercase tracking-wider text-brand-concrete/50"
                      dir="ltr"
                    >
                      <BlurText
                        text={category.nameEn}
                        delay={0.03}
                        direction="none"
                      />
                    </p>

                    <div className="mt-4 h-px w-12 bg-brand-creamy/30" />
                  </div>

                  <div className="space-y-0">
                    {category.items.map((item, index) => (
                      <FadeUpInView key={item.id} index={index}>
                        <MenuItemCard
                          item={item}
                          locale={currentLocale}
                          dict={dict}
                        />
                      </FadeUpInView>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </Container>
      </section>
    </>
  );
}
