import Image from "next/image";
import Button from "../ui/Button";
import Block from "../ui/Block";
import { BOOKING_URL, DIFFERENCE } from "@/lib/content";
import styles from "./Difference.module.css";

export default function Difference() {
  const [large, small] = DIFFERENCE.images;

  return (
    <section className="section section--lg section--dark">
      <div className="container">
        <div className={styles.head}>
          <Block>
            <h2 className={`h2 ${styles.heading}`}>
              {DIFFERENCE.heading[0]}
              <br />
              {DIFFERENCE.heading[1]}
            </h2>
          </Block>

          <Block className={`body ${styles.headBody}`}>
            {DIFFERENCE.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Block>
        </div>

        <div className={styles.collage}>
          <Block as="figure" className={`${styles.figure} ${styles.figureLarge}`}>
            <Image
              src={large.src}
              alt={large.alt}
              width={1000}
              height={1250}
              sizes="(max-width: 767px) 100vw, 58vw"
            />
          </Block>

          <Block
            as="figure"
            className={`${styles.figure} ${styles.figureSmall}`}
           
          >
            <Image
              src={small.src}
              alt={small.alt}
              width={1000}
              height={1250}
              sizes="(max-width: 767px) 100vw, 40vw"
            />
          </Block>
        </div>

        <div className={styles.foot}>
          <Block>
            <p className={styles.statement}>
              <span>{DIFFERENCE.statement[0]}</span>
              <span>{DIFFERENCE.statement[1]}</span>
            </p>
          </Block>
          <Block>
            <Button href={BOOKING_URL} variant="onDark" size="large">
              Book Your Wifey
            </Button>
          </Block>
        </div>
      </div>
    </section>
  );
}
