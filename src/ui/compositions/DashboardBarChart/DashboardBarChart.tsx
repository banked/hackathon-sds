import { clsx } from "clsx";
import { GraphHeader, GraphVisualisation } from "compositions";
import type { GraphHeaderProps } from "./GraphHeader";
import type { GraphVisualisationProps } from "./GraphVisualisation";
import "./dashboard-bar-chart.css";

export type DashboardBarChartProps = {
  /** Props for the GraphHeader component */
  header: GraphHeaderProps;
  /** Props for the GraphVisualisation component */
  visualisation: GraphVisualisationProps;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A complete dashboard bar chart card composition that combines a GraphHeader
 * and GraphVisualisation in a styled container with shadow and rounded corners.
 */
export function DashboardBarChart({
  header,
  visualisation,
  className,
}: DashboardBarChartProps) {
  return (
    <div className={clsx("dashboard-bar-chart", className)}>
      <GraphHeader {...header} />
      <GraphVisualisation {...visualisation} />
    </div>
  );
}
