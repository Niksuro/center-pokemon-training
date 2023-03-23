import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Pokemon } from '@models/pokemon/pokemon.interface';
import { TypeData } from '@models/pokeapi/pokeapi-type.interface';
import { PokeapiService } from '@services/pokeapi/pokeapi.service';
import { TypeDamage } from '@models/pokemon/type-damage.interface';
import { TypeDecomposerService } from '@services/helpers/type-decompose/type-decomposer.service';
import { CalculateWinnerService } from '@services/helpers/calculate-winner/calculate-winner.service';

@Component({
  selector: 'app-modal-fight',
  templateUrl: './modal-fight.component.html',
  styleUrls: ['./modal-fight.component.scss'],
})
export class ModalFightComponent implements OnInit {
  /**
   * Data from first pokemon to fight
   */
  public firstPokemon!: Pokemon;
  /**
   * Data from second pokemon to fight
   */
  public secondPokemon!: Pokemon;
  /**
   * Label from the winner pokemon
   */
  public winner: string;
  /**
   * Store a log from the pokemon battle with the first pokemon
   */
  public logFirstPokemon: string[];
  /**
   * Store a log from the pokemon battle with the second pokemon
   */
  public logSecondPokemon: string[];
  /**
   * Total damage made from first pokemon
   */
  public damageFirst: number;
  /**
   * Total damage made from second pokemon
   */
  public damageSecond: number;
  /**
   * Store the damage relation types from first pokemon
   */
  public typeDamageFirstPokemon: TypeDamage[];
  /**
   * Store the damage relation types from second pokemon
   */
  public typeDamageSecondPokemon: TypeDamage[];
  /**
   * Helper counter to check if all types were requested
   */
  private typesCount: number;
  constructor(
    public dialogRef: MatDialogRef<ModalFightComponent>,
    private _pokeApiService: PokeapiService,
    private _decomposer: TypeDecomposerService,
    private _calculator: CalculateWinnerService
  ) {
    this.typeDamageFirstPokemon = [
      {
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
      },
      {
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
      },
    ];
    this.typeDamageSecondPokemon = [
      {
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
      },
      {
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
      },
    ];
    this.typesCount = 0;
    this.logFirstPokemon = [];
    this.logSecondPokemon = [];
    this.winner = '';
    this.damageFirst = 0;
    this.damageSecond = 0;
  }

  ngOnInit(): void {
    this.getTypeDamageRelation();
  }
  /**
   * Function that request the damage relation types from pokemon
   * who are going to fight
   * Use the decomposeType as DataTransferObject, to simplify the
   * response
   * After that check if can calculate the battle.
   */
  getTypeDamageRelation() {
    this.firstPokemon.types.forEach((type, index) => {
      this._pokeApiService
        .getTypeData(type)
        .subscribe((resultFirst: TypeData) => {
          this.typeDamageFirstPokemon[index].doubleDamageFrom =
            this._decomposer.decomposeType(
              resultFirst.damage_relations.double_damage_from
            );
          this.typeDamageFirstPokemon[index].doubleDamageTo =
            this._decomposer.decomposeType(
              resultFirst.damage_relations.double_damage_to
            );
          this.typeDamageFirstPokemon[index].halfDamageFrom =
            this._decomposer.decomposeType(
              resultFirst.damage_relations.half_damage_from
            );
          this.typeDamageFirstPokemon[index].halfDamageTo =
            this._decomposer.decomposeType(
              resultFirst.damage_relations.half_damage_to
            );
          this.calculateFight();
        });
    });
    this.secondPokemon.types.forEach((type, index) => {
      this._pokeApiService
        .getTypeData(type)
        .subscribe((resultSecond: TypeData) => {
          this.typeDamageSecondPokemon[index].doubleDamageFrom =
            this._decomposer.decomposeType(
              resultSecond.damage_relations.double_damage_from
            );
          this.typeDamageSecondPokemon[index].doubleDamageTo =
            this._decomposer.decomposeType(
              resultSecond.damage_relations.double_damage_to
            );
          this.typeDamageSecondPokemon[index].halfDamageFrom =
            this._decomposer.decomposeType(
              resultSecond.damage_relations.half_damage_from
            );
          this.typeDamageSecondPokemon[index].halfDamageTo =
            this._decomposer.decomposeType(
              resultSecond.damage_relations.half_damage_to
            );
          this.calculateFight();
        });
    });
  }
  /**
   * Function that calculate the pokemon battle
   * Wait until all the types were checked and then use the
   * handleCalculateWinner service to get who is the winner
   */
  calculateFight() {
    this.typesCount++;
    if (
      this.typesCount ===
      this.firstPokemon.types.length + this.secondPokemon.types.length
    ) {
      const calculatedFight = this._calculator.handleCalculateWinner(
        this.firstPokemon,
        this.secondPokemon,
        this.typeDamageFirstPokemon,
        this.typeDamageSecondPokemon
      );
      this.winner = calculatedFight.winner;
      this.damageFirst = calculatedFight.damageFirst;
      this.damageSecond = calculatedFight.damageSecond;
      this.logFirstPokemon = calculatedFight.logFirst;
      this.logSecondPokemon = calculatedFight.logSecond;
    }
  }

  /**
   * Close the actual modal
   */
  closeModal() {
    this.dialogRef.close(true);
  }
}
