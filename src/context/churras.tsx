"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { TChurras } from "@/mocks/type";

export const ChurrasContext = createContext<{
  churras: TChurras[];
  setChurras: Dispatch<SetStateAction<TChurras[]>>;
}>({ churras: [], setChurras: () => [] });
