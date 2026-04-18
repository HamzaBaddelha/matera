'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Locale, Branch, Dictionary } from '@/types';
import Container from './ui/Container';
import Button from './ui/Button';

export default function ReservationBand({
  locale,
  dict,
  branches,
}: {
  locale: Locale;
  dict: Dictionary;
  branches: Branch[];
}) {
  const router = useRouter();
  const [branch, setBranch] = useState('');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const inputClasses =
    'w-full bg-brand-black/50 border border-brand-creamy/20 text-brand-beige px-4 py-3 text-sm focus:border-brand-creamy/50 focus:outline-none transition-colors appearance-none';
  const labelClasses =
    'text-xs text-brand-concrete/70 tracking-wider uppercase mb-2 block';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (branch) params.set('branch', branch);
    if (guests) params.set('guests', guests);
    if (date) params.set('date', date);
    if (time) params.set('time', time);
    router.push(`/${locale}/reservation?${params.toString()}`);
  };

  return (
    <section className="py-20 md:py-24 bg-brand-coffee/10 border-y border-brand-creamy/10">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-beige">
            {dict.reservation.bandTitle}
          </h2>
          <p className="mt-3 text-brand-concrete">
            {dict.reservation.bandSubtitle}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
        >
          <div>
            <label className={labelClasses}>{dict.reservation.branch}</label>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className={inputClasses}
            >
              <option value="">{dict.reservation.selectBranch}</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {locale === 'ar' ? b.nameAr : b.nameEn}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClasses}>{dict.reservation.guests}</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={inputClasses}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClasses}>{dict.reservation.date}</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>{dict.reservation.time}</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={inputClasses}
            />
          </div>
          <Button type="submit" className="w-full">
            {dict.nav.reserve}
          </Button>
        </form>
      </Container>
    </section>
  );
}
