'use client';

import { useState } from 'react';
import type { Dictionary } from '@/types';
import Button from './ui/Button';

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-brand-beige text-lg font-heading">
          {dict.contact.success}
        </p>
      </div>
    );
  }

  const inputClasses =
    'w-full bg-brand-black/50 border border-brand-creamy/15 text-brand-beige px-4 py-3.5 text-sm focus:border-brand-creamy/40 focus:outline-none transition-colors placeholder:text-brand-concrete/30';
  const labelClasses =
    'text-xs text-brand-concrete/70 tracking-wider uppercase mb-2 block';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>{dict.contact.name}</label>
          <input type="text" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>{dict.contact.phone}</label>
          <input
            type="tel"
            required
            inputMode="tel"
            placeholder="+966"
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label className={labelClasses}>{dict.contact.subject}</label>
        <input type="text" className={inputClasses} />
      </div>
      <div>
        <label className={labelClasses}>{dict.contact.message}</label>
        <textarea rows={6} required className={`${inputClasses} resize-none`} />
      </div>
      <Button type="submit" size="lg">
        {dict.contact.send}
      </Button>
    </form>
  );
}
