import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../service/player.service';

@Component({
  selector: 'app-starting-carousel',
  templateUrl: './starting-carousel.component.html',
  styleUrl: './starting-carousel.component.scss',
})
export class StartingCarouselComponent {
  @Input() startingEleven: Player[] = [];
  @Input() bench: Player[] = [];

  @Output() onStartingElementUpdated = new EventEmitter<void>();

  emitElemetnUpdatedEvent() {
    console.log('Emitting element updated event');
    this.onStartingElementUpdated.emit();
  }
}
