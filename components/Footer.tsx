import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { Check } from "./ui/Icons";
import { BOOKING_URL, CONTACT, FOOTER } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <Link href="/" className={styles.logo} aria-label="Hire a Wifey — home">
              <Image
                src="/brand/logo-on-dark.png"
                alt="Hire a Wifey"
                width={652}
                height={397}
              />
            </Link>
            <p className={styles.brandName}>Hire a Wifey Hervey Bay</p>
            <p className={styles.blurb}>{FOOTER.blurb}</p>
            <p className={styles.tagline}>We Take Care of Home.</p>
          </div>

          <div>
            <h2 className={styles.colTitle}>Services</h2>
            <ul className={styles.list}>
              {FOOTER.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.colTitle}>Contact</h2>
            <a href={CONTACT.phoneHref} className={styles.contactLink}>
              {CONTACT.phone}
            </a>
            <br />
            <a href={CONTACT.emailHref} className={styles.contactLink}>
              {CONTACT.email}
            </a>
            <p className={styles.abn}>ABN {CONTACT.abn}</p>
            <p className={styles.abn}>{CONTACT.region}</p>
            <div className={styles.cta}>
              <Button href={BOOKING_URL} variant="onDark" size="compact">
                Book Now
              </Button>
            </div>
          </div>
        </div>

        <ul className={styles.trust}>
          {FOOTER.trustLine.map((item) => (
            <li key={item} className={styles.trustItem}>
              <Check className={styles.trustTick} />
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.legal}>
          <p>
            &copy; {new Date().getFullYear()} Hire a Wifey. All rights reserved.
          </p>
          <nav className={styles.legalLinks} aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
