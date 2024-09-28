import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../service/player.service';
import { MatDialog } from '@angular/material/dialog';
import { PlayerFormComponent } from '../player-form/player-form.component';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrl: './player-table.component.scss',
})
export class PlayerTableComponent {
  @Input() players: Player[] = [];

  constructor(private dialog: MatDialog) {}

  openDialog(player: Player) {
    console.log('Opening form for player', player);
    const dialogRef = this.dialog.open(PlayerFormComponent, {
      data: {
        player: player,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
