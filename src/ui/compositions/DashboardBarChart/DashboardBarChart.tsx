import { clsx } from "clsx";
import { GraphHeader, type GraphHeaderProps } from "./GraphHeader";
import { GraphVisualisation, type GraphVisualisationProps } from "./GraphVisualisation";
import "./dashboard-bar-chart.css";

export type DashboardBarChartProps = {
  /** Props for the graph header */
  headerProps: GraphHeaderProps;
  /** Props for the graph visualisation */
  visualisationProps?: GraphVisualisationProps;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A complete dashboard bar chart card containing a header and visualisation.
 * Used to display chart data with AI analysis capabilities.
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
