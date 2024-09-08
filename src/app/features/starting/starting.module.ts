import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTableComponent } from './player-table/player-table.component';
import { RolePipe } from './pipes/RolePipe';
import { TeamPipe } from './pipes/TeamPipe';

@NgModule({
  declarations: [PlayerTableComponent, RolePipe, TeamPipe],
  imports: [CommonModule],
  exports: [PlayerTableComponent],
})
export class StartingModule {}
