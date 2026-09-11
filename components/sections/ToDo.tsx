import Image from "next/image";
import Button from "../ui/Button";
import Block from "../ui/Block";
import { BOOKING_URL, TODO } from "@/lib/content";
import styles from "./ToDo.module.css";

export default function ToDo() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <Block as="figure" className={styles.figure}>
          <div className={styles.frame}>
            <Image
              src={TODO.image.src}
              alt={TODO.image.alt}
              width={1040}
              height={1080}
              sizes="(max-width: 1023px) 100vw, 520px"
            />
          </div>
        </Block>

        <Block className={styles.copy}>
          <h2 className={`h2 ${styles.heading}`}>
            {TODO.heading[0]}
            <br />
            {TODO.heading[1]}
          </h2>

          <div className={`body ${styles.body}`}>
            {TODO.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <p className={`serif ${styles.pull}`}>{TODO.pullQuote}</p>

          <div className={`body ${styles.after}`}>
            {TODO.after.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className={styles.actions}>
            <Button href={BOOKING_URL}>Book a Wifey</Button>
          </div>
        </Block>
      </div>
    </section>
  );
}
