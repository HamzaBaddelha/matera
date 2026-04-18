'use client';

import { useRef, useMemo } from 'react';
import { motion, useInView } from 'motion/react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom' | 'none';
}

export default function BlurText({
  text,
  className = '',
  delay = 0.04,
  animateBy = 'words',
  direction = 'bottom',
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const segments = useMemo(() => {
    if (animateBy === 'letters') {
      return text.split('').map((char, i) => ({
        key: `${char}-${i}`,
        content: char === ' ' ? '\u00A0' : char,
      }));
    }
    return text.split(' ').map((word, i) => ({
      key: `${word}-${i}`,
      content: word,
    }));
  }, [text, animateBy]);

  const y = direction === 'top' ? -8 : direction === 'bottom' ? 8 : 0;

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {segments.map((segment, i) => (
        <motion.span
          key={segment.key}
          initial={{ filter: 'blur(8px)', opacity: 0, y }}
          animate={
            inView
              ? { filter: 'blur(0px)', opacity: 1, y: 0 }
              : { filter: 'blur(8px)', opacity: 0, y }
          }
          transition={{
            duration: 0.4,
            delay: i * delay,
            ease: 'easeOut',
          }}
          className="inline-block"
        >
          {segment.content}
          {animateBy === 'words' && i < segments.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  );
}
