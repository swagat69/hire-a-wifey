import { Check } from "../ui/Icons";
import { TRUST_POINTS } from "@/lib/content";
import styles from "./TrustBar.module.css";

export default function TrustBar() {
  return (
    <section className={styles.bar} aria-label="Why customers trust Hire a Wifey">
      <ul className={`container ${styles.list}`}>
        {TRUST_POINTS.map((point) => (
          <li key={point} className={styles.item}>
            <Check className={styles.tick} />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
