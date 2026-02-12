import { clsx } from "clsx";
import "./keyline-divider.css";

export type KeylineDividerProps = {
  /** Additional CSS class names */
  className?: string;
};

/**
 * A full-width horizontal keyline divider used to visually separate content sections.
 * Uses the foreground-primary-keyline color token.
 */
export function KeylineDivider({ className }: KeylineDividerProps) {
  return <hr className={clsx("keyline-divider", className)} />;
}
