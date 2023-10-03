"use client";

import styled from "styled-components";
import theme from "@/constants/theme";
import { createElement } from "react";
import { BBqTypographyProps } from "@/components/typography/types";

export const Typography = styled(
  ({ tag = "p", children, ...props }: BBqTypographyProps) =>
    createElement(tag, props, children),
)`
  h1 {
    font-size: ${theme.font.size.title};
  }
`;
