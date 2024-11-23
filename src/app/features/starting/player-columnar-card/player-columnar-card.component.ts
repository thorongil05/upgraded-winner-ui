import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player, Role, Team } from '../player';
import { PlayerFormComponent } from '../player-form/player-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-player-columnar-card',
  templateUrl: './player-columnar-card.component.html',
  styleUrl: './player-columnar-card.component.scss',
})
export class PlayerColumnarCardComponent {
  @Input() player: Player | undefined;
  @Output() onPlayerUpdatedEvent = new EventEmitter<void>();

  constructor(private readonly dialog: MatDialog) {}

  isGoalkeeper() {
    return this.player?.role == Role.GOALKEEPER;
  }

  isDefender() {
    return this.player?.role == Role.DEFENDER;
  }

  isMidfielder() {
    return this.player?.role == Role.MIDFIELDER;
  }

  isStricker() {
    return this.player?.role == Role.STRICKER;
  }

  openDialog(player: Player | undefined) {
    if (!player) return;
    console.log('Opening form for player', player);
    const dialogRef = this.dialog.open(PlayerFormComponent, {
      data: {
        player: player,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined && !(result instanceof String)) {
        player = result;
        console.log('Emitting dialog closed event');
        this.onPlayerUpdatedEvent.emit();
      }
    });
  }
}
