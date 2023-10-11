import { Card } from "@/components/card/styled";
import { BBqCardProps } from "@/components/card/types";

export default function BBqCard({
  width,
  height,
  hasCursor = false,
  onClick,
  children,
}: BBqCardProps) {
  return (
    <Card
      width={width}
      height={height}
      $hasCursor={hasCursor}
      onClick={onClick}
    >
      {children}
    </Card>
  );
}
