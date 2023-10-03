"use client";

import styled from "styled-components";
import theme from "@/constants/theme";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const AbsoluteDiv = styled.div`
  position: absolute;
`;

export const RelativeDiv = styled.div`
  position: relative;
`;

export const Container = styled.div`
  background-color: ${theme.color.background.default};
  background-image: url("bbq.avif");
  padding: ${theme.spacing.frango};
  display: flex;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

export const Overlay = styled.div`
  background: linear-gradient(
    to top,
    rgba(255, 216, 54, 1) 0%,
    rgba(255, 216, 54, 1) 40%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

export const Logo = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  width: inherit;
  z-index: ${theme.zIndex.logo};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  z-index: ${theme.zIndex.content};
`;

export const Title = styled.div`
  color: ${theme.color.font.black};
  display: flex;
  font-weight: ${theme.font.weight.bold};
  justify-content: center;
  padding-top: ${theme.spacing.picanha};
  position: relative;
  z-index: ${theme.zIndex.logo};
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;

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

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
