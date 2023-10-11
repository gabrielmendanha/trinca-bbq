"use client";

import styled from "styled-components";
import theme from "@/constants/theme";

export const Card = styled.div<{
  height: string;
  width: string;
  $hasCursor: boolean;
}>`
  background-color: ${theme.color.background.ultralight};
  border-radius: ${theme.border.radius.default};
  box-shadow: ${theme.shadow.default};
  cursor: ${({ $hasCursor }) => ($hasCursor ? "pointer" : "inherit")};
  padding: ${theme.spacing.linguica};
  height: ${({ height }) => height};
  position: relative;
  width: ${({ width }) => width};
`;
