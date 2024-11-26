import { Injectable } from '@angular/core';
import { Player, Role } from '../player';

@Injectable({
  providedIn: 'root',
})
export class TextExporterService {
  constructor() {}

  export(startingEleven: Player[], bench: Player[]): string {
    var text: string = `Formazione`;

    startingEleven.forEach((player) => {
      if (player.role == Role.GOALKEEPER) {
        text = text + `\n${player.team}`;
      } else {
        text = text + `\n${player.name} - ${player.team}`;
      }
    });

    text = text + `\n\n`;

    bench.forEach((player) => {
      text = text + `\n${player.name} ${player.team}`;
    });

    return text;
  }
}
