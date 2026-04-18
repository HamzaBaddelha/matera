'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import type { Locale, Dictionary } from '@/types';
import Container from './ui/Container';
import { images } from '@/lib/images';

const navLinks = [
  { key: 'home', href: '' },
  { key: 'menu', href: '/menu' },
  { key: 'branches', href: '/branches' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-creamy/10'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="block">
            <Image
              src={images.logo}
              alt="MATERA"
              width={140}
              height={64}
              className="h-12 w-auto object-contain"
              priority
              loading="eager"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ key, href }) => {
              const fullHref = `/${locale}${href}`;
              const isActive =
                href === ''
                  ? pathname === `/${locale}` || pathname === `/${locale}/`
                  : pathname.startsWith(fullHref);
              return (
                <li key={key}>
                  <Link
                    href={fullHref || `/${locale}`}
                    className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
                      isActive
                        ? 'text-brand-creamy'
                        : 'text-brand-beige/70 hover:text-brand-beige'
                    }`}
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center">
            <a
              href={switchPath}
              className="text-sm text-brand-concrete hover:text-brand-beige transition-colors"
            >
              {locale === 'en' ? 'العربية' : 'English'}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-px bg-brand-beige transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-brand-beige transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-brand-beige transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden grid transition-[grid-template-rows] duration-500 ${
          mobileOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-brand-black/98 backdrop-blur-lg border-t border-brand-creamy/10 px-6 py-8">
            <ul className="flex flex-col gap-6">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href ? `/${locale}${href}` : `/${locale}`}
                    className="text-lg tracking-wider text-brand-beige/80 hover:text-brand-creamy transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-brand-creamy/10">
              <a
                href={switchPath}
                className="text-brand-concrete hover:text-brand-beige transition-colors"
              >
                {locale === 'en' ? 'العربية' : 'English'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
