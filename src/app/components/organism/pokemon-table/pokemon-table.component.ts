import { Component, OnInit } from '@angular/core';
import { PokeapiAll } from '@models/pokeapi/pokeapi-all.interface';
import { Pokemon } from '@models/pokemon/pokemon.interface';
import { PokeapiService } from '@services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss'],
})
export class PokemonTableComponent implements OnInit {
  /**
   * Array who store the list with all pokemon names
   */
  public pokemonList: Pokemon[];
  /**
   * String with the background color to set
   */
  public colorBackground: string;
  /**
   * Check if the battleMode is enabled
   */
  public battleMode: boolean;
  /**
   * Store the pokemon data who are going to battle
   */
  public selectedForBattleList: Pokemon[];
  constructor(private _pokeapiService: PokeapiService) {
    this.pokemonList = [];
    this.selectedForBattleList = [];
    this.colorBackground = '#fc9f9f';
    this.battleMode = false;
  }

  /**
   * OnInit function
   * Starts the component functions
   */
  ngOnInit(): void {
    this.getPokemonList();
  }
  /**
   * getPokemonList function
   * Makes the first request to API
   * Gets the first list of all pokemon we need
   */
  getPokemonList() {
    this._pokeapiService.getAllPokemon(151).subscribe((result: any) => {
      this.pokemonList = result.results;
    });
  }
  /**
   * Function that handle when the battleMode is enable or disabled to change styles
   * and reset the selectedForBattleList.
   */
  handleButtonBattleMode() {
    this.battleMode ? (this.battleMode = false) : (this.battleMode = true);
    if (this.battleMode) {
      this.colorBackground = 'black';
      return;
    }
    this.selectedForBattleList = [];
    this.colorBackground = '#fc9f9f';
  }
  /**
   * Function that store the pokemonData emitted by the cards when
   * are selected for battle.
   * @param pokemon
   */
  handlePokemonSelected(pokemon: Pokemon) {
    this.selectedForBattleList.push(pokemon);
  }

  handlebuttonStartBattle() {
    this.handleButtonBattleMode();
  }
}
