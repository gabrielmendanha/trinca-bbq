import { BBqTypographyProps } from "@/components/typography/types";
import { Typography, Wrapper } from "@/components/typography/styled";

export default function BBqTypography({
  tag = "p",
  weight = "bold",
  children,
}: BBqTypographyProps) {
  return (
    <Wrapper $weight={weight}>
      <Typography tag={tag}>{children}</Typography>
    </Wrapper>
  );
}
