import type { Locale, Testimonial } from '@/types';

export default function TestimonialCard({
  testimonial,
  locale,
}: {
  testimonial: Testimonial;
  locale: Locale;
}) {
  const name = locale === 'ar' ? testimonial.nameAr : testimonial.nameEn;
  const text = locale === 'ar' ? testimonial.textAr : testimonial.textEn;
  const role = locale === 'ar' ? testimonial.roleAr : testimonial.roleEn;

  return (
    <div className="p-6 md:p-8 rounded-2xl border border-brand-creamy/20 bg-brand-black/30 backdrop-blur-xl shadow-2xl">
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? 'text-brand-creamy'
                : 'text-brand-concrete/20'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-brand-beige/90 leading-relaxed italic font-heading text-lg">
        &ldquo;{text}&rdquo;
      </blockquote>
      <div className="mt-6 pt-4 border-t border-brand-creamy/10">
        <p className="text-brand-creamy font-body text-sm tracking-wider">
          {name}
        </p>
        {role && (
          <p className="text-brand-concrete/60 text-xs mt-1">{role}</p>
        )}
      </div>
    </div>
  );
}
