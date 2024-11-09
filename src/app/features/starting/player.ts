export enum Role {
  GOALKEEPER = 'GOALKEEPER',
  DEFENDER = 'DEFENDER',
  MIDFIELDER = 'MIDFIELDER',
  STRICKER = 'STRICKER',
}

export enum Team {
  BOLOGNA = 'Bologna',
  JUVENTUS = 'Juventus',
  INTER = 'Inter',
  MILAN = 'Milan',
  GENOA = 'Genoa',
  EMPOLI = 'Empoli',
  FIORENTINA = 'Fiorentina',
  VERONA = 'Verona',
  LAZIO = 'Lazio',
  ROMA = 'Roma',
  MONZA = 'Monza',
  NAPOLI = 'Napoli',
  CAGLIARI = 'Cagliari',
  VENEZIA = 'Venezia',
  TORINO = 'Torino',
  PARMA = 'Parma',
  LECCE = 'Lecce',
  UDINESE = 'Udinese',
  ATALANTA = 'Atalanta',
  COMO = 'Como',
}

export interface Player {
  name: string;
  team: Team;
  role: Role;
}
