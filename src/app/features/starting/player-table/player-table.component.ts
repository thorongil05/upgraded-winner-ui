import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../service/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrl: './player-table.component.scss',
})
export class PlayerTableComponent {
  @Input() players: Player[] = [];

  constructor() {}
}
