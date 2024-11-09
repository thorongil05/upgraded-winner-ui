import { Component } from '@angular/core';
import { PlayerService } from '../service/player.service';
import { Player } from '../player';
import { ValidationService } from '../service/validation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidationResult } from '../validation-result';

@Component({
  selector: 'app-starting-main',
  templateUrl: './starting-main.component.html',
  styleUrl: './starting-main.component.scss',
})
export class StartingMainComponent {
  startingEleven: Player[] = [];
  bench: Player[] = [];
  isStartingOk: boolean = true;
  validationErrorList: string[] = [];

  constructor(
    private readonly playerService: PlayerService,
    private readonly validationService: ValidationService,
    private readonly matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.startingEleven = this.playerService.getStarting();
    this.bench = this.playerService.getBench();
    this.validateStarting();
  }

  validateStarting() {
    return this.validationService
      .validate(this.startingEleven, this.bench)
      .subscribe({
        next: (data) => {
          console.log(data);
          let value = data as ValidationResult;
          this.isStartingOk = value.valid;
          this.validationErrorList = value.validationErrorList;
        },
        error: (error) => console.error(error),
        complete: () => console.log('complete'),
      });
  }

  openSnack() {
    if (this.isStartingOk) {
      this.matSnackBar.open('The starting lineup is ok.');
    } else {
      this.matSnackBar.open(this.validationErrorList[0]);
    }
  }
}
