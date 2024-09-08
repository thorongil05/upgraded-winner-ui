import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolePipe } from './pipes/RolePipe';
import { TeamPipe } from './pipes/TeamPipe';
import { StartingModule } from './features/starting/starting.module';

@NgModule({
  declarations: [AppComponent, RolePipe, TeamPipe],
  imports: [BrowserModule, AppRoutingModule, StartingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
