import { BBqTypographyProps } from "@/components/typography/types";
import { Typography, Wrapper } from "@/components/typography/styled";

export default function BBqTypography({
  tag = "p",
  weight = "bold",
  size = "normal",
  children,
}: BBqTypographyProps) {
  return (
    <Wrapper $weight={weight} $size={size}>
      <Typography tag={tag}>{children}</Typography>
    </Wrapper>
  );
}
