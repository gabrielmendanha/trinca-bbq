"use client";

import { ChurrasContext } from "@/context/churras";
import { Churras } from "@/mocks/churras";
import { ReactNode, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const [churras, setChurras] = useState(Churras);

  return (
    <ChurrasContext.Provider value={{ churras, setChurras }}>
      {children}
    </ChurrasContext.Provider>
  );
}
