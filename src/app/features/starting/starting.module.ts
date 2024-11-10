import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { DragDropModule } from '@angular/cdk/drag-drop';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { PlayerColumnarLayoutComponent } from './player-columnar-layout/player-columnar-layout.component';
import { PlayerColumnarCardComponent } from './player-columnar-card/player-columnar-card.component';

@NgModule({
  declarations: [
    RolePipe,
    TeamPipe,
    RulePipe,
    StartingMainComponent,
    PlayerFormComponent,
    PlayerColumnarLayoutComponent,
    PlayerColumnarCardComponent,
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
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    DragDropModule,
  ],
  exports: [StartingMainComponent],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class StartingModule {}
