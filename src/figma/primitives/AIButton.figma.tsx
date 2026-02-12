import figma from "@figma/code-connect";
import { AIButton } from "primitives";

figma.connect(
  AIButton,
  "https://www.figma.com/design/RunXbtjgAaAIsNgvyEndOD/MCP-Design-System?node-id=3-113&m=dev",
  {
    example: () => <AIButton>Analyse</AIButton>,
  },
);
