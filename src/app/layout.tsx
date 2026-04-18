import type { Metadata } from 'next';
import { inter, playfair, cairo, amiri, reckless } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'MATIRA', template: '%s | MATIRA' },
  description:
    'A luxury dining experience across two distinguished locations',
  icons: {
    icon: '/images/logo/Matera-Icon.png',
    shortcut: '/images/logo/Matera-Icon.png',
    apple: '/images/logo/Matera-Icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} ${cairo.variable} ${amiri.variable} ${reckless.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=location.pathname.split('/');var l=s[1]==='ar'?'ar':'en';var d=document.documentElement;d.lang=l;d.dir=l==='ar'?'rtl':'ltr'})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-black text-brand-beige antialiased">
        {children}
      </body>
    </html>
  );
}
