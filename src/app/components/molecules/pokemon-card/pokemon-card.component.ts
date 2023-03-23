import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokeapiOne, TypePoke } from '@models/pokeapi/pokeapi-one.interface';
import { Pokemon } from '@models/pokemon/pokemon.interface';
import { ModalStatsComponent } from '@molecules/modal-stats/modal-stats.component';
import { PokeapiService } from '@services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  /**
   * Receive the data to consult more info about a pokemon
   */
  @Input() pokemonData!: Pokemon;
  /**
   * Check if the battleMode is active
   */
  @Input() battleMode: boolean;
  /**
   * Check if the two pokemons for battle were already selected
   */
  @Input() selectedForBattle: boolean;
  /**
   * Emitter when a pokemon selection for battle was made
   */
  @Output() pokemonSelectedBattle = new EventEmitter<Pokemon>();
  /**
   * Check if the card was selected to change styles
   */
  public selectedPokemon: boolean = false;
  constructor(
    private _pokeapiService: PokeapiService,
    public dialog: MatDialog
  ) {
    this.battleMode = false;
    this.selectedForBattle = false;
  }
  /**
   * OnInit function
   * Starts the component functions
   */
  ngOnInit(): void {
    this.getPokemonData();
  }
  /**
   * onChanges function
   * Check when the battle mode changes to execute the function handleResetCard()
   * @param changes changes from parent inputs
   */
  ngOnChanges(changes: any) {
    if (changes?.battleMode) {
      changes?.battleMode?.currentValue ? null : this.handleResetCard();
    }
  }
  /**
   * getPokemonData function
   * Using the name getted in pokemonData input, request more information
   * about that pokemon.
   */
  getPokemonData() {
    this._pokeapiService
      .getPokemon(this.pokemonData.name)
      .subscribe((result: PokeapiOne) => {
        this.pokemonData.image = result.sprites.front_default;
        this.pokemonData.health = result.stats[0].base_stat;
        this.pokemonData.attack = result.stats[1].base_stat;
        this.pokemonData.defense = result.stats[2].base_stat;
        this.pokemonData.specialAttack = result.stats[3].base_stat;
        this.pokemonData.specialDefense = result.stats[4].base_stat;
        this.pokemonData.speed = result.stats[5].base_stat;
        this.pokemonData.types = [];
        result.types.forEach((typePoke: TypePoke) => {
          this.pokemonData.types.push(typePoke.type.name);
        });
      });
  }
  /**
   * Function that open a modal with more details about
   * a pokemon.
   */
  openModal(): void {
    const restore = this.dialog.open(ModalStatsComponent, {
      width: '55rem',
      id: 'statsBox',
      maxWidth: '90%',
    });
    restore.componentInstance.pokemonData = this.pokemonData;
  }
  /**
   * Function that handle click over the card
   * if the battleMode isn't enable, execute the function openModal()
   * else emit the pokemon data and change styles with the variable selectedPokemon
   */
  handleClickCard() {
    if (!this.battleMode) {
      this.openModal();
      return;
    }
    if (this.selectedForBattle) {
      this.selectedPokemon = true;
      this.pokemonSelectedBattle.emit(this.pokemonData);
    }
  }
  /**
   * Function that reset styles with the variable selectedPokemon
   */
  handleResetCard() {
    this.selectedPokemon = false;
  }
}
