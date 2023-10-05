"use client";

import styled from "styled-components";
import theme from "@/constants/theme";

export const Circle = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) =>
    isActive ? theme.color.background.default : "none"};
  border-radius: ${theme.border.radius.circle};
  border: 3px solid
    ${({ isActive }) =>
      isActive ? theme.color.background.default : theme.color.border.default};
  height: 25px;
  width: 25px;
`;
