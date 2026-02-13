import figma from "@figma/code-connect";
import {
  DashboardBarChart,
  GraphHeader,
  GraphVisualisation,
} from "compositions";

figma.connect(
  DashboardBarChart,
  "https://www.figma.com/design/RunXbtjgAaAIsNgvyEndOD/MCP-Design-System?node-id=6-513&m=dev",
  {
    example: () => (
      <DashboardBarChart
        title="Title text"
        aiButtonLabel="Analyse"
        keys={[{ label: "Label" }, { label: "Label" }, { label: "Label" }]}
        dates={[{ label: "01 Aug" }, { label: "01 Aug" }]}
      />
    ),
  },
);

figma.connect(
  GraphHeader,
  "https://www.figma.com/design/RunXbtjgAaAIsNgvyEndOD/MCP-Design-System?node-id=3-143&m=dev",
  {
    example: () => (
      <GraphHeader
        title="Title text"
        aiButtons={[
          { label: "Analyse" },
          { label: "Analyse" },
          { label: "Analyse" },
        ]}
      />
    ),
  },
);

figma.connect(
  GraphVisualisation,
  "https://www.figma.com/design/RunXbtjgAaAIsNgvyEndOD/MCP-Design-System?node-id=6-302&m=dev",
  {
    example: () => (
      <GraphVisualisation
        keys={[{ label: "Label" }, { label: "Label" }, { label: "Label" }]}
        dates={[{ label: "01 Aug" }, { label: "01 Aug" }]}
      />
    ),
  },
);
