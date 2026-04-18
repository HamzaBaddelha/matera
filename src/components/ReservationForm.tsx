'use client';

import { useState } from 'react';
import type { Locale, Branch, Dictionary } from '@/types';
import Button from './ui/Button';

export default function ReservationForm({
  locale,
  dict,
  branches,
}: {
  locale: Locale;
  dict: Dictionary;
  branches: Branch[];
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 border-2 border-brand-creamy/30 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-brand-creamy"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-brand-beige text-lg font-heading">
          {dict.reservation.success}
        </p>
      </div>
    );
  }

  const inputClasses =
    'w-full bg-brand-black/50 border border-brand-creamy/15 text-brand-beige px-4 py-3.5 text-sm focus:border-brand-creamy/40 focus:outline-none transition-colors placeholder:text-brand-concrete/30 appearance-none';
  const labelClasses =
    'text-xs text-brand-concrete/70 tracking-wider uppercase mb-2 block';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>{dict.reservation.name} *</label>
          <input type="text" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>{dict.reservation.phone} *</label>
          <input type="tel" required className={inputClasses} dir="ltr" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>{dict.reservation.email}</label>
          <input type="email" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>{dict.reservation.branch} *</label>
          <select required className={inputClasses}>
            <option value="">{dict.reservation.selectBranch}</option>
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {locale === 'ar' ? b.nameAr : b.nameEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label className={labelClasses}>{dict.reservation.date} *</label>
          <input type="date" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>{dict.reservation.time} *</label>
          <input type="time" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>{dict.reservation.guests} *</label>
          <select required className={inputClasses}>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClasses}>{dict.reservation.specialRequest}</label>
        <textarea
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder={dict.reservation.specialRequestPlaceholder}
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {dict.reservation.submit}
      </Button>
    </form>
  );
}
