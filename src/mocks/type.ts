export interface TChurras {
  id: number;
  date: string;
  description: string;
  invitees: number;
  total: string;
  persons: TChurrasPerson[];
}

export interface TChurrasPerson {
  id: number;
  name: string;
  contribution: string;
}
