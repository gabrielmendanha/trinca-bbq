import { ReactNode } from "react";

export interface BBqCardProps {
  width: string;
  height: string;
  hasCursor?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}
