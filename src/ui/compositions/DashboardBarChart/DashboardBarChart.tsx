import { clsx } from "clsx";
import type { ReactNode } from "react";
import { GraphHeader } from "./GraphHeader";
import {
  GraphVisualisation,
  type GraphVisualisationProps,
} from "./GraphVisualisation";
import "./dashboard-bar-chart.css";

export type DashboardBarChartProps = {
  /** The title text displayed in the graph header */
  title: ReactNode;
  /** Label for the AI button. Defaults to "Analyse" */
  aiButtonLabel?: string;
  /** Callback fired when the AI button is pressed */
  onAiButtonPress?: () => void;
  /** Whether to hide the AI button */
  hideAiButton?: boolean;
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
 * A dashboard bar chart card composition that combines a GraphHeader
 * and GraphVisualisation into a single elevated card. This is the
 * organism-level component for the dashboard bar chart pattern.
 */
export function DashboardBarChart({
  title,
  aiButtonLabel = "Analyse",
  onAiButtonPress,
  hideAiButton = false,
  keys,
  dates,
  chart,
  className,
}: DashboardBarChartProps) {
  return (
    <div className={clsx("dashboard-bar-chart", className)}>
      <GraphHeader
        title={title}
        aiButtonLabel={aiButtonLabel}
        onAiButtonPress={onAiButtonPress}
        hideAiButton={hideAiButton}
      />
      <GraphVisualisation keys={keys} dates={dates} chart={chart} />
    </div>
  );
}
