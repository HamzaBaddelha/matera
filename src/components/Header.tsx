'use client';

import { useEffect, useState } from 'react';
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
] as const;

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const switchPath = pathname?.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`;

  const getHref = (href: string) => (href ? `/${locale}${href}` : `/${locale}`);
  const isActive = (href: string) =>
    href === ''
      ? pathname === `/${locale}` || pathname === `/${locale}/`
      : pathname.startsWith(`/${locale}${href}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'border-b border-brand-creamy/10 bg-brand-black/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link href={`/${locale}`} className="block">
            <Image
              src={images.logo}
              alt="MATERA"
              width={140}
              height={64}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={getHref(href)}
                  className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
                    isActive(href)
                      ? 'text-brand-creamy'
                      : 'text-brand-beige/70 hover:text-brand-beige'
                  }`}
                >
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center lg:flex">
            <Link
              href={switchPath}
              className="text-sm text-brand-concrete transition-colors hover:text-brand-beige"
            >
              {locale === 'en' ? 'العربية' : 'English'}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-px w-6 bg-brand-beige transition-all duration-300 ${
                mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-brand-beige transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-brand-beige transition-all duration-300 ${
                mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </Container>

      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-500 lg:hidden ${
          mobileOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-brand-creamy/10 bg-brand-black/98 px-6 py-8 backdrop-blur-lg">
            <ul className="flex flex-col gap-6">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={getHref(href)}
                    className="text-lg tracking-wider text-brand-beige/80 transition-colors hover:text-brand-creamy"
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-brand-creamy/10 pt-6">
              <Link
                href={switchPath}
                className="text-brand-concrete transition-colors hover:text-brand-beige"
              >
                {locale === 'en' ? 'العربية' : 'English'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
