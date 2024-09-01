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
}

export interface Player {
  name: string;
  team: Team;
  role: Role;
}
