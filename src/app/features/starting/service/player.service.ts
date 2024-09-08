import { Injectable } from '@angular/core';
import { Player, Role, Team } from '../player';
import { Rule } from '../compliance';

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

  isCompliant(starting: Player[], bench: Player[]): [boolean, Rule] {
    let allPlayers = starting.concat(bench);
    let goalkeepers = allPlayers
      .map((element) => element.role)
      .filter((role) => role == Role.GOALKEEPER);
    if (goalkeepers.length != 1) return [false, Rule.ONLY_ONE_GOALKEEPER];
    let teams = starting.map((element) => element.team);
    if (new Set(teams).size != teams.length) {
      return [false, Rule.ONLY_ONE_PLAYER_PER_TEAM];
    }
    return [true, Rule.UNDEF];
  }
}
