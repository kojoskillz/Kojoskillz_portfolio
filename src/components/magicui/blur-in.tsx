"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display text-white text-left text-[18px] lg:text-[30px]  font-semi-bold  tracking-[-0.02em] drop-shadow-sm md:text-[22px] md:text-left md:leading-[.3rem] lg:leading-[2rem] xl:leading-[2rem]",
        className,
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
