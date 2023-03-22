import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon/pokemon.interface';
import { PokeapiService } from '@services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss'],
})
export class PokemonTableComponent implements OnInit {
  public pokemonList: Pokemon[] = [];
  constructor(private _pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this._pokeapiService.getAllPokemon(151).subscribe((result: any) => {
      this.pokemonList = result.results;
    });
  }
}
