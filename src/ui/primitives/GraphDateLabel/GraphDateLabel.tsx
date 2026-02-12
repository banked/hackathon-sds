import { clsx } from "clsx";
import "./graph-date-label.css";

export type GraphDateLabelProps = {
  /** The date text to display */
  children: React.ReactNode;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A graph date label atom used to display date values along the axis of a chart.
 * Commonly used beneath bar charts or line charts.
 */
export function GraphDateLabel({ children, className }: GraphDateLabelProps) {
  return (
    <span className={clsx("graph-date-label", className)}>{children}</span>
  );
}
