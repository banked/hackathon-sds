import type { Meta, StoryObj } from "@storybook/react";
import { GraphVisualisation } from "compositions";

const meta: Meta<typeof GraphVisualisation> = {
  component: GraphVisualisation,
  title: "SDS Compositions/Graph Visualisation",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof GraphVisualisation> = {
  args: {
    keys: [
      { label: "Sessions" },
      { label: "Conversions" },
    ],
    dates: [
      { label: "01 Aug" },
      { label: "07 Aug" },
    ],
  },
  render: (args) => (
    <div style={{ width: 560 }}>
      <GraphVisualisation {...args} />
    </div>
  ),
};

export const CustomColors: StoryObj<typeof GraphVisualisation> = {
  name: "Custom Key Colors",
  args: {
    keys: [
      { label: "Revenue", color: "#008D8B" },
      { label: "Expenses", color: "#99D8D7" },
    ],
    dates: [
      { label: "Jan 2026" },
      { label: "Feb 2026" },
    ],
  },
  render: (args) => (
    <div style={{ width: 560 }}>
      <GraphVisualisation {...args} />
    </div>
  ),
};

export const SingleKey: StoryObj<typeof GraphVisualisation> = {
  args: {
    keys: [{ label: "Active users" }],
    dates: [
      { label: "Week 1" },
      { label: "Week 4" },
    ],
  },
  render: (args) => (
    <div style={{ width: 560 }}>
      <GraphVisualisation {...args} />
    </div>
  ),
};
