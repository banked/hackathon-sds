import figma from "@figma/code-connect";
import { GraphDateLabel } from "primitives";

figma.connect(
  GraphDateLabel,
  "https://www.figma.com/design/RunXbtjgAaAIsNgvyEndOD/MCP-Design-System?node-id=3-127&m=dev",
  {
    example: () => <GraphDateLabel>01 Aug</GraphDateLabel>,
  },
);
