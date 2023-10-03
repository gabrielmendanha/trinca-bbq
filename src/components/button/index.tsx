import { Button } from "@/components/button/styled";
import { BBqButtonProps } from "@/components/button/types";

export default function BBqButton({
  title,
  width = "100%",
  height = "50px",
  type = "button",
}: BBqButtonProps) {
  return (
    <Button width={width} height={height} type={type}>
      {title}
    </Button>
  );
}
