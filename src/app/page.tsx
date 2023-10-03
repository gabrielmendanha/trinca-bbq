"use client";

import BBqButton from "@/components/button";
import BBqInput from "@/components/input";
import { Form, FormWrapper } from "@/app/styled";
import { useLogin } from "@/hooks/useLogin";

export default function Login() {
  const { login } = useLogin();

  return (
    <FormWrapper>
      <Form onSubmit={login}>
        <BBqInput
          placeholder={"e-mail"}
          height={"50px"}
          margin={"16px 0 35px 0"}
        />
        <BBqInput
          placeholder={"senha"}
          height={"50px"}
          margin={"16px 0 35px 0"}
        />
        <BBqButton title={"Entrar"} height={"50px"} type={"submit"} />
      </Form>
    </FormWrapper>
  );
}
