import { Component, Input, OnInit } from '@angular/core';
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
  @Input() pokemonData!: Pokemon;

  constructor(
    private _pokeapiService: PokeapiService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
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
        this.pokemonData.type = [];
        result.types.forEach((typePoke: TypePoke) => {
          this.pokemonData.type.push(typePoke.type.name);
        });
      });
  }

  openModal(): void {
    const restore = this.dialog.open(ModalStatsComponent, {
      width: '55rem',
      id: 'statsBox',
      maxWidth: '90%',
    });
    restore.componentInstance.pokemonData = this.pokemonData;
  }
}
