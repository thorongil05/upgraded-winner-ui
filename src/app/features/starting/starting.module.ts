import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTableComponent } from './player-table/player-table.component';
import { RolePipe } from './pipes/RolePipe';
import { TeamPipe } from './pipes/TeamPipe';
import { StartingMainComponent } from './starting-main/starting-main.component';
import { RulePipe } from './pipes/RulePipe';
import { MatDialogModule } from '@angular/material/dialog';
import { PlayerFormComponent } from './player-form/player-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  declarations: [
    PlayerTableComponent,
    RolePipe,
    TeamPipe,
    RulePipe,
    StartingMainComponent,
    PlayerFormComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  exports: [StartingMainComponent],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class StartingModule {}
