"use client";

import BBqCard from "@/components/card";
import {
  Container,
  ContributionWrapper,
  CreatePerson,
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
import {
  FormControlLabel,
  IconButton,
  InputAdornment,
  Switch,
  TextField,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";

export default function Details() {
  const {
    check,
    currentChurras,
    name,
    setName,
    contrib,
    withDrinks,
    setWithDrinks,
    addPerson,
    deletePerson,
  } = useChurrasDetail();

  return (
    <Wrapper>
      <BBqCard width={"100%"} height={"auto"}>
        <Container>
          <Header>
            <HeaderInfos>
              <BBqTypography tag={"h2"} size={"subtitle"}>
                {currentChurras?.date}
              </BBqTypography>
              <BBqTypography
                tag={"span"}
                size={"supertitle"}
                weight={"regular"}
              >
                {currentChurras?.description}
              </BBqTypography>
            </HeaderInfos>
            <DetailsWrapper>
              <Detail>
                <BBqIcon name={"contact"} />{" "}
                <BBqTypography tag={"span"} weight={"light"}>
                  {currentChurras?.invitees}
                </BBqTypography>
              </Detail>

              <Detail>
                <BBqIcon name={"moneySign"} />{" "}
                <BBqTypography tag={"span"} weight={"light"}>
                  R${currentChurras?.total}
                </BBqTypography>
              </Detail>
            </DetailsWrapper>
          </Header>
          <CreatePerson>
            <TextField
              value={name}
              onChange={(event) => setName(event.target.value)}
              label="Nome"
              variant="standard"
              fullWidth
            />
            <TextField
              value={contrib}
              disabled
              label="Contribuição"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={withDrinks}
                  onChange={(event) => setWithDrinks(event.target.checked)}
                />
              }
              label="Inclui bebida?"
            />
            <IconButton onClick={addPerson}>
              <Add />
            </IconButton>
          </CreatePerson>
          <List>
            {currentChurras?.persons
              ?.toReversed()
              .map((person: TChurrasPerson) => (
                <ListItem key={person.id}>
                  <NameContainer onClick={() => check(person.id)}>
                    <BBqRadio isActive={person.hasContributed} />
                    <BBqTypography
                      tag={"span"}
                      size={"description"}
                      weight={"regular"}
                    >
                      {person.name}
                    </BBqTypography>
                  </NameContainer>
                  <ContributionWrapper isChecked={person.hasContributed}>
                    <BBqTypography
                      tag={"span"}
                      size={"description"}
                      weight={"regular"}
                    >
                      R${person.contribution}
                    </BBqTypography>
                    <IconButton onClick={() => deletePerson(person.id)}>
                      <Delete />
                    </IconButton>
                  </ContributionWrapper>
                </ListItem>
              ))}
          </List>
        </Container>
      </BBqCard>
    </Wrapper>
  );
}
