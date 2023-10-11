import { TChurras } from "@/mocks/type";

export const mockChurras = [
  {
    id: 1,
    date: "01/12",
    description: "Níver do Gui",
    invitees: 3,
    total: 40,
    persons: [
      {
        id: 1,
        name: "Alice",
        contribution: 20.0,
        hasContributed: true,
      },
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
];

export const Churras: TChurras[] = [
  {
    id: 1,
    date: "01/12",
    description: "Níver do Gui",
    invitees: 3,
    total: 40,
    persons: [
      {
        id: 1,
        name: "Alice",
        contribution: 20.0,
        hasContributed: true,
      },
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
  {
    id: 2,
    date: "23/12",
    description: "Final de Ano",
    invitees: 5,
    total: 20,
    persons: [
      {
        id: 1,
        name: "Alice",
        contribution: 20.0,
        hasContributed: false,
      },
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
        name: "Alice",
        contribution: 20.0,
        hasContributed: false,
      },
      {
        id: 5,
        name: "Alice",
        contribution: 20.0,
        hasContributed: false,
      },
    ],
  },
  {
    id: 3,
    date: "06/01",
    description: "Sem motivo",
    invitees: 1,
    total: 0,
    persons: [
      {
        id: 1,
        name: "Alice",
        contribution: 20.0,
        hasContributed: false,
      },
    ],
  },
];
