import Image from "next/image";
import Button from "../ui/Button";
import Block from "../ui/Block";
import { Check } from "../ui/Icons";
import { RECRUITMENT, RECRUITMENT_URL } from "@/lib/content";
import styles from "./Recruitment.module.css";

export default function Recruitment() {
  return (
    <section className="section section--warm">
      <div className={`container ${styles.grid}`}>
        <Block as="figure" className={styles.figure}>
          <Image
            src={RECRUITMENT.image.src}
            alt={RECRUITMENT.image.alt}
            width={1000}
            height={1250}
            sizes="(max-width: 767px) 100vw, 32vw"
          />
        </Block>

        <Block className={styles.copy}>
          <h2 className={styles.heading}>
            {RECRUITMENT.heading[0]}
            <br />
            {RECRUITMENT.heading[1]}
          </h2>

          <div className={styles.body}>
            {RECRUITMENT.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <ul className={styles.notes}>
            {RECRUITMENT.notes.map((note) => (
              <li key={note} className={styles.note}>
                <Check className={styles.tick} />
                {note}
              </li>
            ))}
          </ul>

          <Button href={RECRUITMENT_URL} variant="secondary">
            Become a Wifey
          </Button>
        </Block>
      </div>
    </section>
  );
}
