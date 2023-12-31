import { Input } from "@/components/input/styled";
import { BBqInputProps } from "@/components/input/types";

export default function BBqInput({
  placeholder = "",
  width = "100%",
  height = "50px",
  margin = "",
  value = "",
  onChange = () => {},
}: BBqInputProps) {
  return (
    <Input
      placeholder={placeholder}
      $width={width}
      $height={height}
      $margin={margin}
      onChange={onChange}
      value={value}
    />
  );
}
