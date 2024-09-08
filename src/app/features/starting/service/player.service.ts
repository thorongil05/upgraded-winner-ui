import { Injectable } from '@angular/core';
import { Player, Role, Team } from '../player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  getStarting(): Player[] {
    return [
      {
        name: 'Posch',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Posch',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Posch',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Posch',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Posch',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Posch',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Posch',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Posch',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Posch',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Posch',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
    ];
  }

  getBench(): Player[] {
    return [
      {
        name: 'Giocatore Random',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Giocatore Random',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Giocatore Random',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
      {
        name: 'Giocatore Random',
        team: Team.BOLOGNA,
        role: Role.DEFENDER,
      },
    ];
  }
}
