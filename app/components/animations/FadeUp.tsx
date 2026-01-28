'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export default function FadeUp({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = "" 
}: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" }); // Muncul saat 10% masuk layar

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0, 1], 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}