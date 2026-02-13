import { clsx } from "clsx";
import { GraphHeader, type GraphHeaderProps } from "./GraphHeader";
import { GraphVisualisation, type GraphVisualisationProps } from "./GraphVisualisation";
import "./dashboard-bar-chart.css";

export type DashboardBarChartProps = {
  /** Props for the graph header */
  header: GraphHeaderProps;
  /** Props for the graph visualisation */
  visualisation?: GraphVisualisationProps;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A complete dashboard bar chart card combining a GraphHeader
 * and GraphVisualisation in a styled card container.
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
