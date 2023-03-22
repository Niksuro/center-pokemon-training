import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PokeapiAll } from '@models/pokeapi/pokeapi-all.interface';
import { PokeapiOne } from '@models/pokeapi/pokeapi-one.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private apiUrl: string = environment.apiUrl;

  private getAllPokemonService: string = this.apiUrl + "pokemon?limit={quantity}";
  private getPokemonService: string = this.apiUrl + "pokemon/{name}";

  constructor(private httpClient: HttpClient) { }

  getAllPokemon(quantity: number) {
    return this.httpClient.get<PokeapiAll[]>(this.getAllPokemonService.replace('{quantity}', quantity.toString()));
  }
  getPokemon(name: string) {
    return this.httpClient.get<PokeapiOne>(this.getPokemonService.replace('{name}', name));
  }
}