import { BBqTypographyProps } from "@/components/typography/types";
import { Typography } from "@/components/typography/styled";

export default function BBqTypography({
  tag = "p",
  children,
}: BBqTypographyProps) {
  return <Typography tag={tag}>{children}</Typography>;
}
