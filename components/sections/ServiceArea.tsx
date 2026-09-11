import Button from "../ui/Button";
import Block from "../ui/Block";
import ServiceAreaMap from "../ui/ServiceAreaMap";
import { BOOKING_URL, ENQUIRY_ANCHOR, SERVICE_AREA } from "@/lib/content";
import styles from "./ServiceArea.module.css";

export default function ServiceArea() {
  return (
    <section className="section section--lg" id="service-area">
      <div className="container">
        <div className={styles.grid}>
          <Block className={styles.copy}>
            <h2 className={`h2 ${styles.heading}`}>
              {SERVICE_AREA.heading[0]}
              <br />
              {SERVICE_AREA.heading[1]}
            </h2>
            <p className="lead">{SERVICE_AREA.body}</p>
          </Block>

          <Block>
            <ServiceAreaMap />
          </Block>
        </div>

        <Block as="ul" className={styles.suburbs}>
          {SERVICE_AREA.suburbs.map((suburb) => (
            <li key={suburb} className={styles.suburb}>
              <span className={styles.dot} aria-hidden="true" />
              {suburb}
            </li>
          ))}
        </Block>

        <Block className={styles.note}>
          <p className={styles.noteText}>
            {SERVICE_AREA.noteBefore}
            <a href={ENQUIRY_ANCHOR} className={styles.noteLink}>
              {SERVICE_AREA.noteLink}
            </a>
            {SERVICE_AREA.noteAfter}
          </p>
          <div>
            <Button href={BOOKING_URL}>Book a Wifey</Button>
          </div>
        </Block>
      </div>
    </section>
  );
}
