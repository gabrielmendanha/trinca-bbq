"use client";

import styled from "styled-components";
import theme from "@/constants/theme";

export const Background = styled.div`
  background-color: ${theme.color.background.inverted};
  bottom: 0;
  height: 75vh;
  left: 0;
  position: fixed;
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 60vh;
  gap: ${theme.spacing.linguica};
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.alface};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const FlexDetailDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Detail = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.alface};
`;

export const NewChurras = styled.div`
  align-items: center;
  background-color: ${theme.color.background.light};
  border-radius: ${theme.border.radius.default};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.alface};
  height: 192px;
  justify-content: center;
  width: 282px;
  z-index: ${theme.zIndex.content};
`;

export const ChurrasIconWrapper = styled.div`
  align-items: center;
  background-color: ${theme.color.background.default};
  border-radius: ${theme.border.radius.circle};
  display: flex;
  height: 90px;
  justify-content: center;
  width: 90px;
`;
