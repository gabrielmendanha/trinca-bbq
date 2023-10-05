import { ReactNode } from "react";

export interface BBqTypographyProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  weight?: "light" | "regular" | "bold";
  children: ReactNode;
}

export const BBqTypographyWeights: { [index: string]: string } = {
  light: "500",
  regular: "700",
  bold: "800",
};
