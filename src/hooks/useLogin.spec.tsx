import { renderHook } from "@testing-library/react";
import { useLogin } from "@/hooks/useLogin";
import { FormEvent } from "react";

const mockRouter = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockRouter,
  }),
}));

it("redirects user on click", () => {
  const {
    result: {
      current: { login },
    },
  } = renderHook(useLogin);

  const event = {
    preventDefault: jest.fn(),
  };

  login(event as unknown as FormEvent<HTMLFormElement>);

  expect(mockRouter).toHaveBeenCalled();
});
