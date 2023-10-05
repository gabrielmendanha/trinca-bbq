import { ReactNode } from "react";

export interface BBqCardProps {
  width: string;
  height: string;
  onClick?: () => void;
  children?: ReactNode;
}
