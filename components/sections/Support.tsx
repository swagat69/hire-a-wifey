import { Fragment } from "react";
import Button from "../ui/Button";
import Block from "../ui/Block";
import { ENQUIRY_ANCHOR, SUPPORT } from "@/lib/content";
import styles from "./Support.module.css";

export default function Support() {
  return (
    <section className="section section--lg section--blush" id="support">
      <div className="container">
        <Block className={styles.head}>
          <h2 className="h2">NDIS &amp; DVA clients welcome.</h2>
        </Block>

        <div className={styles.grid}>
          {SUPPORT.map((panel, i) => (
            <Fragment key={panel.id}>
              {i > 0 && <div className={styles.divider} aria-hidden="true" />}
              <Block className={styles.panel}>
                <span className={styles.label}>{panel.label}</span>
                <h3 className={styles.heading}>{panel.heading}</h3>
                <div className={styles.body}>
                  {panel.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div className={styles.actions}>
                  <Button href={ENQUIRY_ANCHOR} variant="secondary">
                    {panel.cta}
                  </Button>
                </div>
              </Block>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
