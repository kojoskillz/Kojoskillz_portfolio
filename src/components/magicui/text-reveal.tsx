"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split("");

  return (
    <div ref={targetRef} className={cn("relative m-0 p-0 bg-black  z-0 h-[120vh] ", className)}>
      <div
        className={
          "sticky top-0 mt-[2rem] mx-auto flex h-[50%] max-w-5xl font-sans items-center bg-transparent text-wrap px-[.5rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap md:-tracking-tight-[5rem] lg:-tracking-tight-[2rem] xl:-tracking-tight-[2rem] px-1 w-full text-xl font-normal text-white dark:text-white md:p-8 md:text-2xl lg:p-10 lg:text-3xl xl:text-3xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}


const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-[2px] lg:mx-2.5">
      <span className={"absolute opacity-15"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-white dark:text-black h-52"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;



