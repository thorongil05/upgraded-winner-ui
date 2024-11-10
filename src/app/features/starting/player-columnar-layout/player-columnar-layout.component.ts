import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player, Role } from '../player';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

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

  onDropDefender(event: CdkDragDrop<Player[]>) {
    let newDefender: Player = event.previousContainer.data[event.previousIndex];
    newDefender.role = Role.DEFENDER;
  }

  onDropMidfielder(event: CdkDragDrop<Player[]>) {
    let newMidfielder: Player =
      event.previousContainer.data[event.previousIndex];
    newMidfielder.role = Role.MIDFIELDER;
  }
  onDropStricker(event: CdkDragDrop<Player[]>) {
    let newStricker: Player = event.previousContainer.data[event.previousIndex];
    newStricker.role = Role.STRICKER;
  }
}
