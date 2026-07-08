import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Segment {
  text: string;
  className: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export default function WordsPullUpMultiStyle({ segments, className = "" }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const allWords: { word: string; className: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").filter(Boolean).forEach((w) => {
      allWords.push({ word: w, className: seg.className });
    });
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {allWords.map((item, i) => (
        <motion.span
          key={i}
          className={`inline-block ${item.className}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {item.word}
          {i < allWords.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
}
