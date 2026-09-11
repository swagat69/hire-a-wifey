type IconProps = { className?: string };

/** Thin, typographic tick — deliberately not a badge or a shield (§08, §12). */
export function Check({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2.5 8.6 6.2 12.3 13.5 4.2" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 16"
      width="24"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0.75 8h21.5M16 1.5 22.5 8 16 14.5" />
    </svg>
  );
}

/** Plus that becomes a minus via CSS on the open row. */
export function Plus({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 18"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9 2.5v13" data-bar="v" />
      <path d="M2.5 9h13" />
    </svg>
  );
}

export function Star({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 19"
      width="20"
      height="19"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M10 0l2.47 6.33 6.78.36-5.28 4.26 1.78 6.55L10 13.9l-5.75 3.6 1.78-6.55L.75 6.69l6.78-.36z" />
    </svg>
  );
}
