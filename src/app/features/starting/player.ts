export enum Role {
  GOALKEEPER,
  DEFENDER,
  MIDFIELDER,
  STRICKER,
}

export enum Team {
  BOLOGNA,
  JUVENTUS,
  INTER,
  MILAN,
  GENOA,
  FIORENTINA,
  VERONA,
  LAZIO,
  ROMA,
  MONZA,
  NAPOLI,
  CAGLIARI,
  VENEZIA,
  TORINO,
  PARMA,
  LECCE,
  UDINESE,
  ATALANTA,
  COMO,
}

export interface Player {
  name: string;
  team: Team;
  role: Role;
}
