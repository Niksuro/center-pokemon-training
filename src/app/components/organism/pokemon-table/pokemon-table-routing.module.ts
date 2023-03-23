import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PokemonTableComponent } from './pokemon-table.component';

const routes: Routes = [
  {
    path: "",
    component: PokemonTableComponent,
    data: {
      meta: {
        robots: environment.statusMetaIndexGeneric
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonTableRoutingModule { }
