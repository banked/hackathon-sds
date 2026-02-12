import { clsx } from "clsx";
import { type CSSProperties, type ReactNode } from "react";
import "./graph-key-label.css";

export type GraphKeyLabelProps = {
  /** The text label to display next to the color swatch */
  children: ReactNode;
  /** Custom color for the swatch. Accepts any valid CSS color value. */
  color?: string;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A graph key label atom used to display a colored swatch alongside a text label.
 * Commonly used in chart legends to identify data series.
 */
export function GraphKeyLabel({
  children,
  color,
  className,
}: GraphKeyLabelProps) {
  const style = color
    ? ({ "--graph-key-label-color": color } as CSSProperties)
    : undefined;

  return (
    <div className={clsx("graph-key-label", className)}>
      <span className="graph-key-label-swatch" style={style} />
      <span className="graph-key-label-text">{children}</span>
    </div>
  );
}
