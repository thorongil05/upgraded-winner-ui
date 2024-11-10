import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player, Role } from '../player';

@Component({
  selector: 'app-player-columnar-layout',
  templateUrl: './player-columnar-layout.component.html',
  styleUrl: './player-columnar-layout.component.scss',
})
export class PlayerColumnarLayoutComponent {
  @Input() players: Player[] = [];

  @Output() onPlayerUpdatedEvent = new EventEmitter<void>();

  constructor() {}

  getGoalkeeper(): Player {
    return this.players.filter((player) => player.role == Role.GOALKEEPER)[0];
  }

  getDefenders(): Player[] {
    return this.players.filter((player) => player.role == Role.DEFENDER);
  }

  getMidfielders(): Player[] {
    return this.players.filter((player) => player.role == Role.MIDFIELDER);
  }

  getStrickers(): Player[] {
    return this.players.filter((player) => player.role == Role.STRICKER);
  }

  emitPlayerUpdateEvent() {
    this.onPlayerUpdatedEvent.emit();
  }
}
