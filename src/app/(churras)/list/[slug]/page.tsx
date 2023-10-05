"use client";

import BBqCard from "@/components/card";
import {
  Container,
  ContributionWrapper,
  Detail,
  DetailsWrapper,
  Header,
  HeaderInfos,
  List,
  ListItem,
  NameContainer,
  Wrapper,
} from "@/app/(churras)/list/[slug]/styled";
import BBqTypography from "@/components/typography";
import BBqIcon from "@/components/icon";
import { useChurrasDetail } from "@/hooks/useChurrasDetail";
import { TChurrasPerson } from "@/mocks/type";
import BBqRadio from "@/components/radio";

export default function Details() {
  const { checked, check, currentChurras } = useChurrasDetail();

  return (
    <Wrapper>
      <BBqCard width={"100%"} height={"auto"}>
        <Container>
          <Header>
            <HeaderInfos>
              <BBqTypography tag={"h2"} size={"subtitle"}>
                01/12
              </BBqTypography>
              <BBqTypography
                tag={"span"}
                size={"supertitle"}
                weight={"regular"}
              >
                Níver do Gui
              </BBqTypography>
            </HeaderInfos>
            <DetailsWrapper>
              <Detail>
                <BBqIcon name={"contact"} />{" "}
                <BBqTypography tag={"span"} weight={"light"}>
                  15
                </BBqTypography>
              </Detail>

              <Detail>
                <BBqIcon name={"moneySign"} />{" "}
                <BBqTypography tag={"span"} weight={"light"}>
                  R$280
                </BBqTypography>
              </Detail>
            </DetailsWrapper>
          </Header>
          <List>
            {currentChurras.persons?.map((person: TChurrasPerson) => (
              <ListItem key={person.id} onClick={() => check(person.id)}>
                <NameContainer>
                  <BBqRadio isActive={checked[person.id]} />
                  <BBqTypography
                    tag={"span"}
                    size={"description"}
                    weight={"regular"}
                  >
                    {person.name}
                  </BBqTypography>
                </NameContainer>
                <ContributionWrapper isChecked={checked[person.id]}>
                  <BBqTypography
                    tag={"span"}
                    size={"description"}
                    weight={"regular"}
                  >
                    {person.contribution}
                  </BBqTypography>
                </ContributionWrapper>
              </ListItem>
            ))}
          </List>
        </Container>
      </BBqCard>
    </Wrapper>
  );
}
