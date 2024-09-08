import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../features/starting/player';
@Pipe({
  name: 'role',
})
export class RolePipe implements PipeTransform {
  transform(value: Role): string {
    switch (value) {
      case Role.GOALKEEPER:
        return 'Portiere';
      case Role.DEFENDER:
        return 'Difensore';
      case Role.MIDFIELDER:
        return 'Centrocampista';
      case Role.STRICKER:
        return 'Attaccante';
      default:
        return '';
    }
  }
}
