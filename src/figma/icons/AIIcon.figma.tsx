import figma from "@figma/code-connect";
import { AIIcon } from "icons";

figma.connect(
  AIIcon,
  "https://www.figma.com/design/RunXbtjgAaAIsNgvyEndOD/MCP-Design-System?node-id=3-91&m=dev",
  {
    example: () => <AIIcon size="32" />,
  }
);
