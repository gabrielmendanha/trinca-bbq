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

  @media screen and (max-width: ${theme.breakpoints.xm.large}) {
    width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoints.sm.small}) {
    width: 70%;
  }

  @media screen and (min-width: ${theme.breakpoints.sm.large}) {
    width: 60%;
  }

  @media screen and (min-width: ${theme.breakpoints.md.small}) {
    width: 40%;
  }

  @media screen and (min-width: ${theme.breakpoints.md.large}) {
    width: 30%;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
