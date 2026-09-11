import Button from "../ui/Button";
import Block from "../ui/Block";
import { BOOKING_URL, STEPS } from "@/lib/content";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className="section section--lg section--warm">
      <div className="container">
        <div className={styles.head}>
          <Block>
            <h2 className="h2">Five steps. That&rsquo;s it.</h2>
          </Block>
        </div>

        <Block as="ol" className={styles.steps}>
          {STEPS.map((step) => (
            <li key={step.n} className={styles.step}>
              <span className={styles.n} aria-hidden="true">
                {step.n}
              </span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.body}>{step.body}</p>
            </li>
          ))}
        </Block>

        <Block className={styles.footer}>
          <Button href={BOOKING_URL}>Book My Wifey</Button>
        </Block>
      </div>
    </section>
  );
}
