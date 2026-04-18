'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';

export default function FadeUpInView({
  children,
  className,
  index = 0,
  delay = 0,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  delay?: number;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: delay + index * stagger,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
