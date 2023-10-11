"use client";

import { useChurras } from "@/hooks/useChurras";
import BBqInput from "@/components/input";
import BBqButton from "@/components/button";
import {
  Container,
  DateWrapper,
  FormWrapper,
} from "@/app/(churras)/create/styled";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ChangeEvent } from "react";
import { Dayjs } from "dayjs";

export default function Create() {
  const {
    createChurras,
    date,
    setDate,
    setTitle,
    extraData,
    setExtraData,
    title,
  } = useChurras();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
          <FormWrapper>
            <BBqInput
              placeholder={"Descrição"}
              height={"50px"}
              value={title}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setTitle(event.target.value)
              }
            />
            <BBqInput
              placeholder={"Informações adicionais"}
              height={"50px"}
              value={extraData}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setExtraData(event.target.value)
              }
            />

            <DateWrapper>
              <DatePicker
                label={"Data"}
                value={date}
                onChange={(value: Dayjs | null) => setDate(value)}
                disablePast
              />
            </DateWrapper>
            <BBqButton
              title={"Criar"}
              height={"50px"}
              type={"button"}
              onClick={createChurras}
            />
          </FormWrapper>
        </Container>
      </LocalizationProvider>
    </>
  );
}
