import { Component, Input, OnInit } from '@angular/core';
import { PokeapiOne, TypePoke } from '@models/pokeapi/pokeapi-one.interface';
import { Pokemon } from '@models/pokemon/pokemon.interface';
import { PokeapiService } from '@services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonData!: Pokemon;

  constructor(
    private _pokeapiService: PokeapiService
  ) { }

  ngOnInit(): void {
    this._pokeapiService.getPokemon(this.pokemonData.name).subscribe((result: PokeapiOne) => {    
      this.pokemonData.image = result.sprites.front_default;
      this.pokemonData.type = [];
      result.types.forEach((typePoke: TypePoke) => {
        this.pokemonData.type.push(
          typePoke.type.name
        )
      });     
    });
  }

}
