import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedLetterProps {
  text: string;
  className?: string;
}

export default function AnimatedLetter({ text, className = "" }: AnimatedLetterProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={`${className}`} style={{ lineHeight: 1.6 }}>
      {chars.map((char, i) => {
        const charProgress = i / chars.length;
        const opacity = useTransform(
          scrollYProgress,
          [charProgress - 0.1, charProgress + 0.05],
          [0.2, 1]
        );
        return (
          <motion.span key={i} style={{ opacity }}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </p>
  );
}
