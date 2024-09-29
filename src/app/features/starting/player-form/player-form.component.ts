import { Component, Inject } from '@angular/core';
import { Player, Role, Team } from '../player';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.scss',
})
export class PlayerFormComponent {
  selectedPlayer: Player;
  selectableRoles: Role[] = [Role.DEFENDER, Role.MIDFIELDER, Role.STRICKER];
  selectableTeams: Team[] = [
    Team.ATALANTA,
    Team.BOLOGNA,
    Team.CAGLIARI,
    Team.COMO,
    Team.FIORENTINA,
    Team.GENOA,
    Team.INTER,
    Team.JUVENTUS,
    Team.LAZIO,
    Team.LECCE,
    Team.MILAN,
    Team.MONZA,
    Team.NAPOLI,
    Team.PARMA,
    Team.ROMA,
    Team.TORINO,
    Team.UDINESE,
    Team.VENEZIA,
    Team.VERONA,
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { player: Player }) {
    this.selectedPlayer = data.player;
  }

  submit() {}
}
