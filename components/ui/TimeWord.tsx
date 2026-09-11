"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TimeWord.module.css";

/**
 * The page's one authored moment.
 *
 * Everything above argues that the product is time rather than cleaning;
 * this is the word landing. It resolves out of a wide, blurred state into
 * a set one — the whole page coming into focus on a single noun.
 *
 * The resting state is the visible one, so with JavaScript off, or under
 * prefers-reduced-motion, the word is simply there.
 */
export default function TimeWord({ children }: { children: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayed(true);
          io.disconnect();
        }
      },
      { threshold: 0.65 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <p ref={ref} className={styles.word} data-played={played ? "true" : "false"}>
      {children}
    </p>
  );
}
