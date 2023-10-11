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
import { useChurras } from "@/hooks/useChurras";
import { TChurras } from "@/mocks/type";

export default function List() {
  const { churras, navigateChurrasDetails, navigateChurrasCreate } =
    useChurras();

  return (
    <>
      <Wrapper>
        {churras.map((item: TChurras) => (
          <BBqCard
            key={item.id}
            width={"282px"}
            height={"192px"}
            hasCursor
            onClick={() => navigateChurrasDetails(item.id)}
          >
            <Content>
              <FlexDiv>
                <BBqTypography tag={"h2"} size={"subtitle"}>
                  {item.date}
                </BBqTypography>
                <BBqTypography
                  tag={"span"}
                  weight={"regular"}
                  size={"description"}
                >
                  {item.description}
                </BBqTypography>
              </FlexDiv>
              <FlexDetailDiv>
                <Detail>
                  <BBqIcon name={"contact"} />{" "}
                  <BBqTypography
                    tag={"span"}
                    weight={"light"}
                    size={"description"}
                  >
                    {item.invitees}
                  </BBqTypography>
                </Detail>
                <Detail>
                  <BBqIcon name={"moneySign"} />{" "}
                  <BBqTypography
                    tag={"span"}
                    weight={"light"}
                    size={"description"}
                  >
                    {item.total}
                  </BBqTypography>
                </Detail>
              </FlexDetailDiv>
            </Content>
          </BBqCard>
        ))}

        <NewChurras onClick={navigateChurrasCreate}>
          <ChurrasIconWrapper>
            <BBqIcon name={"bbq"} />
          </ChurrasIconWrapper>
          <BBqTypography tag={"span"} weight={"regular"} size={"description"}>
            Adicionar Churras
          </BBqTypography>
        </NewChurras>
      </Wrapper>
    </>
  );
}
