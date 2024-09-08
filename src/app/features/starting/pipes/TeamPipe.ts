import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../player';
@Pipe({
  name: 'team',
})
export class TeamPipe implements PipeTransform {
  transform(value: Team): string {
    switch (value) {
      case Team.BOLOGNA:
        return 'Bologna';
      case Team.INTER:
        return 'Inter';
      default:
        return '';
    }
  }
}
