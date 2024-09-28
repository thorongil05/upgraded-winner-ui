import { Component, Inject } from '@angular/core';
import { Player } from '../player';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.scss',
})
export class PlayerFormComponent {
  selectedPlayer: Player;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { player: Player }) {
    this.selectedPlayer = data.player;
  }

  submit() {}
}
