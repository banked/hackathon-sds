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
  /** Array of additional AI buttons to display */
  additionalAiButtons?: Array<{
    label: string;
    onPress?: () => void;
  }>;
  /** Additional CSS class names */
  className?: string;
};

/**
 * A graph header composition containing a title, AI action buttons,
 * and a keyline divider. Used at the top of dashboard chart cards.
 */
export function GraphHeader({
  title,
  aiButtonLabel = "Analyse",
  onAiButtonPress,
  hideAiButton = false,
  additionalAiButtons = [],
  className,
}: GraphHeaderProps) {
  return (
    <div className={clsx("graph-header", className)}>
      <div className="graph-header-content">
        <span className="graph-header-title">{title}</span>
        {!hideAiButton && (
          <AIButton size="small" onPress={onAiButtonPress}>
            {aiButtonLabel}
          </AIButton>
        )}
        {additionalAiButtons.map((button, index) => (
          <AIButton key={index} size="small" onPress={button.onPress}>
            {button.label}
          </AIButton>
        ))}
      </div>
      <KeylineDivider />
    </div>
  );
}
