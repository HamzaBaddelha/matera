import localFont from 'next/font/local';
import { Inter, Playfair_Display, Cairo, Amiri } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
});

export const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-amiri',
});

export const reckless = localFont({
  src: '../../public/asset/reckless-font-family/RecklessStandardM-TRIAL-Regular.otf',
  display: 'swap',
  variable: '--font-reckless',
});
