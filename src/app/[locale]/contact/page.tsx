import type { Metadata } from 'next';
import type { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { branches } from '@/data/branches';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.contact.title,
    description: dict.contact.subtitle,
    openGraph: {
      title: `${dict.contact.title} | MATIRA`,
      description: dict.contact.subtitle,
    },
  };
}

export default async function ContactPage({
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
          title={dict.contact.title}
          subtitle={dict.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <ContactForm dict={dict} />
          </div>

          <div className="space-y-10">
            {branches.map((branch) => {
              const name = locale === 'ar' ? branch.nameAr : branch.nameEn;
              const address =
                locale === 'ar' ? branch.addressAr : branch.addressEn;
              const hours =
                locale === 'ar' ? branch.hoursAr : branch.hoursEn;

              return (
                <div
                  key={branch.id}
                  className="p-6 border border-brand-creamy/10 bg-brand-coffee/5"
                >
                  <h3 className="font-heading text-xl text-brand-beige mb-4">
                    {name}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-creamy/60 text-xs tracking-wider uppercase">
                        {dict.contact.addressLabel}
                      </span>
                      <p className="mt-1 text-brand-beige/90">{address}</p>
                    </div>
                    <div>
                      <span className="text-brand-creamy/60 text-xs tracking-wider uppercase">
                        {dict.contact.phone}
                      </span>
                      <p className="mt-1 text-brand-beige/90" dir="ltr">
                        {branch.phone}
                      </p>
                    </div>
                    <div>
                      <span className="text-brand-creamy/60 text-xs tracking-wider uppercase">
                        {dict.contact.emailLabel}
                      </span>
                      <p className="mt-1 text-brand-beige/90">{branch.email}</p>
                    </div>
                    <div>
                      <span className="text-brand-creamy/60 text-xs tracking-wider uppercase">
                        {dict.contact.hoursLabel}
                      </span>
                      <p className="mt-1 text-brand-beige/90">{hours}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div>
              <h4 className="text-brand-creamy text-xs tracking-[0.2em] uppercase mb-4">
                {dict.contact.followUs}
              </h4>
              <div className="flex gap-4">
                {['Instagram', 'X', 'Facebook'].map((name) => (
                  <a
                    key={name}
                    href="#"
                    aria-label={name}
                    className="text-brand-concrete/50 hover:text-brand-creamy text-sm transition-colors"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
