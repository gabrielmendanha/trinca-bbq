import { Card } from "@/components/card/styled";
import { BBqCardProps } from "@/components/card/types";

export default function BBqCard({
  width,
  height,
  onClick,
  children,
}: BBqCardProps) {
  return (
    <Card width={width} height={height} onClick={onClick}>
      {children}
    </Card>
  );
}
