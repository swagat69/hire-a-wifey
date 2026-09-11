"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/content";
import styles from "./StickyMobileCTA.module.css";

/**
 * Appears only once the visitor is past the hero (where the same CTA is
 * already on screen), and gets out of the way over the enquiry form and
 * the footer so it never covers a field or the phone number (§36).
 */
export default function StickyMobileCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = [
      document.getElementById("enquiry"),
      document.querySelector("footer"),
    ].filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const seen = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) seen.add(entry.target);
          else seen.delete(entry.target);
        }
        setBlocked(seen.size > 0);
      },
      { rootMargin: "0px 0px -35% 0px" },
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <Link
      href={BOOKING_URL}
      className={styles.bar}
      data-visible={pastHero && !blocked ? "true" : "false"}
      aria-hidden={pastHero && !blocked ? undefined : "true"}
      tabIndex={pastHero && !blocked ? undefined : -1}
    >
      Book a Wifey
    </Link>
  );
}
