"use client";

import styled from "styled-components";
import {
  iconPositionY,
  iconPositionX,
  iconHeightSizes,
  iconWidthSizes,
} from "@/constants/icon";
import theme from "@/constants/theme";

export const Icon = styled.div<{ name: string }>`
  background-image: url("/icons.webp");
  background-position-y: ${({ name }) => iconPositionY[name]};
  background-position-x: ${({ name }) => iconPositionX[name]};

  height: ${({ name }) => iconHeightSizes[name]};
  width: ${({ name }) => iconWidthSizes[name]};
`;
