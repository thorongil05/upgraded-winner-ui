import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTableComponent } from './player-table/player-table.component';
import { StartingCarouselComponent } from './starting-carousel/starting-carousel.component';

@NgModule({
  declarations: [PlayerTableComponent, StartingCarouselComponent],
  imports: [CommonModule],
  exports: [StartingCarouselComponent],
})
export class StartingModule {}
