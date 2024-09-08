import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../service/player.service';

@Component({
  selector: 'app-starting-carousel',
  templateUrl: './starting-carousel.component.html',
  styleUrl: './starting-carousel.component.scss',
})
export class StartingCarouselComponent implements OnInit {
  startingEleven: Player[] = [];
  bench: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.startingEleven = this.playerService.getStarting();
    this.bench = this.playerService.getBench();
  }
}
