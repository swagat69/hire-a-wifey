"use client";

import { useId, useState } from "react";
import Button from "../ui/Button";
import Block from "../ui/Block";
import { Plus } from "../ui/Icons";
import { BOOKING_URL, SERVICES } from "@/lib/content";
import styles from "./Services.module.css";

/**
 * One DOM for both breakpoints.
 *
 * Panels are display:none by default (correct for the mobile accordion) and
 * forced open by a min-width:1024px media query (correct for the desktop
 * directory). That means the server-rendered markup is already right at every
 * viewport — no hydration mismatch, no flash of expanded content on phones.
 * React state only ever drives the *mobile open* case.
 */
export default function Services() {
  const [open, setOpen] = useState<string | null>(null);
  const uid = useId();

  return (
    <section className="section section--lg" id="services">
      <div className="container">
        <div className={styles.head}>
          <Block>
            <h2 className="h2">
              One service.
              <br />A whole lot of help.
            </h2>
          </Block>
          <Block className={`lead ${styles.headBody}`}>
            <p>
              Tell us which household tasks matter most to you. Your Wifey works
              through the agreed priorities during your booked time — so the
              service fits your home rather than a fixed checklist.
            </p>
          </Block>
        </div>

        <Block as="ul" className={styles.list}>
          {SERVICES.map((service) => {
            const panelId = `${uid}-${service.id}`;
            const isOpen = open === service.id;

            return (
              <li key={service.id} className={styles.row}>
                <h3>
                  <button
                    type="button"
                    className={styles.summary}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : service.id)}
                  >
                    <span className={styles.title}>{service.title}</span>
                    <Plus className={styles.icon} />
                  </button>
                </h3>

                <div
                  className={styles.panel}
                  id={panelId}
                  data-open={isOpen ? "true" : "false"}
                >
                  {service.items.length > 0 ? (
                    <ul className={styles.items}>
                      {service.items.map((item) => (
                        <li key={item} className={styles.item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={styles.prose}>{service.prose}</p>
                  )}
                </div>
              </li>
            );
          })}
        </Block>

        <noscript>
          <style>{`.${styles.panel}{display:block}.${styles.icon}{display:none}`}</style>
        </noscript>

        <Block className={styles.footer}>
          <Button href={BOOKING_URL}>Book a Wifey</Button>
        </Block>
      </div>
    </section>
  );
}
