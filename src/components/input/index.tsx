import { Input } from "@/components/input/styled";

// @ts-ignore
export default function BBqInput({
  placeholder = "",
  width = "100%",
  height = "50px",
  margin = "",
}) {
  return (
    <Input
      placeholder={placeholder}
      $width={width}
      $height={height}
      $margin={margin}
    />
  );
}
