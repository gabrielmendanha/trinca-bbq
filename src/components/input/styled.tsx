"use client";

import styled from "styled-components";
import theme from "@/constants/theme";

export const Input = styled.input<{
  $width: string;
  $height: string;
  $margin: string;
}>`
  border: none;
  border-radius: ${theme.border.radius.default};
  margin: ${({ $margin }) => $margin};
  padding-left: ${theme.spacing.abacaxi};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};

  &::placeholder {
    color: ${theme.color.font.lightblack};
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.size.normal};
    font-style: italic;
  }
`;
