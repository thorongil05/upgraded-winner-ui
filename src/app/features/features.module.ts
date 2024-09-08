import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTableComponent } from './starting/player-table/player-table.component';
import { RolePipe } from './starting/pipes/RolePipe';
import { TeamPipe } from './starting/pipes/TeamPipe';

@NgModule({
  declarations: [PlayerTableComponent, RolePipe, TeamPipe],
  imports: [CommonModule],
  exports: [PlayerTableComponent],
})
export class FeaturesModule {}
