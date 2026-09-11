import Image from "next/image";
import Button from "../ui/Button";
import { BOOKING_URL, ENQUIRY_ANCHOR, HERO } from "@/lib/content";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 className={`h1 ${styles.headline}`}>
            {HERO.headline[0]}
            <br />
            {HERO.headline[1]}
            <span className={styles.brandLine}>{HERO.brandLine}</span>
          </h1>

          <span className={styles.tagline}>{HERO.tagline}</span>

          <h2 className={styles.seoHeading}>{HERO.seoHeading}</h2>

          <p className={styles.kicker}>{HERO.kicker}</p>

          <div className={`body ${styles.body}`}>
            {HERO.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className={styles.actions}>
            <Button href={BOOKING_URL}>Book a Wifey</Button>
            <Button href={ENQUIRY_ANCHOR} variant="secondary">
              Make an Enquiry
            </Button>
          </div>
        </div>

        <figure className={styles.figure}>
          <div className={styles.frame}>
            <Image
              src={HERO.image.src}
              alt={HERO.image.alt}
              width={1200}
              height={1230}
              sizes="(max-width: 1023px) 100vw, 610px"
              priority
              fetchPriority="high"
            />
            <figcaption className={styles.plate}>
              <span className={styles.plateDot} aria-hidden="true" />
              Hervey Bay, QLD
              <span className={styles.plateNote}>Fully insured · Police checked</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
