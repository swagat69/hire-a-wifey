import Link from "next/link";
import Button from "../ui/Button";
import Block from "../ui/Block";
import { ArrowRight } from "../ui/Icons";
import { BOOKING_URL, REGULAR } from "@/lib/content";
import styles from "./RegularService.module.css";

export default function RegularService() {
  return (
    <section className="section section--lg">
      <div className="container">
        <div className={styles.head}>
          <Block>
            <h2 className="h2">
              {REGULAR.heading[0]}
              <br />
              {REGULAR.heading[1]}
            </h2>
          </Block>
          <Block className={`lead ${styles.headBody}`}>
            <p>{REGULAR.body}</p>
          </Block>
        </div>

        <Block className={styles.list}>
          {REGULAR.options.map((option) => (
            <Link key={option.title} href={BOOKING_URL} className={styles.row}>
              <h3 className={styles.title}>{option.title}</h3>
              <p className={styles.body}>{option.body}</p>
              <ArrowRight className={styles.arrow} />
            </Link>
          ))}
        </Block>

        <Block className={styles.footer}>
          <Button href={BOOKING_URL} size="large">
            Check Booking Availability
          </Button>
        </Block>
      </div>
    </section>
  );
}
