import type { Meta, StoryObj } from "@storybook/react";
import { DashboardBarChart, GraphHeader } from "compositions";

const meta: Meta<typeof GraphHeader> = {
  component: GraphHeader,
  title: "SDS Compositions/Dashboard Bar Chart",
  parameters: { layout: "centered" },
};
export default meta;



export const StoryGraphHeader: StoryObj<typeof GraphHeader> = {
  name: "Graph Header",
  args: {
    title: "Weekly active users",
    aiButtonLabel: "Analyse",
    hideAiButton: false,
  },
  argTypes: {
    title: { control: { type: "text" } },
    aiButtonLabel: { control: { type: "text" } },
    hideAiButton: { control: { type: "boolean" } },
  },
  render: (args) => (
    <div style={{ width: 560 }}>
      <GraphHeader {...args} />
    </div>
  ),
};

export const StoryGraphHeaderMultipleButtons: StoryObj<typeof GraphHeader> = {
  name: "Graph Header (Multiple AI Buttons)",
  args: {
    title: "Title text",
    aiButtons: [
      { label: "Analyse" },
      { label: "Analyse" },
      { label: "Analyse" },
    ],
  },
  render: (args) => (
    <div style={{ width: 560 }}>
      <GraphHeader {...args} />
    </div>
  ),
};

export const StoryGraphHeaderWithoutAI: StoryObj<typeof GraphHeader> = {
  name: "Graph Header (No AI Button)",
  args: {
    title: "Revenue overview",
    hideAiButton: true,
  },
  render: (args) => (
    <div style={{ width: 560 }}>
      <GraphHeader {...args} />
    </div>
  ),
};

export const Default: StoryObj<typeof DashboardBarChart> = {
  args: {
    title: "Gross Pay Ins",
    aiButtons: [{ label: "Analyse" }],
    keys: [
      { label: "Key Label" },
      { label: "Key Label" },
      { label: "Key Label" },
    ],
    dates: [{ label: "01 Aug" }, { label: "07 Aug" }],
  },
  argTypes: {
    title: { control: { type: "text" } },
  },
  render: (args) => (
    <div style={{ width: 560 }}>
      <DashboardBarChart {...args} />
    </div>
  ),
};
