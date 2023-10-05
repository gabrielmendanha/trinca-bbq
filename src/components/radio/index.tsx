import { Circle } from "@/components/radio/styled";
import { BBqRadioProps } from "@/components/radio/types";

export default function BBqRadio({ isActive = false }: BBqRadioProps) {
  return <Circle isActive={isActive} />;
}
