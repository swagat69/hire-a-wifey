import Button from "../ui/Button";
import Block from "../ui/Block";
import { Check } from "../ui/Icons";
import { BOOKING_URL, BUILD_VISIT } from "@/lib/content";
import styles from "./BuildVisit.module.css";

export default function BuildVisit() {
  return (
    <section className="section section--lg section--warm">
      <div className={`container ${styles.grid}`}>
        <Block>
          <div className={styles.paper}>
            <p className={styles.paperTitle}>{BUILD_VISIT.listTitle}</p>
            <ul className={styles.tasks}>
              {BUILD_VISIT.list.map((task) => (
                <li key={task} className={styles.task}>
                  <Check className={styles.tick} />
                  {task}
                </li>
              ))}
            </ul>
            <p className={styles.note}>{BUILD_VISIT.note}</p>
          </div>
        </Block>

        <Block className={styles.copy}>
          <h2 className={`h2 ${styles.heading}`}>
            {BUILD_VISIT.heading[0]}
            <br />
            {BUILD_VISIT.heading[1]}
          </h2>

          <div className={`body ${styles.body}`}>
            {BUILD_VISIT.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <p className={styles.closer}>{BUILD_VISIT.closer}</p>

          <div className={styles.actions}>
            <Button href={BOOKING_URL}>Book My Wifey Visit</Button>
          </div>
        </Block>
      </div>
    </section>
  );
}
