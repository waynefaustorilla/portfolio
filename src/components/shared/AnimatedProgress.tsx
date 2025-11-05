import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedProgressProps {
  value: number;
  delay?: number;
}

export const AnimatedProgress = ({ value, delay = 0 }: AnimatedProgressProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.5, delay, ease: "easeOut" }}
        className="h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
      />
      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 rounded-full -z-10" />
    </div>
  );
};