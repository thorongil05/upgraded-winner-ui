import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTableComponent } from './player-table/player-table.component';
import { StartingCarouselComponent } from './starting-carousel/starting-carousel.component';
import { RolePipe } from './pipes/RolePipe';
import { TeamPipe } from './pipes/TeamPipe';

@NgModule({
  declarations: [
    PlayerTableComponent,
    StartingCarouselComponent,
    RolePipe,
    TeamPipe,
  ],
  imports: [CommonModule],
  exports: [StartingCarouselComponent],
})
export class StartingModule {}
