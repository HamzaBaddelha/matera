import Image from 'next/image';
import { images } from '@/lib/images';
import type { Locale, Dictionary } from '@/types';
import Container from './ui/Container';
import Button from './ui/Button';
import BlurText from './ui/BlurText';

export default function AboutPreview({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
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
          <div className="max-w-2xl w-full rounded-2xl border border-brand-creamy/20 bg-brand-black/30 backdrop-blur-xl shadow-2xl p-10 md:p-14 text-center">
            <p className="text-brand-creamy text-sm tracking-[0.3em] uppercase mb-4">
              <BlurText text={dict.about.previewTitle} delay={0.06} direction="none" />
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-beige leading-tight">
              <BlurText text={dict.about.previewSubtitle} delay={0.05} />
            </h2>
            <div className="mt-6 h-px w-16 bg-brand-creamy/30 mx-auto" />
            <p className="mt-8 text-brand-beige/90 leading-relaxed text-lg">
              {dict.about.previewText}
            </p>
            <div className="mt-10">
              <Button href={`/${locale}/about`} variant="outline">
                {dict.about.cta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
