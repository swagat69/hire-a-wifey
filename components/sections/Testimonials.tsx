import Block from "../ui/Block";
import { Star } from "../ui/Icons";
import { REVIEWS, REVIEWS_COPY } from "@/lib/content";
import styles from "./Testimonials.module.css";

/**
 * The brief requires genuine reviews only (§18), and the QA pass forbids
 * shipping fake testimonials (§47). So: with no real reviews in
 * `REVIEWS`, this section renders nothing in production. Add one entry to
 * `REVIEWS` in lib/content.ts and the section turns itself on.
 */
export default function Testimonials() {
  const hasReviews = REVIEWS.length > 0;
  const isDev = process.env.NODE_ENV !== "production";

  if (!hasReviews && !isDev) return null;

  return (
    <section className="section section--lg">
      <div className="container">
        <Block className={styles.head}>
          <h2 className="h2">
            {REVIEWS_COPY.heading[0]}
            <br />
            {REVIEWS_COPY.heading[1]}
          </h2>
        </Block>

        {hasReviews ? (
          <Block as="ul" className={styles.rail}>
            {REVIEWS.slice(0, 3).map((review) => (
              <li key={`${review.name}-${review.suburb}`} className={styles.item}>
                <span
                  className={styles.stars}
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Star key={i} />
                  ))}
                </span>
                <blockquote className={styles.quote}>
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <p className={styles.attrib}>
                  {review.name}, {review.suburb}
                </p>
              </li>
            ))}
          </Block>
        ) : (
          <div className={styles.pending}>
            <strong>Development note — this block never ships.</strong>
            No genuine reviews have been supplied yet, so the reviews section is
            omitted from the production build rather than filled with placeholder
            quotes. Add entries to <code>REVIEWS</code> in{" "}
            <code>lib/content.ts</code> (quote, name, suburb, rating) and the
            section renders automatically.
          </div>
        )}
      </div>
    </section>
  );
}
