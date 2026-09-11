import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./ui/Button";
import { CONTACT } from "@/lib/content";
import styles from "./StubPage.module.css";

/**
 * The brief scopes this engagement to the homepage; the Booking and
 * Recruitment pages are separate destinations (§1). These stubs exist so
 * that every CTA on the homepage resolves instead of 404ing, and so the
 * routes are already claimed when those pages are built.
 */
export default function StubPage({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <>
      <Header />
      <main id="main" className={styles.main}>
        <div className={`container ${styles.inner}`}>
          <h1 className={`h1 ${styles.title}`}>{title}</h1>
          <p className="lead">{body}</p>

          <div className={styles.contact}>
            <p className={styles.contactLabel}>In the meantime</p>
            <a href={CONTACT.phoneHref} className={styles.contactLink}>
              {CONTACT.phone}
            </a>
            <a href={CONTACT.emailHref} className={styles.contactLink}>
              {CONTACT.email}
            </a>
          </div>

          <div className={styles.actions}>
            <Button href="/" variant="secondary">
              Back to home
            </Button>
          </div>

          <p className={styles.note}>
            <Link href="/#enquiry">Or send us an enquiry</Link> and we&rsquo;ll
            get back to you.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
