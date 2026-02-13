import { clsx } from "clsx";
import type { ReactNode } from "react";
import { GraphHeader } from "./GraphHeader";
import { GraphVisualisation } from "./GraphVisualisation";
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
  keys?: Array<{
    label: string;
    color?: string;
  }>;
  /** The date labels displayed below the chart */
  dates?: Array<{
    label: string;
  }>;
  /** Optional custom chart content */
  chart?: ReactNode;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A complete dashboard bar chart card that combines a graph header
 * with a graph visualisation inside a styled container.
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
