"use client";

import {
  ChurrasIconWrapper,
  Content,
  Detail,
  FlexDetailDiv,
  FlexDiv,
  NewChurras,
  Wrapper,
} from "@/app/(churras)/list/styled";
import BBqCard from "@/components/card";
import BBqTypography from "@/components/typography";
import BBqIcon from "@/components/icon";
import { Churras } from "@/mocks/churras";
import { useChurras } from "@/hooks/useChurras";
import { TChurras } from "@/mocks/type";

export default function List() {
  const { displayChurrasDetails } = useChurras();

  return (
    <>
      <Wrapper>
        {Churras.map((item: TChurras) => (
          <BBqCard
            key={item.id}
            width={"282px"}
            height={"192px"}
            onClick={() => displayChurrasDetails(item.id)}
          >
            <Content>
              <FlexDiv>
                <BBqTypography tag={"h2"}>{item.date}</BBqTypography>
                <BBqTypography tag={"span"} weight={"regular"}>
                  {item.description}
                </BBqTypography>
              </FlexDiv>
              <FlexDetailDiv>
                <Detail>
                  <BBqIcon name={"contact"} />{" "}
                  <BBqTypography tag={"span"} weight={"light"}>
                    {item.invitees}
                  </BBqTypography>
                </Detail>
                <Detail>
                  <BBqIcon name={"moneySign"} />{" "}
                  <BBqTypography tag={"span"} weight={"light"}>
                    {item.total}
                  </BBqTypography>
                </Detail>
              </FlexDetailDiv>
            </Content>
          </BBqCard>
        ))}

        <NewChurras>
          <ChurrasIconWrapper>
            <BBqIcon name={"bbq"} />
          </ChurrasIconWrapper>
          <BBqTypography tag={"span"} weight={"regular"}>
            Adicionar Churras
          </BBqTypography>
        </NewChurras>
      </Wrapper>
    </>
  );
}
