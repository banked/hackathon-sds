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
  /** Array of AI button configurations for multiple buttons */
  aiButtons?: Array<{
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
  aiButtons,
  className,
}: GraphHeaderProps) {
  // Determine which button configuration to use
  const buttonsToRender = aiButtons || (hideAiButton ? [] : [{ label: aiButtonLabel, onPress: onAiButtonPress }]);

  return (
    <div className={clsx("graph-header", className)}>
      <div className="graph-header-content">
        <span className="graph-header-title">{title}</span>
        {buttonsToRender.map((button, index) => (
          <AIButton key={index} size="small" onPress={button.onPress}>
            {button.label}
          </AIButton>
        ))}
      </div>
      <KeylineDivider />
    </div>
  );
}
