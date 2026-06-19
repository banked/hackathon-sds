import { clsx } from "clsx";
import { GraphHeader, type GraphHeaderProps } from "./GraphHeader";
import { GraphVisualisation, type GraphVisualisationProps } from "./GraphVisualisation";
import "./dashboard-bar-chart.css";

export type DashboardBarChartProps = {
  /** Props for the GraphHeader component */
  header?: GraphHeaderProps;
  /** Props for the GraphVisualisation component */
  visualisation?: GraphVisualisationProps;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A dashboard bar chart card that combines a header with title and AI buttons,
 * and a graph visualisation with keys and dates. Displays as a white card with
 * rounded corners and shadow.
 */
export function DashboardBarChart({
  header,
  visualisation,
  className,
}: DashboardBarChartProps) {
  return (
    <div className={clsx("dashboard-bar-chart", className)}>
      {header && <GraphHeader {...header} />}
      {visualisation && <GraphVisualisation {...visualisation} />}
    </div>
  );
}
