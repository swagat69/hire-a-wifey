"use client";

import { useId, useState } from "react";
import Button from "../ui/Button";
import Block from "../ui/Block";
import { Plus } from "../ui/Icons";
import { BOOKING_URL, FAQS } from "@/lib/content";
import styles from "./Faq.module.css";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();

  return (
    <section className="section section--lg" id="faq">
      <div className={`container`}>
        <div className={styles.wrap}>
          <Block className={styles.head}>
            <h2 className="h2">Good questions, straight answers.</h2>
          </Block>

          <Block as="ul" className={styles.list}>
            {FAQS.map((faq, i) => {
              const panelId = `${uid}-faq-${i}`;
              const isOpen = open === i;

              return (
                <li key={faq.q} className={styles.row}>
                  <h3>
                    <button
                      type="button"
                      className={styles.q}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      {faq.q}
                      <Plus className={styles.icon} />
                    </button>
                  </h3>
                  <div
                    className={styles.panel}
                    id={panelId}
                    data-open={isOpen ? "true" : "false"}
                  >
                    <div className={styles.panelInner}>
                      <p className={styles.a}>{faq.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </Block>

          <noscript>
            <style>{`.${styles.panel}{grid-template-rows:1fr}.${styles.panelInner}{visibility:visible;opacity:1}.${styles.icon}{display:none}`}</style>
          </noscript>

          <Block className={styles.footer}>
            <Button href={BOOKING_URL}>Book a Wifey</Button>
          </Block>
        </div>
      </div>
    </section>
  );
}
