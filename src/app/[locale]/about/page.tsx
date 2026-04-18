import type { Metadata } from 'next';
import Image from 'next/image';
import type { Locale } from '@/types';
import { images } from '@/lib/images';
import { getDictionary } from '@/lib/i18n';
import Container from '@/components/ui/Container';
import BlurText from '@/components/ui/BlurText';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.about.pageTitle,
    description: dict.about.pageSubtitle,
    openGraph: {
      title: `${dict.about.pageTitle} | MATIRA`,
      description: dict.about.pageSubtitle,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src={images.aboutBanner}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <Container className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-beige tracking-wide">
            <BlurText text={dict.about.pageTitle} delay={0.06} />
          </h1>
          <p className="mt-4 text-lg text-brand-concrete max-w-xl mx-auto">
            <BlurText text={dict.about.pageSubtitle} delay={0.03} direction="none" />
          </p>
        </Container>
      </section>

      {/* Story Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src={images.materaStory}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/40 to-brand-black" />
        <Container className="relative z-10">
          <div className="flex items-center justify-center">
            <div className="max-w-2xl w-full rounded-2xl border border-brand-creamy/20 bg-brand-black/30 backdrop-blur-xl shadow-2xl p-10 md:p-14">
              <p className="text-brand-creamy text-sm tracking-[0.3em] uppercase mb-4">
                <BlurText text={dict.about.storyTitle} delay={0.06} direction="none" />
              </p>
              <div className="h-px w-16 bg-brand-creamy/30 mb-8" />
              <p className="text-brand-beige/90 leading-relaxed text-lg mb-6">
                {dict.about.storyText}
              </p>
              <p className="text-brand-beige/90 leading-relaxed text-lg">
                {dict.about.storyText2}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-brand-coffee/5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-beige tracking-wide">
              <BlurText text={dict.about.valuesTitle} delay={0.06} />
            </h2>
            <div className="mt-6 h-px w-16 bg-brand-creamy/30 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: dict.about.value1Title, text: dict.about.value1Text },
              { title: dict.about.value2Title, text: dict.about.value2Text },
              { title: dict.about.value3Title, text: dict.about.value3Text },
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-8 border border-brand-creamy/10"
              >
                <h3 className="font-heading text-xl text-brand-creamy mb-4">
                  <BlurText text={value.title} delay={0.05} direction="none" />
                </h3>
                <p className="text-brand-concrete/80 leading-relaxed text-sm">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Chef Section */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1">
              <Image
                src={images.chef}
                alt="Chef at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-brand-creamy text-sm tracking-[0.3em] uppercase mb-4">
                <BlurText text={dict.about.chefTitle} delay={0.06} direction="none" />
              </p>
              <div className="h-px w-16 bg-brand-creamy/30 mb-8" />
              <p className="text-brand-concrete leading-relaxed text-lg">
                {dict.about.chefText}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
