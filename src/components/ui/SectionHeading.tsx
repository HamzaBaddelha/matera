import BlurText from './BlurText';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'start';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wide text-brand-beige">
        <BlurText text={title} delay={0.05} />
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-brand-concrete">
          <BlurText text={subtitle} delay={0.02} direction="none" />
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-brand-creamy/30 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
