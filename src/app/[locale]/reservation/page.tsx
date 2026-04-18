import type { Metadata } from 'next';
import type { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { branches } from '@/data/branches';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ReservationForm from '@/components/ReservationForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.reservation.title,
    description: dict.reservation.subtitle,
    openGraph: {
      title: `${dict.reservation.title} | MATIRA`,
      description: dict.reservation.subtitle,
    },
  };
}

export default async function ReservationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <section className="pt-32 pb-24 md:pb-32">
      <Container>
        <SectionHeading
          title={dict.reservation.title}
          subtitle={dict.reservation.subtitle}
        />
        <div className="max-w-2xl mx-auto">
          <ReservationForm
            locale={locale as Locale}
            dict={dict}
            branches={branches}
          />
        </div>
      </Container>
    </section>
  );
}
