"use client";

import styled from "styled-components";
import theme from "@/constants/theme";

export const Button = styled.button<{ width: string; height: string }>`
  color: white;
  cursor: pointer;
  background-color: black;
  border: none;
  border-radius: ${theme.border.radius.semicircle};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;
