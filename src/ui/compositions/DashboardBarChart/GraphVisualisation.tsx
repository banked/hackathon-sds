import { clsx } from "clsx";
import type { ReactNode } from "react";
import { GraphDateLabel, GraphKeyLabel, KeylineDivider } from "primitives";
import barGraphSvg from "../../images/bar-graph-svg.svg";
import "./graph-visualisation.css";

export type GraphKeyItem = {
  /** The label text for the key item */
  label: string;
  /** Optional custom color for the swatch */
  color?: string;
};

export type GraphDateItem = {
  /** The date text to display */
  label: string;
};

export type GraphVisualisationProps = {
  /** The key/legend items displayed above the chart */
  keys?: GraphKeyItem[];
  /** The date labels displayed below the chart */
  dates?: GraphDateItem[];
  /** Optional custom chart content. Defaults to the built-in bar graph SVG. */
  chart?: ReactNode;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A graph visualisation composition that displays a chart with a key legend,
 * a keyline divider, and date labels. Used inside dashboard chart cards
 * beneath a GraphHeader.
 */
export function GraphVisualisation({
  keys = [
    { label: "Label" },
    { label: "Label" },
  ],
  dates = [
    { label: "01 Aug" },
    { label: "01 Aug" },
  ],
  chart,
  className,
}: GraphVisualisationProps) {
  return (
    <div className={clsx("graph-visualisation", className)}>
      <div className="graph-visualisation-visual">
        <div className="graph-visualisation-graph">
          <div className="graph-visualisation-key">
            {keys.map((key, i) => (
              <GraphKeyLabel key={i} color={key.color}>
                {key.label}
              </GraphKeyLabel>
            ))}
          </div>
          <div className="graph-visualisation-chart">
            {chart ?? <img src={barGraphSvg} alt="Bar graph" />}
          </div>
        </div>
        <KeylineDivider />
      </div>
      <div className="graph-visualisation-date-bar">
        {dates.map((date, i) => (
          <GraphDateLabel key={i}>{date.label}</GraphDateLabel>
        ))}
      </div>
    </div>
  );
}
