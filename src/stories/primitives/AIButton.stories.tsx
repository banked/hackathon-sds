import type { Meta, StoryObj } from "@storybook/react";
import { AIButton } from "primitives";

const meta: Meta<typeof AIButton> = {
  component: AIButton,
  title: "SDS Primitives/AIButton",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof AIButton> = {
  name: "AIButton",
  args: {
    children: "Analyse",
    size: "medium",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
  },
};

export const Small: StoryObj<typeof AIButton> = {
  name: "AIButton Small",
  args: {
    children: "Analyse",
    size: "small",
  },
};

export const Disabled: StoryObj<typeof AIButton> = {
  name: "AIButton Disabled",
  args: {
    children: "Analyse",
    isDisabled: true,
  },
};

export const AsLink: StoryObj<typeof AIButton> = {
  name: "AIButton as Link",
  args: {
    children: "Analyse",
    href: "#",
  },
};
