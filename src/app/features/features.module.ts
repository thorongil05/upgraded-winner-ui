import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTableComponent } from './starting/player-table/player-table.component';

@NgModule({
  declarations: [PlayerTableComponent],
  imports: [CommonModule],
  exports: [PlayerTableComponent],
})
export class FeaturesModule {}
