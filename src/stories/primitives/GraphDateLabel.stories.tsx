import type { Meta, StoryObj } from "@storybook/react";
import { GraphDateLabel } from "primitives";

const meta: Meta<typeof GraphDateLabel> = {
  component: GraphDateLabel,
  title: "SDS Primitives/GraphDateLabel",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof GraphDateLabel> = {
  name: "GraphDateLabel",
  args: {
    children: "01 Aug",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};
