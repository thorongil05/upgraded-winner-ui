import { Component } from '@angular/core';
import { PlayerService } from '../service/player.service';
import { Player } from '../player';
import { Rule } from '../compliance';

@Component({
  selector: 'app-starting-main',
  templateUrl: './starting-main.component.html',
  styleUrl: './starting-main.component.scss',
})
export class StartingMainComponent {
  startingEleven: Player[] = [];
  bench: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.startingEleven = this.playerService.getStarting();
    this.bench = this.playerService.getBench();
  }

  isStartingOk(): [boolean, Rule] {
    return this.playerService.isCompliant(this.startingEleven, this.bench);
  }
}
