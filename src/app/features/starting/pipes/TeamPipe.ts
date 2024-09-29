import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../player';
@Pipe({
  name: 'team',
})
export class TeamPipe implements PipeTransform {
  transform(value: Team): string {
    switch (value) {
      case Team.JUVENTUS:
        return 'Juventus';
      case Team.COMO:
        return 'Como';
      case Team.BOLOGNA:
        return 'Bologna';
      case Team.INTER:
        return 'Inter';
      case Team.MILAN:
        return 'Milan';
      case Team.GENOA:
        return 'Genoa';
      case Team.FIORENTINA:
        return 'Fiorentina';
      case Team.VERONA:
        return 'Verona';
      case Team.LAZIO:
        return 'Lazio';
      case Team.ROMA:
        return 'Roma';
      case Team.MONZA:
        return 'Monza';
      case Team.NAPOLI:
        return 'Napoli';
      case Team.CAGLIARI:
        return 'Cagliari';
      case Team.VENEZIA:
        return 'Venezia';
      case Team.TORINO:
        return 'Torino';
      case Team.PARMA:
        return 'Parma';
      case Team.UDINESE:
        return 'Udinese';
      case Team.LECCE:
        return 'Lecce';
      case Team.ATALANTA:
        return 'Atalanta';
      default:
        return '';
    }
  }
}
