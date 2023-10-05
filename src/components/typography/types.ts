import { ReactNode } from "react";

export interface BBqTypographyProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  weight?: "light" | "regular" | "bold";
  size?: "normal" | "description" | "subtitle" | "title" | "supertitle";
  children: ReactNode;
}

export const BBqTypographyWeights: { [index: string]: string } = {
  light: "500",
  regular: "700",
  bold: "800",
};

export const BBqTypographySizes: { [index: string]: string } = {
  normal: "1.1250em",
  description: "1.3125em",
  subtitle: "1.75em",
  title: "2em",
  supertitle: "2.25em",
};
