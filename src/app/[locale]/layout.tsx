import type { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as Locale} dict={dict} />
    </>
  );
}
