import figma from "@figma/code-connect";
import { GraphKeyLabel } from "primitives";

figma.connect(
  GraphKeyLabel,
  "https://www.figma.com/design/RunXbtjgAaAIsNgvyEndOD/MCP-Design-System?node-id=3-116&m=dev",
  {
    example: () => <GraphKeyLabel>Label</GraphKeyLabel>,
  },
);
