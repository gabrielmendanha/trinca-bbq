"use client";

import styled from "styled-components";
import theme from "@/constants/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin-top: ${theme.spacing.linguica};
  margin-bottom: ${theme.spacing.linguica};
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.alface};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.fileMignon};
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.linguica};
`;

export const Detail = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.paoAlho};
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  height: 45px;
  border-bottom: 1px solid ${theme.color.decoration.yellow};
`;

export const ContributionWrapper = styled.div<{ isChecked: boolean }>`
  span {
    text-decoration: ${({ isChecked }) =>
      isChecked ? "line-through" : "inherit"};
  }
`;

export const NameContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.abacaxi};
`;
