export interface TChurras {
  id: number;
  date: string | undefined;
  description: string;
  invitees: number;
  total: number;
  persons: TChurrasPerson[];
}

export interface TChurrasPerson {
  id: number;
  name: string;
  contribution: number;
  hasContributed: boolean;
}
