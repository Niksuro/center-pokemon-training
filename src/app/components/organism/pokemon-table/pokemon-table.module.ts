import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTableRoutingModule } from './pokemon-table-routing.module';
import { PokemonTableComponent } from './pokemon-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from '../../molecules/pokemon-card/pokemon-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TagTypeComponent } from '@atoms/tag-type/tag-type.component';
import { HeaderComponent } from '@molecules/header/header.component';
import { FooterComponent } from '@molecules/footer/footer.component';

@NgModule({
  declarations: [
    PokemonTableComponent,
    PokemonCardComponent,
    TagTypeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonTableRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
  ],
  providers: [HttpClient, HttpClientModule],
})
export class PokemonTableModule {}
