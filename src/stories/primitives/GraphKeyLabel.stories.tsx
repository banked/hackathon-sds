import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "layout";
import { GraphKeyLabel } from "primitives";

const meta: Meta<typeof GraphKeyLabel> = {
  component: GraphKeyLabel,
  title: "SDS Primitives/GraphKeyLabel",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof GraphKeyLabel> = {
  name: "GraphKeyLabel",
  args: {
    children: "Label",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    color: {
      control: { type: "color" },
    },
  },
};

export const CustomColor: StoryObj<typeof GraphKeyLabel> = {
  name: "Custom Color",
  args: {
    children: "Revenue",
    color: "#45207e",
  },
};

export const MultipleKeys: StoryObj<typeof GraphKeyLabel> = {
  name: "Multiple Keys",
  render: () => (
    <Flex direction="row" gap="600" alignSecondary="center">
      <GraphKeyLabel>Series A</GraphKeyLabel>
      <GraphKeyLabel color="#45207e">Series B</GraphKeyLabel>
      <GraphKeyLabel color="#008d8b">Series C</GraphKeyLabel>
    </Flex>
  ),
};
