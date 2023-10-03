import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export function useLogin() {
  const router = useRouter();

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/list");
  };

  return { login };
}
