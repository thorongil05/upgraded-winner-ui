import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTableComponent } from './player-table/player-table.component';
import { StartingCarouselComponent } from './starting-carousel/starting-carousel.component';
import { RolePipe } from './pipes/RolePipe';
import { TeamPipe } from './pipes/TeamPipe';
import { StartingMainComponent } from './starting-main/starting-main.component';
import { RulePipe } from './pipes/RulePipe';

@NgModule({
  declarations: [
    PlayerTableComponent,
    StartingCarouselComponent,
    RolePipe,
    TeamPipe,
    RulePipe,
    StartingMainComponent,
  ],
  imports: [CommonModule],
  exports: [StartingMainComponent],
})
export class StartingModule {}
