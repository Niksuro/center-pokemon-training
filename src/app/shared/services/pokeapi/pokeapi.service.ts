import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { PokeapiAll } from '@models/pokeapi/pokeapi-all.interface';
import { PokeapiOne } from '@models/pokeapi/pokeapi-one.interface';
import { TypeData } from '@models/pokeapi/pokeapi-type.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private apiUrl: string = environment.apiUrl;

  private getAllPokemonService: string =
    this.apiUrl + 'pokemon?limit={quantity}';
  private getPokemonService: string = this.apiUrl + 'pokemon/{name}';
  private getTypeDataService: string = this.apiUrl + 'type/{name}';

  constructor(private httpClient: HttpClient) {}

  getAllPokemon(quantity: number) {
    return this.httpClient.get<PokeapiAll>(
      this.getAllPokemonService.replace('{quantity}', quantity.toString())
    );
  }
  getPokemon(name: string) {
    return this.httpClient.get<PokeapiOne>(
      this.getPokemonService.replace('{name}', name)
    );
  }
  getTypeData(name: string) {
    return this.httpClient.get<TypeData>(
      this.getTypeDataService.replace('{name}', name)
    );
  }
}
