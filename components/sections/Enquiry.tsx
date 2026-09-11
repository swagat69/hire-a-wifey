"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Block from "../ui/Block";
import { Check } from "../ui/Icons";
import { submitEnquiry } from "@/app/actions";
import { initialEnquiryState } from "@/lib/enquiry";
import { CONTACT, ENQUIRY } from "@/lib/content";
import styles from "./Enquiry.module.css";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.submit} disabled={pending}>
      {pending ? "Sending…" : "Send My Enquiry"}
    </button>
  );
}

export default function Enquiry() {
  const [state, action] = useActionState(submitEnquiry, initialEnquiryState);
  const err = state.errors;
  const v = state.values;

  return (
    <section className="section section--lg section--warm" id="enquiry">
      <div className={`container ${styles.grid}`}>
        <Block className={styles.aside}>
          <h2 className={`h2 ${styles.heading}`}>
            {ENQUIRY.heading[0]}
            <br />
            {ENQUIRY.heading[1]}
          </h2>
          <p className="lead">{ENQUIRY.body}</p>

          <div className={styles.contact}>
            <a href={CONTACT.phoneHref} className={styles.contactRow}>
              <small>Call or text</small>
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emailHref}
              className={`${styles.contactRow} ${styles.emailRow}`}
            >
              <small>Email</small>
              {CONTACT.email}
            </a>
          </div>
        </Block>

        <Block>
          {state.status === "success" ? (
            <div className={styles.success} role="status" aria-live="polite">
              <span className={styles.successMark} aria-hidden="true">
                <Check />
              </span>
              <h3 className={styles.successTitle}>{ENQUIRY.success.title}</h3>
              <p className={styles.successBody}>{ENQUIRY.success.body}</p>
            </div>
          ) : (
            <form action={action} className={styles.form} noValidate>
              <div className={styles.fields}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className={styles.input}
                    autoComplete="name"
                    required
                    defaultValue={v.name}
                    aria-invalid={err.name ? "true" : undefined}
                    aria-describedby={err.name ? "name-error" : undefined}
                  />
                  {err.name && (
                    <p id="name-error" className={styles.error}>
                      {err.name}
                    </p>
                  )}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="mobile">
                    Mobile number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="tel"
                    className={styles.input}
                    autoComplete="tel"
                    required
                    defaultValue={v.mobile}
                    aria-invalid={err.mobile ? "true" : undefined}
                    aria-describedby={err.mobile ? "mobile-error" : undefined}
                  />
                  {err.mobile && (
                    <p id="mobile-error" className={styles.error}>
                      {err.mobile}
                    </p>
                  )}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    Email <span className={styles.optional}>(optional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.input}
                    autoComplete="email"
                    defaultValue={v.email}
                    aria-invalid={err.email ? "true" : undefined}
                    aria-describedby={err.email ? "email-error" : undefined}
                  />
                  {err.email && (
                    <p id="email-error" className={styles.error}>
                      {err.email}
                    </p>
                  )}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="suburb">
                    Suburb
                  </label>
                  <input
                    id="suburb"
                    name="suburb"
                    className={styles.input}
                    autoComplete="address-level2"
                    required
                    defaultValue={v.suburb}
                    aria-invalid={err.suburb ? "true" : undefined}
                    aria-describedby={err.suburb ? "suburb-error" : undefined}
                  />
                  {err.suburb && (
                    <p id="suburb-error" className={styles.error}>
                      {err.suburb}
                    </p>
                  )}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="enquiryType">
                    What are you enquiring about?
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    className={styles.select}
                    defaultValue={v.enquiryType || ENQUIRY.enquiryTypes[0]}
                  >
                    {ENQUIRY.enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contactMethod">
                    Preferred contact method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    className={styles.select}
                    defaultValue={v.contactMethod || ENQUIRY.contactMethods[0]}
                  >
                    {ENQUIRY.contactMethods.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={`${styles.field} ${styles.span2}`}>
                  <label className={styles.label} htmlFor="message">
                    Tell us what you need help with
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    required
                    defaultValue={v.message}
                    aria-invalid={err.message ? "true" : undefined}
                    aria-describedby={err.message ? "message-error" : undefined}
                  />
                  {err.message && (
                    <p id="message-error" className={styles.error}>
                      {err.message}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              <Submit />

              {state.status === "error" && (
                <p className={styles.formError} role="alert">
                  Please check the highlighted fields and try again.
                </p>
              )}
            </form>
          )}
        </Block>
      </div>
    </section>
  );
}
