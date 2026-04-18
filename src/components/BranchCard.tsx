import Image from 'next/image';
import type { Locale, Branch, Dictionary } from '@/types';
import Button from './ui/Button';

export default function BranchCard({
  branch,
  locale,
  dict,
}: {
  branch: Branch;
  locale: Locale;
  dict: Dictionary;
}) {
  const name = locale === 'ar' ? branch.nameAr : branch.nameEn;
  const description =
    locale === 'ar' ? branch.descriptionAr : branch.descriptionEn;
  const address = locale === 'ar' ? branch.addressAr : branch.addressEn;
  const hours = locale === 'ar' ? branch.hoursAr : branch.hoursEn;

  return (
    <div className="group bg-brand-coffee/5 border border-brand-creamy/10 overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={branch.image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-heading text-2xl text-brand-beige">{name}</h3>
        <p className="mt-2 text-brand-concrete/80 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-6 space-y-3 text-sm">
          <div>
            <span className="text-brand-creamy/60 text-xs tracking-wider uppercase">
              {dict.branches.address}
            </span>
            <p className="mt-1 text-brand-beige/90">{address}</p>
          </div>
          <div>
            <span className="text-brand-creamy/60 text-xs tracking-wider uppercase">
              {dict.branches.hours}
            </span>
            <p className="mt-1 text-brand-beige/90">{hours}</p>
          </div>
          <div>
            <span className="text-brand-creamy/60 text-xs tracking-wider uppercase">
              {dict.contact.phone}
            </span>
            <p className="mt-1 text-brand-beige/90" dir="ltr">
              {branch.phone}
            </p>
          </div>
        </div>

        {branch.mapUrl !== '#' && (
          <div className="mt-8">
            <Button href={branch.mapUrl} variant="outline" size="sm">
              {dict.branches.viewMap}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
