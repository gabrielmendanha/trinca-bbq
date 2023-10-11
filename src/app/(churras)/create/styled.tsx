"use client";

import styled from "styled-components";
import theme from "@/constants/theme";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 60vh;
  gap: ${theme.spacing.linguica};
  position: relative;
  z-index: ${theme.zIndex.content};
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${theme.spacing.picanha};
  width: 30%;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
