import { ChangeEvent } from "react";

export interface BBqInputProps {
  placeholder?: string;
  width?: "25%" | "50%" | "75%" | "100%";
  height?: "50px" | string;
  margin?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
  value?: string;
}
