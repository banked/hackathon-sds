import { clsx } from "clsx";
import type { ReactNode } from "react";
import { AIButton, KeylineDivider } from "primitives";
import "./graph-header.css";

export type GraphHeaderProps = {
  /** The title text displayed in the header */
  title: ReactNode;
  /** Label for the AI button. Defaults to "Analyse" */
  aiButtonLabel?: string;
  /** Callback fired when the AI button is pressed */
  onAiButtonPress?: () => void;
  /** Whether to hide the AI button */
  hideAiButton?: boolean;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A graph header composition containing a title, an AI action button,
 * and a keyline divider. Used at the top of dashboard chart cards.
 */
export function GraphHeader({
  title,
  aiButtonLabel = "Analyse",
  onAiButtonPress,
  hideAiButton = false,
  className,
}: GraphHeaderProps) {
  return (
    <div className={clsx("graph-header", className)}>
      <div className="graph-header-content">
        {!hideAiButton && (
          <AIButton size="small" onPress={onAiButtonPress}>
            {aiButtonLabel}
          </AIButton>
        )}
        <span className="graph-header-title">{title}</span>
      </div>
      <KeylineDivider />
    </div>
  );
}
