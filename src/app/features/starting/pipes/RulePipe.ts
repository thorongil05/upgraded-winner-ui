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
        return 'In ogni team non ci puó essere piú di un giocatore della stessa squadra';
      case Rule.STARTING_XI_NUMBER:
        return 'La formazione titolare deve essere composta da 11 giocatori';
      case Rule.BENCH_NUMBER:
        return 'La panchina deve avere 2 giocatori per ruolo (eccetto per il portiere)';
      case Rule.TOTAL_NUMBER_OF_PLAYERS:
        return 'Il numero di giocatori deve essere 11 + 6';
      case Rule.LINE_UP_COMPLIANT:
        return 'Le formazioni accettate sono 4-3-3, 4-4-2, 4-5-1, 3-4-3, 3-5-2';
      default:
        return 'Rule not defined';
    }
  }
}
