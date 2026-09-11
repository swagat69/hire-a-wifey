import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "onDark" | "ghostDark";
type Size = "compact" | "default" | "large";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  full?: boolean;
  className?: string;
};

/**
 * Every booking-intent CTA points at BOOKING_URL, every enquiry CTA at
 * the on-page #enquiry anchor, every recruitment CTA at the recruitment
 * page (brief §2). Anchors stay plain <a> so the browser handles the
 * smooth scroll; page routes go through next/link.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  full = false,
  className,
}: Props) {
  const cls = [
    styles.btn,
    styles[variant],
    size !== "default" ? styles[size] : "",
    full ? styles.full : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = <span className={styles.label}>{children}</span>;

  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
