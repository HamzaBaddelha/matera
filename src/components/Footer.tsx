import Link from 'next/link';
import Image from 'next/image';
import type { Locale, Dictionary } from '@/types';
import { branches } from '@/data/branches';
import Container from './ui/Container';
import { images } from '@/lib/images';

const navLinks = [
  { key: 'home', href: '' },
  { key: 'menu', href: '/menu' },
  { key: 'branches', href: '/branches' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();
  const branch = branches[0];

  return (
    <footer className="bg-brand-black border-t border-brand-creamy/10">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href={`/${locale}`} className="block">
              <Image
                src={images.logo}
                alt="MATERA"
                width={160}
                height={72}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-brand-concrete/70 text-sm leading-relaxed">
              {dict.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-brand-creamy text-xs tracking-[0.2em] uppercase mb-6">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href ? `/${locale}${href}` : `/${locale}`}
                    className="text-brand-concrete/70 hover:text-brand-beige text-sm transition-colors"
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-creamy text-xs tracking-[0.2em] uppercase mb-6">
              {dict.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-sm text-brand-concrete/70">
              <p dir="ltr">{branch.phone}</p>
              <p>{branch.email}</p>
              <p>{locale === 'ar' ? branch.addressAr : branch.addressEn}</p>
            </div>
          </div>

          <div>
            <h4 className="text-brand-creamy text-xs tracking-[0.2em] uppercase mb-6">
              {dict.footer.followUs}
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
      </Container>

      <div className="border-t border-brand-creamy/5">
        <Container className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-concrete/40">
          <p>
            &copy; {year} MATERA. {dict.footer.rights}.
          </p>
          <a
            href={`/${locale === 'en' ? 'ar' : 'en'}`}
            className="hover:text-brand-beige transition-colors"
          >
            {locale === 'en' ? 'العربية' : 'English'}
          </a>
        </Container>
      </div>
    </footer>
  );
}
