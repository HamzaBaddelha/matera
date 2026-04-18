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
  const isAr = locale === 'ar';
  const name = isAr ? branch.nameAr : branch.nameEn;
  const description = isAr ? branch.descriptionAr : branch.descriptionEn;
  const address = isAr ? branch.addressAr : branch.addressEn;
  const hours = isAr ? branch.hoursAr : branch.hoursEn;
  const hasMap = branch.mapUrl && branch.mapUrl !== '#';

  const image = (
    <div className="relative aspect-[16/9] overflow-hidden">
      <Image
        src={branch.image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
    </div>
  );

  return (
    <div className="group overflow-hidden border border-brand-creamy/10 bg-brand-coffee/5">
      {hasMap ? (
        <a
          href={branch.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label={`Open ${name} on map`}
        >
          {image}
        </a>
      ) : (
        image
      )}

      <div className="p-6 md:p-8">
        <h3 className="font-heading text-2xl text-brand-beige">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-concrete/80">
          {description}
        </p>

        <div className="mt-6 space-y-3 text-sm">
          <div>
            <span className="text-xs uppercase tracking-wider text-brand-creamy/60">
              {dict.branches.address}
            </span>
            <p className="mt-1 text-brand-beige/90">{address}</p>
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-brand-creamy/60">
              {dict.branches.hours}
            </span>
            <p className="mt-1 text-brand-beige/90">{hours}</p>
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-brand-creamy/60">
              {dict.contact.phone}
            </span>
            <p className="mt-1 text-brand-beige/90" dir="ltr">
              {branch.phone}
            </p>
          </div>
        </div>

        {hasMap && (
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