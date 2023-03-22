import { Component, OnInit } from '@angular/core';
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
  public pokemonList: Pokemon[] = [];
  constructor(private _pokeapiService: PokeapiService) {}

  /**
   * OnInit function
   * Makes the first request to API
   * Gets the first list of all pokemon we need
   */
  ngOnInit(): void {
    this._pokeapiService.getAllPokemon(151).subscribe((result: any) => {
      this.pokemonList = result.results;
    });
  }
}
