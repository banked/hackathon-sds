import { clsx } from "clsx";
import type { ReactNode } from "react";
import { GraphHeader, GraphVisualisation } from "compositions";
import type { GraphVisualisationProps } from "./GraphVisualisation";
import "./dashboard-bar-chart.css";

export type DashboardBarChartProps = {
  /** The title text displayed in the header */
  title: ReactNode;
  /** Array of AI button configurations */
  aiButtons?: Array<{
    label: string;
    onPress?: () => void;
  }>;
  /** The key/legend items displayed above the chart */
  keys?: GraphVisualisationProps["keys"];
  /** The date labels displayed below the chart */
  dates?: GraphVisualisationProps["dates"];
  /** Optional custom chart content */
  chart?: ReactNode;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A complete dashboard bar chart composition containing a header with AI buttons
 * and a graph visualisation with keys and date labels.
 */
export function DashboardBarChart({
  title,
  aiButtons,
  keys,
  dates,
  chart,
  className,
}: DashboardBarChartProps) {
  return (
    <div className={clsx("dashboard-bar-chart", className)}>
      <GraphHeader title={title} aiButtons={aiButtons} />
      <GraphVisualisation keys={keys} dates={dates} chart={chart} />
    </div>
  );
}
