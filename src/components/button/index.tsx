import { Button } from "@/components/button/styled";
import { BBqButtonProps } from "@/components/button/types";

export default function BBqButton({
  title,
  width = "100%",
  height = "50px",
  type = "button",
  onClick = () => {},
}: BBqButtonProps) {
  return (
    <Button width={width} height={height} type={type} onClick={onClick}>
      {title}
    </Button>
  );
}
