import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon/pokemon.interface';

@Component({
  selector: 'app-modal-stats',
  templateUrl: './modal-stats.component.html',
  styleUrls: ['./modal-stats.component.scss']
})
export class ModalStatsComponent implements OnInit {

  public pokemonData!: Pokemon;

  constructor() { }

  ngOnInit(): void {
    console.log('Pokemon: ', this.pokemonData);
    
  }

}
