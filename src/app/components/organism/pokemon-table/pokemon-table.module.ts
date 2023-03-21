import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonTableRoutingModule } from './pokemon-table-routing.module';
import { PokemonTableComponent } from './pokemon-table.component';


@NgModule({
  declarations: [PokemonTableComponent],
  imports: [
    CommonModule,
    PokemonTableRoutingModule
  ]
})
export class PokemonTableModule { }
