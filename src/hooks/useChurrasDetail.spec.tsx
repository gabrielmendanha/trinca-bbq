import { renderHook, waitFor } from "@testing-library/react";
import { useChurrasDetail } from "@/hooks/useChurrasDetail";
import { mockChurras } from "@/mocks/churras";
import { act } from "react-dom/test-utils";
import { beforeEach } from "@jest/globals";

const mockSetChurras = jest.fn();

jest.mock("react", () => {
  const ActualReact = jest.requireActual("react");
  return {
    ...ActualReact,
    useContext: () => ({
      churras: mockChurras,
      setChurras: mockSetChurras,
    }),
  };
});

jest.mock("next/navigation", () => ({
  useParams: () => ({
    slug: 1,
  }),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("details of churras", () => {
  it("delete person", () => {
    const {
      result: {
        current: { deletePerson },
      },
    } = renderHook(useChurrasDetail);

    act(() => {
      deletePerson(1);
    });

    expect(mockSetChurras).toBeCalledWith([
      {
        id: 1,
        date: "01/12",
        description: "Níver do Gui",
        invitees: 2,
        total: 20,
        persons: [
          {
            id: 2,
            name: "Alice",
            contribution: 20.0,
            hasContributed: false,
          },
          {
            id: 3,
            name: "Alice",
            contribution: 20.0,
            hasContributed: true,
          },
        ],
      },
    ]);
  });

  it("add person", () => {
    const {
      result: {
        current: { addPerson },
      },
    } = renderHook(useChurrasDetail);

    act(() => {
      addPerson();
    });

    expect(mockSetChurras).toBeCalledWith([
      {
        id: 1,
        date: "01/12",
        description: "Níver do Gui",
        invitees: 3,
        total: 20,
        persons: [
          {
            id: 2,
            name: "Alice",
            contribution: 20.0,
            hasContributed: false,
          },
          {
            id: 3,
            name: "Alice",
            contribution: 20.0,
            hasContributed: true,
          },
          {
            id: 4,
            name: "Convidado 4",
            contribution: 20.0,
            hasContributed: false,
          },
        ],
      },
    ]);
  });

  it("add person with drinks", () => {
    const {
      result: {
        current: { addPerson, setWithDrinks },
      },
    } = renderHook(useChurrasDetail);

    act(() => {
      setWithDrinks(true);
      addPerson();
    });

    waitFor(() => {
      expect(mockSetChurras).toBeCalledWith([
        {
          id: 1,
          date: "01/12",
          description: "Níver do Gui",
          invitees: 4,
          total: 20,
          persons: [
            {
              id: 2,
              name: "Alice",
              contribution: 20.0,
              hasContributed: false,
            },
            {
              id: 3,
              name: "Alice",
              contribution: 20.0,
              hasContributed: true,
            },
            {
              id: 4,
              name: "Convidado 4",
              contribution: 20.0,
              hasContributed: false,
            },
            {
              id: 5,
              name: "Convidado 5",
              contribution: 50,
              hasContributed: false,
            },
          ],
        },
      ]);
    });
  });

  it("mark person as contributed", () => {
    const {
      result: {
        current: { check },
      },
    } = renderHook(useChurrasDetail);

    check(5);

    waitFor(() => {
      expect(mockSetChurras).toBeCalledWith([
        {
          id: 1,
          date: "01/12",
          description: "Níver do Gui",
          invitees: 4,
          total: 70,
          persons: [
            {
              id: 2,
              name: "Alice",
              contribution: 20.0,
              hasContributed: false,
            },
            {
              id: 3,
              name: "Alice",
              contribution: 20.0,
              hasContributed: true,
            },
            {
              id: 4,
              name: "Convidado 4",
              contribution: 20.0,
              hasContributed: false,
            },
            {
              id: 5,
              name: "Convidado 5",
              contribution: 50,
              hasContributed: true,
            },
          ],
        },
      ]);
    });
  });

  it("unmarks person as contributed", () => {
    const {
      result: {
        current: { check },
      },
    } = renderHook(useChurrasDetail);

    check(3);

    waitFor(() => {
      expect(mockSetChurras).toBeCalledWith([
        {
          id: 1,
          date: "01/12",
          description: "Níver do Gui",
          invitees: 4,
          total: 50,
          persons: [
            {
              id: 2,
              name: "Alice",
              contribution: 20.0,
              hasContributed: false,
            },
            {
              id: 3,
              name: "Alice",
              contribution: 20.0,
              hasContributed: false,
            },
            {
              id: 4,
              name: "Convidado 4",
              contribution: 20.0,
              hasContributed: false,
            },
            {
              id: 5,
              name: "Convidado 5",
              contribution: 50,
              hasContributed: true,
            },
          ],
        },
      ]);
    });
  });
});
