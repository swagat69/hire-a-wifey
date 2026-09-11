"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { BOOKING_URL, CONTACT, ENQUIRY_ANCHOR, NAV } from "@/lib/content";
import styles from "./Header.module.css";

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile menu, and close it on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={styles.header} data-stuck={stuck ? "true" : "false"}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Hire a Wifey — home">
          <Image
            src="/brand/logo.png"
            alt="Hire a Wifey — We Take Care of Home"
            width={652}
            height={397}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button href={BOOKING_URL} size="compact" className={styles.cta}>
          Book a Wifey
        </Button>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open && (
        <div className={styles.menu} id="mobile-menu">
          <ul className={styles.menuList}>
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.menuLink}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.menuActions}>
            <Button href={BOOKING_URL} full>
              Book a Wifey
            </Button>
            <Button href={ENQUIRY_ANCHOR} variant="secondary" full>
              Make an Enquiry
            </Button>
          </div>

          <div className={styles.menuContact}>
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <br />
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          </div>
        </div>
      )}
    </header>
  );
}
