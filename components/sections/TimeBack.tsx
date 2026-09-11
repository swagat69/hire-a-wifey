import Image from "next/image";
import Button from "../ui/Button";
import Block from "../ui/Block";
import { BOOKING_URL, TIME_BACK } from "@/lib/content";
import styles from "./TimeBack.module.css";

export default function TimeBack() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image
          src={TIME_BACK.image.src}
          alt={TIME_BACK.image.alt}
          width={1920}
          height={1200}
          sizes="100vw"
        />
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <div className="container">
        <Block className={styles.inner}>
          <h2 className={`h2 ${styles.heading}`}>
            {TIME_BACK.heading[0]}
            <br />
            {TIME_BACK.heading[1]}
          </h2>

          <ul className={styles.list}>
            {TIME_BACK.items.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>

          <p className={`serif ${styles.closer}`}>{TIME_BACK.closer}</p>
          <p className={styles.note}>{TIME_BACK.note}</p>

          <Button href={BOOKING_URL} variant="onDark" size="large">
            Get My Time Back
          </Button>
        </Block>
      </div>
    </section>
  );
}
