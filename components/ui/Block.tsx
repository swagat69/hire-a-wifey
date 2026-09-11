import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

/**
 * A plain layout element.
 *
 * This used to fade and rise every section into view on scroll. That is
 * the failure mode the craft floor names directly — one identical
 * entrance repeated down the page is scattered effect, not authored
 * motion. The page now has a single authored moment (the closing word in
 * FinalSales) and everything else is simply present when you reach it.
 *
 * Kept as a server component so none of this costs client JavaScript.
 */
export default function Block({ children, as, className }: Props) {
  const Tag = (as ?? "div") as ElementType;
  return <Tag className={className}>{children}</Tag>;
}
