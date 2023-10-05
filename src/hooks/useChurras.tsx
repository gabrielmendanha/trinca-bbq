"use client";

import { useRouter } from "next/navigation";

export function useChurras() {
  const router = useRouter();

  const displayChurrasDetails = (churrasId: number) => {
    router.push(`/list/${churrasId}`);
  };

  return { displayChurrasDetails };
}
