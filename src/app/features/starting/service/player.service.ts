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
        name: '-',
        team: Team.JUVENTUS,
        role: Role.GOALKEEPER,
      },
      {
        name: 'Daniliuc',
        team: Team.VERONA,
        role: Role.DEFENDER,
      },
      {
        name: 'Tavares',
        team: Team.LAZIO,
        role: Role.DEFENDER,
      },
      {
        name: 'Mina',
        team: Team.CAGLIARI,
        role: Role.DEFENDER,
      },
      {
        name: 'Coulibaly',
        team: Team.PARMA,
        role: Role.DEFENDER,
      },
      {
        name: 'Colpani',
        team: Team.FIORENTINA,
        role: Role.MIDFIELDER,
      },
      {
        name: 'Soule',
        team: Team.ROMA,
        role: Role.MIDFIELDER,
      },
      {
        name: 'McTominay',
        team: Team.NAPOLI,
        role: Role.MIDFIELDER,
      },
      {
        name: 'Retegui',
        team: Team.ATALANTA,
        role: Role.STRICKER,
      },
      {
        name: 'Lautaro',
        team: Team.INTER,
        role: Role.STRICKER,
      },
      {
        name: 'Abraham',
        team: Team.MILAN,
        role: Role.STRICKER,
      },
    ];
  }

  getBench(): Player[] {
    return [
      {
        name: 'Candela',
        team: Team.VENEZIA,
        role: Role.DEFENDER,
      },
      {
        name: 'Masina',
        team: Team.TORINO,
        role: Role.DEFENDER,
      },
      {
        name: 'Paz',
        team: Team.COMO,
        role: Role.MIDFIELDER,
      },
      {
        name: 'Lovric',
        team: Team.UDINESE,
        role: Role.MIDFIELDER,
      },
      {
        name: 'Kristovic',
        team: Team.LECCE,
        role: Role.STRICKER,
      },
      {
        name: 'Castro',
        team: Team.BOLOGNA,
        role: Role.STRICKER,
      },
    ];
  }

  isCompliant(starting: Player[], bench: Player[]): [boolean, Rule] {
    let allPlayers = starting.concat(bench);
    if (allPlayers.length != 17) {
      return [false, Rule.TOTAL_NUMBER_OF_PLAYERS];
    }
    let goalkeepers = allPlayers
      .map((element) => element.role)
      .filter((role) => role == Role.GOALKEEPER);
    if (goalkeepers.length != 1) return [false, Rule.ONLY_ONE_GOALKEEPER];
    let startingRolesMap = new Map<Role, number>();
    starting
      .map((element) => element.role)
      .filter((role) => role != Role.GOALKEEPER)
      .forEach((element) => {
        let current = startingRolesMap.get(element);
        if (!current) {
          current = 0;
        }
        startingRolesMap.set(element, current + 1);
      });
    if (!this.isLineUpCompliant(startingRolesMap)) {
      return [false, Rule.LINE_UP_COMPLIANT];
    }
    let teams = starting.map((element) => element.team);
    if (new Set(teams).size != teams.length) {
      return [false, Rule.ONLY_ONE_PLAYER_PER_TEAM];
    }
    let benchRoleCountMap = new Map<Role, number>();
    bench.forEach((element) => {
      let current = benchRoleCountMap.get(element.role);
      if (!current) {
        current = 0;
      }
      benchRoleCountMap.set(element.role, current + 1);
    });
    if (
      Array.from(benchRoleCountMap.values()).some((element) => element != 2)
    ) {
      return [false, Rule.BENCH_NUMBER];
    }
    return [true, Rule.UNDEF];
  }

  private isLineUpCompliant(lineup: Map<Role, number>): boolean {
    let defenders = lineup.get(Role.DEFENDER) || 0;
    let midfielders = lineup.get(Role.MIDFIELDER) || 0;
    let strickers = lineup.get(Role.STRICKER) || 0;
    let total = defenders + midfielders + strickers;
    if (total != 10) return false;
    if (defenders == 4) {
      // 4-4-2, 4-3-3, 4-5-1
      return (
        (midfielders == 3 && strickers == 3) ||
        (midfielders == 4 && strickers == 2) ||
        (midfielders == 5 && strickers == 1)
      );
    }
    if (defenders == 3) {
      // 3-5-2, 3-4-3
      return (
        (midfielders == 5 && strickers == 2) ||
        (midfielders == 4 && strickers == 3)
      );
    }
    return false;
  }
}
