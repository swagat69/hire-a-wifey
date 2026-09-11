import Button from "../ui/Button";
import Block from "../ui/Block";
import { Check } from "../ui/Icons";
import { BOOKING_URL, GOOD_HANDS } from "@/lib/content";
import styles from "./GoodHands.module.css";

export default function GoodHands() {
  return (
    <section className="section section--blush">
      <div className={`container ${styles.grid}`}>
        <Block className={styles.copy}>
          <h2 className={`h2 ${styles.heading}`}>
            {GOOD_HANDS.heading[0]}
            <br />
            {GOOD_HANDS.heading[1]}
          </h2>

          <div className={`body ${styles.body}`}>
            {GOOD_HANDS.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className={styles.actions}>
            <Button href={BOOKING_URL}>Book with Confidence</Button>
          </div>
        </Block>

        <Block as="ul" className={styles.list}>
          {GOOD_HANDS.items.map((item) => (
            <li key={item.title} className={styles.item}>
              <Check className={styles.tick} />
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.note}>{item.note}</p>
              </div>
            </li>
          ))}
        </Block>
      </div>
    </section>
  );
}
