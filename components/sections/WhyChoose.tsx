import Button from "../ui/Button";
import Block from "../ui/Block";
import { Check } from "../ui/Icons";
import { BOOKING_URL, WHY_CHOOSE } from "@/lib/content";
import styles from "./WhyChoose.module.css";

export default function WhyChoose() {
  return (
    <section className="section section--lg section--warm">
      <div className="container">
        <div className={styles.grid}>
          <Block className={styles.left}>
            <h2 className="h2">
              {WHY_CHOOSE.heading[0]}
              <br />
              {WHY_CHOOSE.heading[1]}
            </h2>
          </Block>

          <Block as="ul" className={styles.reasons}>
            {WHY_CHOOSE.reasons.map((reason) => (
              <li key={reason} className={styles.reason}>
                <Check className={styles.tick} />
                {reason}
              </li>
            ))}
          </Block>
        </div>

        <Block className={styles.closer}>
          <p className={styles.statement}>
            Most importantly, <em>we listen.</em>
          </p>
          <p className={styles.closerBody}>{WHY_CHOOSE.closer}</p>
          <div className={styles.actions}>
            <Button href={BOOKING_URL}>Book a Wifey</Button>
          </div>
        </Block>
      </div>
    </section>
  );
}
