import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerTableComponent } from './features/starting/player-table/player-table.component';
import { RolePipe } from './features/starting/pipes/RolePipe';
import { TeamPipe } from './features/starting/pipes/TeamPipe';

@NgModule({
  declarations: [AppComponent, PlayerTableComponent],
  imports: [BrowserModule, AppRoutingModule, RolePipe, TeamPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
