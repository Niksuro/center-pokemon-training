import { Injectable } from '@angular/core';
import { Pokemon } from '@models/pokemon/pokemon.interface';
import { TypeDamage } from '@models/pokemon/type-damage.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculateWinnerService {
  constructor() {}

  /**
   * Function that calculate who pokemon win a battle using
   * the damage relation types.
   * @param firstPokemon Data from first pokemon
   * @param secondPokemon Data from second pokemon
   * @param typeDamageFirstPokemon DataDamageType from first pokemon
   * @param typeDamageSecondPokemon DataDamageType from second pokemon
   * @returns a label with the winner or tie, and logs from both pokemon
   */
  handleCalculateWinner(
    firstPokemon: Pokemon,
    secondPokemon: Pokemon,
    typeDamageFirstPokemon: TypeDamage[],
    typeDamageSecondPokemon: TypeDamage[]
  ) {
    let totalDamageFirst: number = 0;
    let totalDamageSecond: number = 0;
    let logFirstPokemon: string[] = [];
    let logSecondPokemon: string[] = [];

    typeDamageFirstPokemon.forEach((type, index) => {
      secondPokemon.types.forEach((element) => {
        if (type.doubleDamageFrom.includes(element)) {
          totalDamageFirst -= 70;
          logFirstPokemon.push(
            '-70 points received from ' +
              element +
              ' for ' +
              firstPokemon.types[index]
          );
        }

        if (type.doubleDamageTo.includes(element)) {
          totalDamageFirst += 70;
          logFirstPokemon.push(
            '+70 points made against ' +
              element +
              ' with ' +
              firstPokemon.types[index]
          );
        }

        if (type.halfDamageFrom.includes(element)) {
          totalDamageFirst -= 30;
          logFirstPokemon.push(
            '-30 points received from ' +
              element +
              ' for ' +
              firstPokemon.types[index]
          );
        }

        if (type.halfDamageTo.includes(element)) {
          totalDamageFirst += 30;
          logFirstPokemon.push(
            '+30 points made against ' +
              element +
              ' with ' +
              firstPokemon.types[index]
          );
        }
      });
    });

    typeDamageSecondPokemon.forEach((type, index) => {
      firstPokemon.types.forEach((element) => {
        if (type.doubleDamageFrom.includes(element)) {
          totalDamageSecond -= 70;
          logSecondPokemon.push(
            '-70 points received from ' +
              element +
              ' for ' +
              secondPokemon.types[index]
          );
        }

        if (type.doubleDamageTo.includes(element)) {
          totalDamageSecond += 70;
          logSecondPokemon.push(
            '+70 points made against ' +
              element +
              ' with ' +
              secondPokemon.types[index]
          );
        }

        if (type.halfDamageFrom.includes(element)) {
          totalDamageSecond -= 30;
          logSecondPokemon.push(
            '-30 points received from ' +
              element +
              ' for ' +
              secondPokemon.types[index]
          );
        }

        if (type.halfDamageTo.includes(element)) {
          totalDamageSecond += 30;
          logSecondPokemon.push(
            '+30 points made against ' +
              element +
              ' with ' +
              secondPokemon.types[index]
          );
        }
      });
    });
    if (totalDamageFirst > totalDamageSecond) {
      return {
        winner: 'The winner is ' + firstPokemon.name + '!',
        logFirst: logFirstPokemon,        
        logSecond: logSecondPokemon,
        damageFirst: totalDamageFirst,
        damageSecond: totalDamageSecond,
      };
    }
    if (totalDamageFirst < totalDamageSecond) {
      return {
        winner: 'The winner is ' + secondPokemon.name + '!',
        logFirst: logFirstPokemon,
        logSecond: logSecondPokemon,
        damageFirst: totalDamageFirst,
        damageSecond: totalDamageSecond,
      };
    }
    return {
      winner: 'Tie!',
      logFirst: logFirstPokemon,
      logSecond: logSecondPokemon,
      damageFirst: totalDamageFirst,
      damageSecond: totalDamageSecond,
    };
  }
}
