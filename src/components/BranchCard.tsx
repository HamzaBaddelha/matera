import Image from 'next/image';
import type { Locale, Branch, Dictionary } from '@/types';

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

  const qrPanel = (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-black via-brand-coffee/95 to-brand-black px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(193,162,131,0.18),_transparent_55%)]" />
      <div className="relative flex justify-center">
        <div className="w-full max-w-[210px] sm:max-w-[240px] md:max-w-[280px]">
          <div className="rounded-[1.4rem] border border-brand-creamy/15 bg-brand-black/65 p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:rounded-[1.55rem] sm:p-3 md:rounded-[1.75rem]">
            <div className="relative aspect-square overflow-hidden rounded-[1.05rem] border border-brand-creamy/30 bg-brand-beige shadow-[0_0_0_1px_rgba(193,162,131,0.12)] sm:rounded-[1.2rem] md:rounded-2xl">
              <Image
                src={branch.qrImage}
                alt={`${name} location QR code`}
                fill
                sizes="(max-width: 640px) 210px, (max-width: 768px) 240px, 280px"
                className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.04] md:group-hover:scale-[1.06]"
              />
            </div>
          </div>
        </div>
      </div>
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
          {qrPanel}
        </a>
      ) : (
        qrPanel
      )}
      <div className="p-5 sm:p-6 md:p-8">
        <h3 className="font-heading text-xl text-brand-beige sm:text-2xl">{name}</h3>
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
      </div>
    </div>
  );
}
