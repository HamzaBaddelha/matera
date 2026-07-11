import type { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocaleDirectionSync from '@/components/LocaleDirectionSync';

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
  const currentLocale = locale as Locale;

  return (
    <div
      lang={currentLocale}
      dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
      className={currentLocale === 'ar' ? 'text-right' : 'text-left'}
    >
      <LocaleDirectionSync locale={currentLocale} />
      <Header locale={currentLocale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={currentLocale} dict={dict} />
    </div>
  );
}
