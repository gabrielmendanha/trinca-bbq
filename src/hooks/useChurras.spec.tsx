import { renderHook } from "@testing-library/react";
import { useChurras } from "@/hooks/useChurras";

const mockRouter = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockRouter,
  }),
}));

it("redirects user on click", () => {
  const {
    result: {
      current: { navigateChurrasDetails },
    },
  } = renderHook(useChurras);

  navigateChurrasDetails(1);

  expect(mockRouter).toBeCalledWith("/list/1");
});
