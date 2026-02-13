import { clsx } from "clsx";
import { GraphHeader } from "./GraphHeader";
import { GraphVisualisation } from "./GraphVisualisation";
import type { GraphHeaderProps } from "./GraphHeader";
import type { GraphVisualisationProps } from "./GraphVisualisation";
import "./dashboard-bar-chart.css";

export type DashboardBarChartProps = {
  /** Props for the GraphHeader component */
  headerProps: GraphHeaderProps;
  /** Props for the GraphVisualisation component */
  visualisationProps?: GraphVisualisationProps;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A complete dashboard bar chart card that combines a GraphHeader
 * and GraphVisualisation into a single card component.
 */
export function DashboardBarChart({
  headerProps,
  visualisationProps,
  className,
}: DashboardBarChartProps) {
  return (
    <div className={clsx("dashboard-bar-chart", className)}>
      <GraphHeader {...headerProps} />
      <GraphVisualisation {...visualisationProps} />
    </div>
  );
}
