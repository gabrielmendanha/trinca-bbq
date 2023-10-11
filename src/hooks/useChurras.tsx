"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Dayjs } from "dayjs";
import { ChurrasContext } from "@/context/churras";

export function useChurras() {
  const { churras, setChurras } = useContext(ChurrasContext);
  const [title, setTitle] = useState("");
  const [extraData, setExtraData] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);
  const router = useRouter();

  const navigateChurrasDetails = (churrasId: number) => {
    router.push(`/list/${churrasId}`);
  };

  const navigateChurrasCreate = () => {
    router.push("/create");
  };

  const navigateChurrasList = () => {
    router.push("/list/");
  };

  const createChurras = () => {
    churras.push({
      id: churras[churras.length - 1].id + 1,
      description: title ? title : "Sem motivo",
      date: date
        ? date?.toDate().toLocaleDateString()
        : new Date(Date.now()).toLocaleDateString(),
      invitees: 0,
      total: 0,
      persons: [],
    });

    setChurras([...churras]);

    navigateChurrasList();
  };

  return {
    navigateChurrasDetails,
    navigateChurrasCreate,
    createChurras,
    churras,
    title,
    extraData,
    date,
    setDate,
    setExtraData,
    setTitle,
  };
}
