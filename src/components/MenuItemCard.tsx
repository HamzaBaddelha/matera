import type { Locale, MenuItem, Dictionary } from '@/types';

export default function MenuItemCard({
  item,
  locale,
  dict,
}: {
  item: MenuItem;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-5 border-b border-brand-creamy/10 group">
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-lg text-brand-beige group-hover:text-brand-creamy transition-colors" dir="rtl">
          {item.nameAr}
        </h3>
        <p className="mt-1 text-sm text-brand-concrete/60 tracking-wide" dir="ltr">
          {item.nameEn}
        </p>
        {item.descriptionAr && locale === 'ar' && (
          <p className="mt-1.5 text-sm text-brand-concrete/50">{item.descriptionAr}</p>
        )}
        {item.descriptionEn && locale === 'en' && (
          <p className="mt-1.5 text-sm text-brand-concrete/50">{item.descriptionEn}</p>
        )}
        {item.calories != null && (
          <span className="text-xs text-brand-concrete/40 mt-1 inline-block">
            {item.calories} {dict.menuSection.cal}
          </span>
        )}
      </div>
      {item.price != null ? (
        <span className="text-brand-creamy font-body text-sm tracking-wider whitespace-nowrap pt-1">
          {item.price} {dict.common.sar}
        </span>
      ) : (
        <span className="text-brand-creamy/50 font-body text-xs tracking-wider pt-1">
          {dict.common.free}
        </span>
      )}
    </div>
  );
}
