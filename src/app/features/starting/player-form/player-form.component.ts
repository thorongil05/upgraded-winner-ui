import { Component, Inject } from '@angular/core';
import { Player, Role, Team } from '../player';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.scss',
})
export class PlayerFormComponent {
  playerFormGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    role: new FormControl(),
    team: new FormControl(),
  });

  selectedPlayer: Player;
  isGoalkeeper = false;
  selectableRoles: Role[] = [Role.DEFENDER, Role.MIDFIELDER, Role.STRICKER];
  selectableTeams: Team[] = [
    Team.ATALANTA,
    Team.BOLOGNA,
    Team.CAGLIARI,
    Team.COMO,
    Team.EMPOLI,
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
    this.isGoalkeeper = this.selectedPlayer.role == Role.GOALKEEPER;
    this.playerFormGroup.setValue({
      name: this.selectedPlayer.name,
      role: this.selectedPlayer.role,
      team: this.selectedPlayer.team,
    });
  }

  save() {
    this.selectedPlayer.name = this.playerFormGroup.value['name'];
    this.selectedPlayer.role = this.playerFormGroup.value['role'];
    this.selectedPlayer.team = this.playerFormGroup.value['team'];
  }
}
