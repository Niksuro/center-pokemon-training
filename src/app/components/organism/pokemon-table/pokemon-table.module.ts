import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTableRoutingModule } from './pokemon-table-routing.module';
import { PokemonTableComponent } from './pokemon-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from '../../molecules/pokemon-card/pokemon-card.component';
import { MatCardModule } from '@angular/material/card';
import { TagTypeComponent } from '@atoms/tag-type/tag-type.component';

@NgModule({
  declarations: [PokemonTableComponent, PokemonCardComponent, TagTypeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonTableRoutingModule,
    MatCardModule,
  ],
  providers: [HttpClient, HttpClientModule],
})
export class PokemonTableModule {}
