import { Pipe, PipeTransform } from '@angular/core';
import { Rule } from '../compliance';

@Pipe({
  name: 'rule',
})
export class RulePipe implements PipeTransform {
  transform(value: Rule): string {
    switch (value) {
      case Rule.ONLY_ONE_GOALKEEPER:
        return 'In ogni team ci deve essere sempre e solo un portiere';
      case Rule.ONLY_ONE_PLAYER_PER_TEAM:
        return 'In ogni team ci deve essere al massimo un giocatore per ogni squadra';
      default:
        return '';
    }
  }
}
