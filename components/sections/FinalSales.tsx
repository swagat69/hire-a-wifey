import Button from "../ui/Button";
import Block from "../ui/Block";
import TimeWord from "../ui/TimeWord";
import { BOOKING_URL, ENQUIRY_ANCHOR, FINAL } from "@/lib/content";
import styles from "./FinalSales.module.css";

export default function FinalSales() {
  return (
    <section className="section section--lg section--dark">
      <div className="container">
        <Block className={styles.inner}>
          <p className={`serif ${styles.opener}`}>{FINAL.opener}</p>

          <div className={styles.lines}>
            {FINAL.lines.map((line) => (
              <p key={line} className={styles.line}>
                {line}
              </p>
            ))}
          </div>

          <p className={styles.turn}>{FINAL.turn}</p>
          <p className={styles.punch}>{FINAL.punch}</p>

          <p className={styles.statement}>
            <span>{FINAL.statement[0]}</span>
            <span>{FINAL.statement[1]}</span>
          </p>

          <TimeWord>{FINAL.word}</TimeWord>

          <p className={styles.body}>{FINAL.body}</p>
          <p className={styles.signoff}>{FINAL.signoff}</p>

          <div className={styles.actions}>
            <Button href={BOOKING_URL} variant="onDark" size="large">
              Book a Wifey Now
            </Button>
            <Button href={ENQUIRY_ANCHOR} variant="ghostDark" size="large">
              Have a Question?
            </Button>
          </div>
        </Block>
      </div>
    </section>
  );
}
