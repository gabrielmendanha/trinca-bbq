"use client";

import styled from "styled-components";
import { createElement } from "react";
import {
  BBqTypographyProps,
  BBqTypographySizes,
  BBqTypographyWeights,
} from "@/components/typography/types";

export const Wrapper = styled.div<{ $weight: string; $size: string }>`
  h1 {
    font-size: ${({ $size }) => BBqTypographySizes[$size]};
  }

  h2 {
    font-size: ${({ $size }) => BBqTypographySizes[$size]};
    font-weight: ${({ $weight }) => BBqTypographyWeights[$weight]};
  }

  h3 {
    font-size: ${({ $size }) => BBqTypographySizes[$size]};
  }

  span {
    font-size: ${({ $size }) => BBqTypographySizes[$size]};
    font-weight: ${({ $weight }) => BBqTypographyWeights[$weight]};
  }
`;

export const Typography = styled(
  ({ tag = "p", children, ...props }: BBqTypographyProps) =>
    createElement(tag, props, children),
)``;
