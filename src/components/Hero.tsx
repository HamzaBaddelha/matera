import Image from 'next/image';
import { images } from '@/lib/images';
import type { Locale, Dictionary } from '@/types';
import Container from './ui/Container';
import Button from './ui/Button';
import BlurText from './ui/BlurText';

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={images.hero}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black" />

      <Container className="relative z-10 text-center py-32">
        <p className="text-brand-creamy/80 text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in">
          {dict.brand}
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-beige tracking-wide leading-tight text-balance max-w-4xl mx-auto">
          <BlurText text={dict.hero.title} delay={0.06} />
        </h1>
        <p className="mt-6 text-lg md:text-xl text-brand-concrete max-w-2xl mx-auto leading-relaxed">
          <BlurText text={dict.hero.subtitle} delay={0.02} direction="none" />
        </p>
        <div className="mt-10 animate-fade-in-up [animation-delay:600ms] opacity-0">
          <Button href={`/${locale}/menu`} variant="outline" size="lg">
            {dict.hero.menuCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
