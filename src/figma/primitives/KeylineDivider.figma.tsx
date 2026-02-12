import figma from "@figma/code-connect";
import { KeylineDivider } from "primitives";

figma.connect(
  KeylineDivider,
  "https://www.figma.com/design/RunXbtjgAaAIsNgvyEndOD/MCP-Design-System?node-id=18-139&m=dev",
  {
    example: () => <KeylineDivider />,
  }
);
