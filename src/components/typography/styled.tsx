"use client";

import styled from "styled-components";
import theme from "@/constants/theme";
import { createElement } from "react";
import {
  BBqTypographyProps,
  BBqTypographyWeights,
} from "@/components/typography/types";

export const Wrapper = styled.div<{ $weight: string }>`
  h1 {
    font-size: ${theme.font.size.title};
  }

  h2 {
    font-size: ${theme.font.size.subtitle};
    font-weight: ${({ $weight }) => BBqTypographyWeights[$weight]};
  }

  h3 {
    font-size: ${theme.font.size.description};
  }

  span {
    font-size: ${theme.font.size.description};
    font-weight: ${({ $weight }) => BBqTypographyWeights[$weight]};
  }
`;

export const Typography = styled(
  ({ tag = "p", children, ...props }: BBqTypographyProps) =>
    createElement(tag, props, children),
)``;
