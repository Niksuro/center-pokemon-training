import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokeapiAll } from '@models/pokeapi/pokeapi-all.interface';
import { Pokemon } from '@models/pokemon/pokemon.interface';
import { ModalFightComponent } from '@molecules/modal-fight/modal-fight.component';
import { ModalTutorialComponent } from '@molecules/modal-tutorial/modal-tutorial.component';
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
  constructor(private _pokeapiService: PokeapiService, public dialog: MatDialog) {
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
    this.handleStartTutorial();
  }
  /**
   * Function that handle the apperture of tutorial modal
   */
  handleStartTutorial(){
    const dialogRef = this.dialog.open(ModalTutorialComponent, {
      width: '40rem',
      id: 'statsBox',
      maxWidth: '90%',
    });
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
  /**
   * Function that open a modal with the fight results
   * After that, resets the battleMode
   */
  handlebuttonStartBattle() {
    const dialogRef = this.dialog.open(ModalFightComponent, {
      width: '65rem',
      id: 'statsBox',
      maxWidth: '90%',
    });
    dialogRef.componentInstance.firstPokemon = this.selectedForBattleList[0];
    dialogRef.componentInstance.secondPokemon = this.selectedForBattleList[1];
    dialogRef.afterClosed().subscribe(() => { this.handleButtonBattleMode(); })
  }
}
