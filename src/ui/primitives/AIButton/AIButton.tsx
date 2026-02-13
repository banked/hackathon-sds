import { clsx } from "clsx";
import React, { ComponentPropsWithoutRef } from "react";
import {
  Button as RACButton,
  Link as RACLink,
  type ButtonProps as RACButtonProps,
} from "react-aria-components";
import { AIIcon } from "icons";
import "./ai-button.css";

type AIButtonBaseProps = {
  /** Button size variant */
  size?: "small" | "medium";
  /** Content text to display next to the AI icon */
  children?: React.ReactNode;
  /** Additional CSS class names */
  className?: string;
};

export type AIButtonProps = AIButtonBaseProps &
  (RACButtonProps | ComponentPropsWithoutRef<typeof RACLink>);

/**
 * A specialized button with an AI sparkle icon, used to trigger AI-powered actions.
 * Features a pill shape with a prominent border and purple accent color.
 */
export const AIButton = React.forwardRef(function AIButton(
  { className, size = "medium", children, ...props }: AIButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(className, "ai-button", `ai-button-size-${size}`);

  const iconSize = size === "small" ? "14" : "32";

  const content = (
    <>
      <AIIcon size={iconSize} />
      {children}
    </>
  );

  if (isAnchorProps(props)) {
    return (
      <RACLink
        {...(props as ComponentPropsWithoutRef<typeof RACLink>)}
        className={classNames}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      >
        {content}
      </RACLink>
    );
  }

  return (
    <RACButton
      {...(props as RACButtonProps)}
      className={classNames}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
    >
      {content}
    </RACButton>
  );
});

function isAnchorProps(
  props: Record<string, unknown>,
): boolean {
  return "href" in props;
}
