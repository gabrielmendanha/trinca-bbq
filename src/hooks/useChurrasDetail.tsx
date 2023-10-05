"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Churras } from "@/mocks/churras";
import { TChurras } from "@/mocks/type";

export function useChurrasDetail() {
  const params = useParams();
  const [checked, setChecked] = useState([false]);
  const [currentChurras, setCurrentChurras] = useState({} as TChurras);

  useEffect(() => {
    if (params.slug) {
      const id = params.slug;
      const churras = Churras.find((item: TChurras) => {
        return item.id === +id;
      });

      setCurrentChurras(churras as TChurras);
    }
  }, [params.slug]);

  const check = (personId: number) => {
    checked[personId] = !checked[personId];
    setChecked([...checked]);
  };

  return { check, checked, currentChurras };
}
